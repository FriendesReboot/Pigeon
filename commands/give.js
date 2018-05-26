  function clean(text) {
    if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      else
    return text;
};
exports.run = (client, message, args) => {
      const argumentals = args.join(" ");
      if (argumentals === "me a beach ball") {
        message.reply("Here you go! <a:BouncingBeachBall:449383018793271307>");
      } else if (argumentals === "me a mac wait cursor") {
        message.reply("Spinning beach ball of doom... Well, can't stop ya. <a:BeachBall:449382607185117184>");
      } else if (argumentals === "me a Finobe") {
        message.reply("Here's your Finobe! https://finobe.com");
      } else if (argumentals === "me a finobe") {
            message.reply("Wrong spelling?");
      } else {
        message.reply("I cannot give that to you, sorry :(");
      }
}
