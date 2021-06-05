const Discord = require('discord.js');
module.exports = {
    name: 'rule3',
    description: 'this commands mutes a member!',
    execute(message, args) {
 let embed = new Discord.MessageEmbed()
 .setTitle("RULE 1")
 .setDescription("3. [Scam Links] Do not post Scams that steals accounts, currencies or address at anywhere including surveys. This is the reason we have to use bot to automatically modify all scam links in text channels.")
 .setColor("RANDOM")
 message.channel.send(embed)
}
    }
