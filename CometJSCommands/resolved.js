const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {


  let bicon = bot.user.displayAvatarURL
  let errorEmbed = new Discord.RichEmbed()
  .setColor("#4286f4")
  .setThumbnail(bicon)
  .setTitle("Horray!")
  .addField("Status:", ":beginner:  Everything is resolved! :beginner: ")
  .addField("Requested at:", message.createdAt);


    message.delete().catch(O_o=>{});
    message.channel.send(errorEmbed);
}

module.exports.help = {
  name: "resolved"
}
