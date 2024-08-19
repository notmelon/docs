---
title: Frankfurt
description: A guide for o7 docs site.
---

## Connection details
RPC URL (GPA Enabled): `http://frankfurt.o7node.com:7799`

Websocket (WSS) URL: `wss://frankfurt.o7node.com`

Fallback URL*: `https://frankfurt.o7node.com`

## Direct connection details

Direct connections are recommended only if you are running a VPS in the same datacenter as the FRA node. Direct connection performance may vary in other situations.

RPC URL (GPA Enabled): `http://57.129.36.189:7799`

Websocket (WS) URL: `ws://57.129.36.189:8799`

Fallback URL*: `http://57.129.36.189:8799`

## Extras

Jupiter V6 API

URL: `http://51.89.99.90:7070`

Note that you should use HTTP for all Jupiter V6 API requests.

Yellowstone Geyser

URL: `http://frankfurt.o7node.com:10000`

Direct URL: `http://57.129.36.189:10000`

Port: `10000`

Note that you should use HTTP for all Yellowstone Geyser requests, whether using the direct or o7node.com-based URLs.

*: Our URLs are designed to optimize for sending transactions. If you have any issues with your trading software, you may also use using the Fallback URL in your configuration.
