const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

let bicon = bot.user.displayAvatarURL;
let pingEmbed = new Discord.RichEmbed()
.setTitle("Pong")
.setColor("#4286f4")
.setDescription(`${message.createdTimestamp - Date.now()}` + ' ms');

message.channel.send(pingEmbed);
}

module.exports.help = {
  name: "ping"
}
