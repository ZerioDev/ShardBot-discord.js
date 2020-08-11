//Require discord.js
const Discord = require("discord.js");

//New client
const client = new Discord.Client();

//If the client is ready
client.on("ready", () => {
  console.log("Launched bot !")
});
