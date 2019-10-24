const Discord = require('discord.js');
const ms = ("ms");



module.exports.run = async (bot, message, args) => {

let globalReason = args.join(" ").slice(11);
let globalEmbed = new Discord.RichEmbed()
  .setTitle("Important Announcement | Unfair Studios Development Team")
  .setDescription(globalReason, `_`)
  .setColor('#FF0000')
  .setFooter("Limitless Studios Bot Development", bot.user.displayAvatarURL)
  .setTimestamp();



  bot.guilds.forEach(guild => {
      guild.channels.find(t => t.name == 'general').send(globalEmbed);
  });
}



module.exports.help = {
  name: "gannounce"
}
