const Discord = require('discord.js');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {

//Help card
  let bicon = bot.user.displayAvatarURL
  let helpembedMute = new Discord.RichEmbed()
 .setDescription("~Command Helper~")
 .setThumbnail(bicon)
 .setColor("#f44242")
 .addField("How to use ^mute!", "Usage: **^mute [user] [reason]**")
 .addField("P.S.", "You will need to have a channel set up named **logs** for the bot to work with this command.")
 .setFooter("Made by Unfair Studios", bicon)
 .setTimestamp(message.createdAt);



//Finding user
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.channel.send(helpembedMute);
  if(tomute.hasPermissions("ADMINISTRATOR")) return message.reply("Can't mute this user!");
  let muterole = message.guild.roles.find(`name`, "muted");
//start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000"

      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
         SEND_MESSAGES: false,
          ADD_REACTIONS: false,
          JOIN_VOICE: false,
          CHANGE_NICKNAME: false,

        });
      });
     }catch(e){
     console.log(e.stack);
    }
  }
//end of muted role creation
let mutetime = args[1];
if(!mutetime) return message.reply("You didn't specify a time!");

await(tomute.addRole(muterole.id));

message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);
setTimeout(function(){
  tomute.removeRole(muterole.id);
  message.channel.send(`<@${tomute.id}> has been unmuted!`);
}, ms(mutetime));


//end of module
}

module.exports.help = {
  name:"mute"
}
