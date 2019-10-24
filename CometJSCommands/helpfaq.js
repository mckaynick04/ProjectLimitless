const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let hUser = message.guild.member(message.mentions.users.first() ||  message.guild.members.get(args[0]));


message.channel.send(`${message.author}, If the bot appears to be offline, check that it's not just a permissions issue by temporarily giving the bot the Administrator permission or reinviting it. This also may occur if the bot is just restarting. Do ^**help_commands** for command info.`);
message.channel.send(`${message.author}, If there's any other problems that you experience during use, please do contact Unfair Studios directly. Or the __**Lead Developer, Nick**__ *(nick_#0001)*.`)
  }

  module.exports.help = {
    name: "help"
  }
