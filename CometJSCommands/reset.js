
const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    switch(message.content.toUpperCase()) {
        case '^RESET':
            resetBot(message.channel);
            break;

        // ... other commands
    }
};

// Turn bot off (destroy), then turn it back on
function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Resetting...')
    .then(msg => bot.destroy())

}

module.exports.help = {
  name: "reset"
}
