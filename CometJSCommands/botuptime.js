const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  let totalSeconds = (bot.uptime / 1000);
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
    let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
    let bicon = bot.user.displayAvatarURL
    let uptimeEmbed = new Discord.RichEmbed()
    .setDescription("Bot Uptime")
    .setColor("#f44242")
    .addField("Bot Uptime:", uptime)
    .setThumbnail(bicon);

   message.channel.send(uptimeEmbed);
}

module.exports.help = {
  name:"uptime"
}
