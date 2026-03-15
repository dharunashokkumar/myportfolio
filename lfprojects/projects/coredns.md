# CoreDNS

## category
Networking & Edge, Cloud

## about
i went into this knowing zero about dns. so i started from scratch — dns is the phonebook of the internet. you type `google.com`, a dns server translates that to an ip like `142.250.77.46`. without this, nothing loads.

the dns system has layers. at the top are 13 root server addresses (actually 1700+ machines globally, run by universities, nonprofits, the us army, and nasa). below them are tld servers handling `.com`, `.in`, etc. and then recursive resolvers like google `8.8.8.8` and cloudflare `1.1.1.1` — these are the middlemen that chase down answers for you.

i got confused between root servers and google/cloudflare dns — they're completely different things. root servers are the top of the hierarchy, only other dns servers talk to them. google's `8.8.8.8` is a recursive resolver that talks TO root servers on your behalf.

coredns is a modern dns server written in go that replaces bind (the 1980s dns software). the big idea — it's plugin-based. you start with a bare core and snap on only what you need: `forward` to route queries, `log` to see them, `cache` to speed things up. like lego.

its main real-world use — **kubernetes runs coredns as its default dns**. inside a cluster, containers find each other using names like `payment-service.default.svc.cluster.local` and coredns resolves those to the right ip in real time.

other uses i learned about: dns-level ad blocking (return `0.0.0.0` for ad domains), split dns in companies (internal domains stay internal, rest goes to public dns), and creating custom local domains like `myapp.dharun.local` pointing to localhost.

contributing is medium difficulty — you need go, but the plugin system means you can write a small plugin without touching core code. it's a cncf graduated project.

## thoughts
the 13 root server limit exists because dns response packets had to fit in 512 bytes back in the 1980s. the whole internet's architecture was shaped by one old constraint. that's wild.

people switch from isp dns to google/cloudflare for three reasons — speed, privacy, and bypassing government blocks. when india blocks a site, they do it at the isp's dns level. switch to `8.8.8.8` and it works again. didn't know that before.

coredns plugin architecture is genuinely clean. bind is a swiss army knife with 50 tools welded together. coredns is lego — snap on what you need, nothing else runs. unix philosophy applied to dns.

i didn't install it this session but i know exactly what to do next — run coredns locally with a simple corefile, point my laptop's dns to `127.0.0.1`, and watch every query in real time. also want to try `dig google.com +trace` to see the full root → tld → authoritative chain live.

## resources
- [official site](https://coredns.io/)
- [github repo](https://github.com/coredns/coredns)
- [quick start guide](https://coredns.io/2017/07/24/quick-start/)
- [plugins list](https://coredns.io/plugins/)
- [kubernetes plugin docs](https://coredns.io/plugins/kubernetes/)
- [coredns in kubernetes](https://kubernetes.io/docs/tasks/administer-cluster/coredns/)