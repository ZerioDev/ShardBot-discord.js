# ShardBot-discord.js
A short example to set up the shards on your discord bot ! 🏓

Are you trying to understand shards ? This code is for you !

Well, let's start by downloading the code.
Go to the the file `config.json`.
For the bot to be able to start, please complete the token :

```js
{
    "token": "XXX"
}
```

### 🔔 Launch

To install discord.js :

```
npm i discord.js
```

To launch the bot with the sharder file :

```
#With Node
node sharder.js

#With pm2
pm2 start sharder.js --name "ShardBot"
```

### 📊 Explanations

The shard is imposed by discord if your bot exceeds 2500 servers. Below it is not imposed.
The goal of the shard is to launch the bot on the different servers but to be able to manage these servers.

Setting the scene :

Shard 1 > 500 servers
Shard 2 > 800 servers

If the bot shuts down on shard 1 it will no longer respond on the 500 servers it contains.
But if i go to a shard 2 server the bot will respond.

To add more shards :

```
#Example to get two shards
manager.spawn(2)

#Example to get fives shards
manager.spawn(5)
```

### 👑 Information

You can also get information about your different shards, more information about the documentation right [here](https://discordjs.guide/sharding/additional-information.html#eval-arguments).

Example to get the ping of each shard :

```js
const results = await this.client.shard.broadcastEval(() => {
    return [
        this.shard.ids[0],
        Math.round(this.ws.ping),
    ];
});
```

If you have any further questions, do not hesitate to open a issue !
