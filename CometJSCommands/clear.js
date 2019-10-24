const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

//Checking for permissions
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.");
  if(!args[0]) return message.channel.send("No.");

//Deleting said amount of messages
  message.channel.bulkDelete(args[0]). then(() => {
    message.channel.send(`Cleared ${args[0]} message(s).`).then(msg => msg.delete(2000));

//Deleting the clients message
    message.delete().catch(O_o=>{});
});

}

module.exports.help = {
  name: "clear"
}
