const botconfig = require("./botconfig.json");
const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
new Discord.ShardClientUtil(bot);
bot.commands = new Discord.Collection();
let cooldown = new Set();


fs.readdir("./CometJSCommands", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

 jsfile.forEach((f, i) => {
   let props = require(`./CometJSCommands/${f}`);
   console.log(`${f} loaded!`);
   bot.commands.set(props.help.name, props);
 });

});
bot.on("ready", async () =>{
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity(bot.guilds.size + " " + "servers! | ^help", {type: "Watching"});
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  if(cooldown.has(message.author.id)){
    message.delete();
    let bicon = bot.user.displayAvatarURL
    let coolDownEmbed = new Discord.RichEmbed()

    .setDescription("Cooldown")
    .setcolor("#f44242")
    .addField(`${message.author} calm down there, pal! You now have a 5s cooldown.`)
    .setFooter("Made by Unfair Studios", bicon)
    .setTimestamp(message.createdAt);

    message.channel.send(coolDownEmbed);
  }
  if(!message.member.hasPermissions("MANAGE_ROLES")) {
    cooldown.add(message.author.id);

  }

  let prefix = "^"
  let messageArray = message.content.split(" ");
  let cmd = messageArray [0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot, message, args);

});

bot.login(botconfig.token);
