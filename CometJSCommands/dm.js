const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!dUser) return message.channel.send("Can't find user!")
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You can't you that command!")
    let dMessage = args.join(" ").slice(22);
    if(dMessage.length < 0) return message.reply('You must supply a message!')



    dUser.send(`${dUser} The **Lead Developer** from **Unfair Studios** sent you: **${dMessage}**`)


    message.author.send(`${message.author} you have sent your message to ${dUser}`)



message.delete().catch(O_o=>{});
}
module.exports.help = {
  name: "dm"
}
