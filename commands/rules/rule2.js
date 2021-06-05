const Discord = require('discord.js');
module.exports = {
    name: 'rule1',
    description: 'this commands mutes a member!',
    execute(message, args) {
 let embed = new Discord.MessageEmbed()
 .setTitle("RULE 1")
 .setDescription("Swears, Profanity/Inappropriate languages => warn")
 .setColor("RANDOM")
 message.channel.send(embed)
}
    }
