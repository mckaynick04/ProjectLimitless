const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let bicon = bot.user.displayAvatarURL
  let sicon = message.guild.iconURL;
  let membercountEmbed = new Discord.RichEmbed()
  .setTitle("Member Count")
  .addField("Server Name:", message.guild.name)
  .addField("Member Count:", message.guild.memberCount)
  .setThumbnail(sicon)
  .setFooter("Made by Unfair Studios", bicon)
  .setTimestamp(message.createdAt);

  message.channel.send(membercountEmbed);
}

module.exports.help = {
  name:"membercount"
}
