const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let bicon = bot.user.displayAvatarURL
  let botembed = new Discord.RichEmbed()
  .setDescription("Bot Information")
  .setColor("#15f153")
  .setThumbnail(bicon)
  .addField("Bot Name", bot.user.username, true)
  .addField("Created On", bot.user.createdAt, true)
  .addField("Bot Status:", message.client.status + " "+ "~"+ " " + "ONLINE")
  .addField("Current guilds:", bot.guilds.size, true)
  .setFooter("Made by Unfair Studios", bicon)
  .setTimestamp(message.createdAt);

  message.channel.send(botembed);

}

module.exports.help = {
  name: "botinfo"
}
