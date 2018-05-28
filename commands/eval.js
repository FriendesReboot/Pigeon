  function clean(text) {
    if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      else
    return text;
};
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
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      const embed = new  Discord.RichEmbed()
        .setTitle("Ran successfully")
        .setDescription("The evaluation has ran successfully!")
        .addField("Output", "```" + clean(evaled) + "```")
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
        .setColor([135, 21, 153])
        .setTimestamp();
      message.channel.send({embed})
    } catch (err) {
      const embed = new  Discord.RichEmbed()
        .setTitle("What has happened!?")
        .setDescription("An error has occoured!")
        .addField("Output", "```" + clean(err) + "```")
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
        .setColor([135, 21, 153])
        .setTimestamp();
      message.channel.send({embed})
    }
}
