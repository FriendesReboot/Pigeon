exports.run = (Discord, client, message, args) => {
   if(message.author.id !== "424367587934339084" && message.author.id !== "388323805124362240") {
      const embed = new  Discord.RichEmbed()
        .setTitle("You shall NOT pass!")
        .setDescription("You are not authorized to use this command.")
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
        .setColor([135, 21, 153])
        .setTimestamp();
      message.channel.send({ embed })
      return
    };
   const embed = new  Discord.RichEmbed()
        .setTitle("Shutting down bot...")
        .setDescription("The bot will now shut down.")
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
        .setColor([135, 21, 153])
        .setTimestamp();
        message.reply({ embed } )
        .then(msg => client.destroy());
   
}
