const Discord = require('discord.js');
const botconfig = require('../botconfig.json');
const Report = require("../models/report.js");
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://admin_user1:0hTarowi09.11@atlas-gqor3.mongodb.net/test', {
  useNewUrlParser: true
});

module.exports.run = async (bot, message, args) => {

  message.delete();
          let reportUser = message.mentions.members.first();
          if(!reportUser) message.channel.send(":x: User field: No user specified or the user is not in this server.");
          let rReason = args.slice(11).join(" ");
          if(!rReason) message.channel.send(":x: Reason field: No reason specified.");

          if(rReason){
              if(reportUser){
                  const report = new Report({
                    _id: mongoose.Types.ObjectId(),
                      username: reportUser.name,
                      userID: reportUser.id,
                      reason: rReason,
                      rUsername: message.author.name,
                      rID: message.author.id,
                      time: message.createdAt

                  });

                  report.save()
                  .catch(err => console.log(err));

                  let successEmbed = new Discord.RichEmbed()
                  .setTitle("Success!")
                  .setDescription(`**${reportUser}** has been reported for:\n**${rReason}**`)
                  .setTimestamp()
                  .setColor("#80f9ff");

          }
        }


 message.channel.send("Due to storage problems with the bot, it cannot keep accurate logs on how many modlog reports you have, and you may experience the case number resetting everytime the bot updates.", true)

message.delete().catch(O_o=>{});
 logschannel.send(warnEmbed);

}

module.exports.help = {
name: "report"
}
