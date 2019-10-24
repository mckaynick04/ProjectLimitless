const Discord = require('discord.js');


module.exports.run = async  (bot, message, args) => {

let kermitEmbed = new Discord.RichEmbed()
.setColor("#ff000")
.setTitle("yEeT")
.addField("https://tenor.com/view/excited-kermit-kermit-the-frog-happy-woo-gif-13598448", "_");

message.channel.send(kermitEmbed);
}

module.exports.help = {
  name: "yeet"
}
