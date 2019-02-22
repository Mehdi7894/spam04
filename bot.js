const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("548435627746525184")
setInterval(function() {
channel.send(`لعيون توماس`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
