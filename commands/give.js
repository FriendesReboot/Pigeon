  var now = (function () {
    var year = new Date(new Date().getFullYear().toString()).getTime();
    return function () {
        return Date.now() - year
    }
})();
function clean(text) {
    if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      else
    return text;
};
exports.run = (Discord,client, message, args) => {
      const argumentals = args.join(" ");
      const lowerargumentals = argumentals.toLowerCase();
      if (lowerargumentals === "me a beach ball") {
        const embed = new  Discord.RichEmbed()
        .setTitle("Here's your Beach Ball")
        .setDescription("Here's you go! <a:BouncingBeachBall:449383018793271307>")
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
        .setColor([135, 21, 153])
        .setTimestamp();
        message.reply({ embed } );
      } else if (lowerargumentals === "me a mac wait cursor") {
        const embed = new  Discord.RichEmbed()
        .setTitle("Here's your Wait Cursor")
        .setDescription("Spinning beach ball of doom... We'll, can't stop ya. <a:BeachBall:449382607185117184>")
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
        .setColor([135, 21, 153])
        .setTimestamp();
        message.reply({ embed });
      } else if (lowerargumentals === "me a finobe") {
        const embed = new  Discord.RichEmbed()
        .setTitle("Here's your Finobe")
        .setDescription("Oh! Here you go! [The Finobe Website Link.](https://www.finobe.com)")
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
        .setColor([135, 21, 153])
        .setTimestamp();
        message.reply({embed});
      } else if (lowerargumentals === "me finobe") {
        const embed = new  Discord.RichEmbed()
        .setTitle("Here's your Finobe")
        .setDescription("Oh! Here you go! [The Finobe Website Link.](https://www.finobe.com)")
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
        .setColor([135, 21, 153])
        .setTimestamp();
        message.reply({embed});
      } else if (lowerargumentals === "me help") {
        message.reply("Oh no! Some help is on it's way! 🚑");
        const HelpEmbed = new  Discord.RichEmbed()
        .setTitle("Your Help 🚑")
        .setDescription("Hey! I've got your help! To request me, say ppu! in any spelling!")
        .setURL("https://discordapp.com")
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
        .setColor([135, 21, 153])
        .setThumbnail("https://cdn.discordapp.com/avatars/450288720151707658/81a8e401f8e4f58292de9de35f85bf18.png?size=256")
        .addField("Fun", "Pigeon, give me [blank]\nDescription:\nGives you stuff\nThings to request:\nFinobe, Beach Ball, \nMac Wait Cursor,\nHelp\n ", true)
        .addField("Informational", "Pigeon, give me help \nAlias: Pigeon, give me some help\nDescription:\nGives you help.\n ", true)
        .addBlankField(true)
        .addField("NSFW", "To see NSFW commands, type ppu!nsfw help in a NSFW channel")
        .setTimestamp();
        message.author.send("Transporting help to your place...");
        message.author.send({embed: HelpEmbed});
      } else if (lowerargumentals === "me some help") {
        message.reply("Oh no! Some help is on it's way! 🚑");
        const HelpEmbed = new  Discord.RichEmbed()
        .setTitle("Your Help 🚑")
        .setDescription("Hey! I've got your help! To request me, say ppu! in any spelling! (BETA VERSION)")
        .setURL("https://discordapp.com")
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
        .setColor([135, 21, 153])
        .setThumbnail("https://cdn.discordapp.com/avatars/450288720151707658/81a8e401f8e4f58292de9de35f85bf18.png?size=256")
        .addField("Fun", "Pigeon, give me [blank]\nDescription:\nGives you stuff\nThings to request:\nFinobe, Beach Ball, \nMac Wait Cursor,\nHelp\n ", true)
        .addField("Informational", "Pigeon, give me help \nAlias: Pigeon, give me some help\nDescription:\nGives you help.\n ", true)
        .addBlankField(true)
        .addField("NSFW", "To see NSFW commands, type Pigeon, nsfw help in a NSFW channel")
        .setTimestamp();
        message.author.send("Transporting help to your place...");
        message.author.send({embed: HelpEmbed});
      } else {
        message.reply("I cannot give that to you, sorry :(");
      }
}
