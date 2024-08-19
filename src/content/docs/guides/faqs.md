---
title: Frequently Asked Questions
description: A guide for o7 docs site.
---

## Connection issues

## I'm having issues connecting to the RPC node

**Answer**: First, make sure that your account is funded. You can check this on the [Dashboard](https://o7node.com/dashboard).

Second, make sure that you are connecting to the node using the IP address you've configured in the dashboard:

If you're on a remote server, you can run `curl api.ipify.org` to see the IP address you're connecting to the internet from.

If you're on a local machine (e.g. your laptop or PC), you can visit _api.ipify.org_ to see your IP address.

If you enter your IP address and still have issues connecting, your VPS may use IPv6 for connecting to external services.

To fix this, get your current IPv6 address by running `curl https://api6.ipify.org` on your server (or visiting _api6.ipify.org_ if you are trying to connect locally) and configuring that IP address in your Dashboard.

**Note: the https://api6.ipify.org URL will ONLY work if you are on IPv6. If you are unsure whether your VPS is using IPv4 or IPv6, this is a great way to check!**

Next, check the connection details for the node you're trying to connect to. All o7 Nodes require secure connections (HTTPS and WSS). If your connection URL includes `http` (not `https`) or `ws` (not `wss`), you will not be able to connect.

If you have done all the above things, and think something may be wrong with the node itself, check out the [Status page](https://status.o7node.com/) to see if there are any known issues.

If you are still unable to connect, join our Discord channel using the link below.


[Discord](https://discord.com/invite/UBnZzPFXbB)

## How do I connect to the node from [insert service here]?

**Answer:** You can connect to our RPC nodes using the HTTPS endpoint and WSS (websocket) endpoint URLs.

For instance, here is how to connect to the node using the solana-web3.js library:

```
const connection = new solanaWeb3.Connection(
  'https://node-address', 
  'wss://node-address'
);
```
If you're using a trading bot or other service, you will need to consult the documentation for that service to see how to connect to a Solana RPC node. Generally, you would provide these URLs in a configuration file, such as `config.ini` or `.env`:

```
RPC_ENDPOINT=https://node-address
RPC_WEBSOCKET_ENDPOINT=wss://node-address
```

If you're having trouble connecting, consider joining our Discord (link above) and ask the community!

## How many transactions per second (TPS) can I make to the node?

**Answer:** We do not limit the number of transactions per second you can make with o7 Node.

## How many requests per second (RPS) can I make to the node?

**Answer:** o7 Node enforces reasonable request limits for both HTTP and WebSocket connections. These limits are designed to keep transaction confirmation rates high for all users, reduce abuse of the node, as well as bad faith requests on the Solana network itself.

**Currently, our rate limit is 400 requests per second.** This rate limit can and will change over time as we adjust to traffic patterns.

Additional measures are deployed on our nodes to mitigate against spammer/DDOS traffic.

## How do you ensure that transactions have the best chance to succeed?

**Answer:** Congestion on the Solana network can lead to failed transactions and high average response times. The Solana Explorer website shows the average ping time for transactions on the Solana network.

You may also be able to increase the priority fee for your transactions to increase the success rate.

## Account management and funding
**I've transferred money to my Solana wallet but nothing is happening**
**Answer:** Make sure that you have funded your wallet with enough Solana to include fees. For instance, if the price is `1 SOL`, you should make sure the wallet balance is closer to `1.005 SOL`.

## How do I fund my account?
You can subscribe to o7 Node by credit card or Solana payments. If you are interested in paying by credit card, select "Pay by credit card" when signing up for your account. You can switch your account payment type at any time by clicking the "Your account" button on your dashboard and selecting "Pay by credit card" on your account page.

Every o7 Node account has a managed Solana wallet. You can fund your account by sending SOL to the wallet address displayed on the [Dashboard](https://o7node.com/dashboard).

If you don't know how to fund an account, we recommend installing an easy-to-use wallet like [Phantom](https://phantom.app/), and funding your account that way.

Once you have Solana in your Phantom wallet, send a transaction to your o7 Node wallet address.

Every 30 days, we will transfer the necessary funds from your wallet to pay for the service.

## What happens if my account isn't funded?

If your wallet doesn't have enough Solana and we are unable to automatically transfer the funds to pay for the service, you will lose access to the o7 Node. You will receive an email notification when this happens.

To regain access, you will need to fund your account. Once you have done so, the service will be automatically re-enabled.

## How do I disable my account?

To disable your account, visit the [Dashboard](https://o7node.com/dashboard) and click the "Disable account" button. This will stop the automatic payments and disable the service. Note that you will immediately lose access to the RPC node. You can re-enable your account at any time.

## I sent too much money to my wallet! Can I get a refund?

Sorry, we are unable to refund any funds sent to your o7 Node wallet. Please be careful when sending funds.

## Can I provide my own Solana wallet?

No, we do not support external wallets. Every o7 Node account has a managed Solana wallet. For safety purposes, treat your managed wallet as a "hot" wallet and do not transfer any additional funds that you need access to.

## Can I get the private key for my wallet?

For security purposes, we do not allow access to wallet private keys, both to users and to staff members of o7 Node. All private keys for wallets are encrypted at rest and are not accessible to anyone.

## How does o7 Node's Affiliate Program work?

Every user is provided a unique affiliate link when they sign up for their account. You can send this link to your friends. If they sign up using your affiliate code, you will receive 10% of their subscription fee paid to the Solana wallet of your choice. This payment happens in the first few days of every month.


