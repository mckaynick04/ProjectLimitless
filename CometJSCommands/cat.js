const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (bot, message,args) => {

   let {body} = await superagent
   .get(`https://aws.random.cat/meow`);

   let dogEmbed = new Discord.RichEmbed()
   .setColor("#ff9900")
   .setTitle("mEoW!1111!")
   .setImage(body.url);

   message.channel.send(dogEmbed);

}

module.exports.help = {
  name: "cat"
}
