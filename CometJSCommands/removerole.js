const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
    if(rMember.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't have their role removed.");
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    let role = args.join(" ").slice(22);
      if(!role) return message.reply("Specify a role!");
      let gRole = message.guild.roles.find(`name`, role);
      if(!gRole) return message.reply("Couldn't find that role!")

      if(rMember.roles.has(gRole.id)) return message.reply("They don't have that role!");
        await(rMember.removeRole(gRole.id));

      try{
        await rMember.send(`RIP, you have been given the role ${gRole.name}.`)
      }catch(e){
        message.channel.send(`RIP, <@${rMember.id},  We removed ${gRole.name} from them. We tried to DM them, but their DMs are locked!`);
      }
  };


module.exports.help = {
  name:"removerole"
}
