const Discord = require('discord.js');
//const errors = require('../utils/errors.js');

module.exports.run = async (bot, message, args) => {


//Finding the user to ban
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));


//Help card
  let bicon = bot.user.displayAvatarURL
  let helpembedBan = new Discord.RichEmbed()
  .setDescription("~Command Helper~")
  .setThumbnail(bicon)
  .setColor("#f44242")
  .addField("How to use ^ban!", "Usage: **^ban [user] [reason]**")
  .setTimestamp(message.createdAt);



//If the user asks for a name that doesn't exist, it replies with the help card, if not it replies with the turn
//down message.
  if(!bUser) return message.channel.send(helpembedBan);
  let bReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("No can do pal!");
  if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");


//Ban embed
  let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#dc42f4")
    .addField("Banned User", `${bUser} with ID: ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

//Finding log channel
    let logschannel = message.guild.channels.find(`name`, "logs");
    if(!logschannel) return message.channel.send("Can't find logs channel!");


//Sending ban info
    message.guild.member(bUser).ban(bReason);
    logschannel.send(banEmbed);

}

module.exports.help = {
  name: "ban.js"
}
