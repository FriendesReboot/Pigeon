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
        function ting(item) {
                var upchannel = item.channels.find("pg-updates");
               if(!upchannel) return;
               upchannel.send("<:info:449011075569156097> Update: " + messageToSend);
        };
        const messageToSend = args.join(" ");
        var guildList = client.guilds.array();
        try {
            guildList.forEach(ting);
        message.channel.send("<:check:449010650019135519> Ran successfully")
        } catch (err) {
            message.channel.send("<:error:449010650010615828> Failed to run");
            console.error(err);
        }
}
