exports.run = (Discord, client, message, args) => {
   if (message.channel.type === "dm") { // Kill switch for if the message is in DMs
        message.reply("<:error:449010650010615828> The catscare is MUCH funnier when you have friends!")
        return;
      }
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
