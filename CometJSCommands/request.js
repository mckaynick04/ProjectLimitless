const Discord = require('discord.js');



module.exports.run = async (bot, message, args) => {


  let suggestReason = args.join("** **");

  let bicon = bot.user.displayAvatarURL
  let sicon = message.guild.iconURL;
  let suggestEmbed = new Discord.RichEmbed()
  .setDescription("~Suggestion~")
  .setThumbnail(sicon)
  .setColor("b70000")
  .addField("Requested by:", `${message.author} with ID: ${message.author.id}`)
  .addField("Suggestion:", suggestReason)
  .addField("In channel:", message.channel)
  .addField("At time:", message.createdAt)
.setFooter("Made by Unfair Studios", bicon)
.setTimestamp(message.createdAt);



  let suggestchannel = message.guild.channels.find(`name`, "request");
  if(!suggestchannel) return message.channel.send("Couldn't find request channel!");

message.delete().catch(O_o=>{});
suggestchannel.send(suggestEmbed);

}

module.exports.help = {
  name: "suggest"
}
