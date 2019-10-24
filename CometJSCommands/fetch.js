const Discord = require('discord.js');
const botconfig = require('../botconfig.json');

module.exports.run = async (bot, message, args) => {
let bicon = bot.user.displayAvatarURL
let fetchMemberEmbed = new Discord.RichEmbed()
.setDescription("Member Fetch")
.setColor(red)
.addField("Member", message.guild.fetchMember())
.setFooter("Made by Unfair studios", bicon)
.setTimestamp(message.createdAt);

message.channel.send(fetchMemberEmbed);


}
module.exports.help = {
  name: "fetch"
}
