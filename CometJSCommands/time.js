const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let bicon = bot.user.displayAvatarURL
  let timeEmbed = new Discord.RichEmbed()
  .setColor("#f44242")
  .addField("Current time at Unfair HQ", message.createdAt)
  .setFooter("Made by Unfair Studios", bicon)
  .setTimestamp(message.createdAt);

  message.channel.send(timeEmbed);
}

module.exports.help = {
  name: "time"
}
