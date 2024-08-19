---
title: Virginia
description: A guide for o7 docs site.
---

## Connection details
RPC URL (GPA Enabled): `http://va.o7node.com:7799`

Websocket (WSS) URL: `wss://va.o7node.com`

Fallback URL*: `https://va.o7node.com`

## Direct connection details

Direct connections are recommended only if you are running a VPS in the same datacenter as the VA node. Direct connection performance may vary in other situations.

RPC URL (GPA Enabled): `http://15.204.241.116:7799`

Websocket (WS) URL: `ws://15.204.241.116:8799`

Fallback URL*: `http://15.204.241.116:8799`

## Extras

Jupiter V6 API

URL: `http://15.204.205.200:7070`

Note that you should use HTTP for all Jupiter V6 API requests.

Yellowstone Geyser

URL: `http://va.o7node.com:10000`

Direct URL: `http://15.204.241.116:10000`

Port: `10000`

Note that you should use HTTP for all Yellowstone Geyser requests, whether using the direct or o7node.com-based URLs.

*: Our URLs are designed to optimize for sending transactions. If you have any issues with your trading software, you may also use using the Fallback URL in your configuration.
