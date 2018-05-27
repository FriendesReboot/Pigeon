exports.run = (Discord, client, message, args) => {
   const embed = new  Discord.RichEmbed()
        .setTitle("CatScare")
        .setDescription("Cat, GET 'EM!")
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
        .setColor([135, 21, 153])
        .setTimestamp();
        message.reply({ embed } );
        message.channel.send("https://giphy.com/gifs/LEYBoPcaAbDlC");
}
