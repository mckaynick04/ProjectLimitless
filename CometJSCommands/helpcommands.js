const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let bicon = bot.user.displayAvatarURL
  let helpEmbed = new Discord.RichEmbed()
  .setDescription("~Command Information~")
  .setThumbnail(bicon)
  .setColor("#f44242")
  .addField("Invoke Command:", "help")
  .addField("Moderation Commands:", "announce, tempmute, warn, ban, kick, report, clear, eval, addrole, removerole")
  .addField("Fun Commands:", "dog, cat,")
  .addField("Info Commands:", "eval, membercount, botinfo, uptime, help, serverinfo, userinfo ")
  .setFooter("Made by Unfair Studios", bicon)
  .setTimestamp(message.createdAt);


    message.channel.send(helpEmbed);
  }

  module.exports.help = {
    name: "help_commands"
  }
