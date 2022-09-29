const Discord = require('discord.js');

const client = new Discord.Client(); 

const config = require('./config.json') 

client.on("ready", async() => { 
  console.log("bot is ready")
});

client.on("message", async(message) => {
  var prefix = config.prefix
  args = message.content.split(" ")
  
  let command = args[0].replace(prefix, "")
  
  if (command == "ping") {
    message.reply("pong")
  }
});

client.login("bot token here")
