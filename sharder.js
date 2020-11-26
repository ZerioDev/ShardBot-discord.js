//Requires discord.js for sharding
const { ShardingManager } = require('discord.js');

//Config file
const config = require("./config.json");

//New manager with bot.js
const manager = new ShardingManager('./bot.js', { token: config.token, autoSpawn: true, respawn: true }); // Reboot even after crashes

//Number of shards automatic
manager.spawn();
