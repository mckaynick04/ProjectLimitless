const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {

let uicon = message.author.displayAvatarURL
let bicon = bot.user.displayAvatarURL
let userEmbed = new Discord.RichEmbed()
.setTitle("User Info")
.setThumbnail(uicon)
.setColor("#b70000")
.addField("Name:", message.author.username, true)
.addField("ID:", message.author.id, true)
.addField("Joined server:", message.guild.joinedAt, true)
.addField("Made account:", message.author.createdAt, true)
.addField("Roles:", message.member.guild.rolesCount, true)
.setFooter("Made by Unfair Studios", bicon)
.setTimestamp(message.createdAt);

  message.channel.send(userEmbed);

}

module.exports.help = {
  name: "userinfo"
}
