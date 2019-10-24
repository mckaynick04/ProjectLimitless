const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

//Finding user
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));


//Help card
  let bicon = bot.user.displayAvatarURL
  let helpembedKick = new Discord.RichEmbed()
  .setDescription("~Command Helper~")
  .setThumbnail(bicon)
  .setColor("#f44242")
  .addField("How to use ^kick!", "Usage: **^kick [user] [reason]**")
  .setTimestamp(message.createdAt);

//If user isn't found, sends help card
  if(!kUser) return message.channel.send(helpembedKick);

  //Finding the reason and implementing it into the info card
  let kReason = args.slice(1).join(" ");

  //Checking for permissions
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
  if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

  let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#f44242")
    .addField("Kicked User", `${kUser} with ID: ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Reason", kReason);

//Finding logs channel
    let logsChannel = message.guild.channels.find(`name`, "logs");
    if(!logsChannel) return message.channel.send("Can't find log(s) channel!");

//Sending the reason and info card to the log channel
    message.guild.member(kUser).kick(kReason);
    logsChannel.send(kickEmbed);

}

module.exports.help = {
  name: "kick"
}
