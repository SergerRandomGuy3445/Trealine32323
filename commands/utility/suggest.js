const { MessageEmbed } = require("discord.js")


module.exports = {
	name: 'suggest',
	description: 'if he is alive yes!',
	execute(message, args) {
 let = message.content
 .split(" ")
 .slice(1)
 if(!args[0]) return message.channel.send("Hey! To suggest something you need to send something!")
 const reportlog = new Discord.MessageEmbed()
 .setTitle(`A New Suggestion!`) 
 .setColor('RANDOM')
.setDescription(args.join(" "))
.setFooter(`Suggestion by ${message.author.tag}`)
.setTimestamp()
client.channels.cache.get('846736973259079720').send(reportlog).then (sentMessage => {
 sentMessage.react(":arrow_up:")
 sentMessage.react(":arrow_down:")
 })
 message.channel.send("Your Suggestion has been succesfully been sent.")

  }
}

