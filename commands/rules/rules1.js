const Discord = require('discord.js');
module.exports = {
    name: 'rule1',
    description: 'this commands mutes a member!',
    execute(message, args) {
 let embed = new Discord.MessageEmbed()
 .setTitle("[Swears, Profanity/Inappropriate languages]")
 .setDescription("Inappropriate languages should be minimum. For examples FUCK. (Attempting to bypass the Words will be resulting an mute.)")
 .setColor("RANDOM")
 message.channel.send(embed)
}
    }
