const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let bicon = bot.user.displayAvatarURL
let sicon = message.guild.iconURL;
let serverEmbed = new Discord.RichEmbed()
.setTitle("MemberCount & Server Info")
.addField("Server name;", message.guild.name)
.addField("Owner;", `${message.guild.owner}, With ID ${message.guild.ownerID}`)
.addField("MemberCount;", message.guild.memberCount)
.addField("Channels;", message.guild.channels.size, true)
.addField("Roles", message.guild.roles.size, true)
.addField("Available;", message.guild.available)
.addField("AFK Timeout;", message.guild.afkTimeout)
.addField("Created on;", message.guild.createdAt)
.addField("Region;", message.guild.region)
.addField("Verified;", message.guild.verified)
.addField("You joined;", message.guild.joinedAt)
.setColor("#b70000")
.setThumbnail(sicon)
.setFooter("Made by Unfair Studios", bicon)
.setTimestamp(message.createdAt);

message.channel.send(serverEmbed);

}

module.exports.help = {
  name: "serverinfo"
}
