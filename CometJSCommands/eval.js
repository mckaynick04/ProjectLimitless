const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {

bot.shard.fetchClientValues('guilds.size')
  .then(results => {
    console.log(`${results.reduce((prev, val) => prev + val, 0)} total guilds`);
  })
.catch(console.error);


let bicon = bot.user.displayAvatarURL
let evalScript = new Discord.RichEmbed()

.setDescription("EVAL RESULTS")
.addField("Shard Count;", bot.shard.count)
.setThumbnail(bicon)
.addField("If it is set to 0, the ShardingManager has not initated a shard due to the bot not being in 1,000+ servers.")
.setFooter("Made by Unfair Studios")


message.channel.send(evalScript);


}

module.exports.help = {
  name: "eval"
}
