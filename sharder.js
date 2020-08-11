//Requires discord.js for sharding
const { ShardingManager } = require('discord.js');

//Config file
const config = require("./config.json");

//New manager with bot.js
const manager = new ShardingManager('./bot.js', { token: config.token });

//For two shards
manager.spawn(2);
