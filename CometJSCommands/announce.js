const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {


//Permissions
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("No can do pal!");


//Announcement info card
 let annoucementInfo = args.join(" ");
 let bicon = bot.user.displayAvatarURL;
 let announceEmbed = new Discord.RichEmbed()
 .addField("Announcement", annoucementInfo)
 .setTimestamp(message.createdAt)
 .setFooter(`Announcement made by ${message.author}`, bicon);

//Finding announcment channel
  let annoucementChannel = message.guild.channels.find(`name`, "announcements");
  if(!annoucementChannel) return message.channel.send("Couldn't find annnouncements channel!");

//Replying to user if everything else is fine
 if(announcementInfo) return message.channel.send(`${message.author} Okay! I'll announce that!`);


  message.delete().catch(O_o=>{});
  annoucementChannel.send(announceEmbed);

}

module.exports.help = {
  name: "announce"
}
