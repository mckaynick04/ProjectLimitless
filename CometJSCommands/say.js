const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return;
  if(message.content === "^saya") return
  const sayMessage = args.join(" ");


  message.delete().catch(O_o=>{});
  message.channel.send(sayMessage);

}

module.exports.help = {
  name: "say"
}
