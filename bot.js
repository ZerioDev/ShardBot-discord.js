//Require discord.js
const Discord = require("discord.js");

//New client
const client = new Discord.Client();

//If the client is ready
client.on("ready", () => {
  console.log("Launched bot !")
});

//New Webhook
client.statusHook = new Discord.WebhookClient("ID", "PASSWORD")

//Shard ready
client.on("shardReady", async shard => {
    client.statusHook.send(`Shard **#${shard}** ready on **${client.guilds.cache.size}** servers and **${client.users.cache.size}** users.`)
})

//Shard disconnect
client.on("shardDisconnect", async shard => {
    client.statusHook.send(`Shard **#${shard}** disconnected from its servers and users temporarily...`)
})

//Shard reconnecting
client.on("shardReconnecting", async shard => {
    client.statusHook.send(`Shard **#${shard}** reconnection in progress on the servers containing this shard...`)
})

//Shard resume
client.on("shardResume", async shard => {
    client.statusHook.send(`Shard **#${shard}** successfully reconnected to **${client.guilds.cache.size}** servers and **${client.users.cache.size}** users.`)
})
