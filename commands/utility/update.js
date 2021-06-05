const { MessageEmbed } = require("discord.js")


module.exports = {
	name: 'update',
	description: 'if he is alive yes!',
	execute(message, args) {
 return message.channel.send({
                embed: {
                    color: 0x4D5E94,
                    description: `**NO BIG CHANGES. Only new commands are gayrate, Simprate and 8ball**`
                }
            })
  message.delete();
  }
}

