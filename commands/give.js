  function clean(text) {
    if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      else
    return text;
};
exports.run = (client, message, args) => {
      const argumentals = args.join(" ");
      const lowerargumentals = argumentals.toLowerCase();
      if (lowerargumentals === "me a beach ball") {
        message.reply("Here you go! <a:BouncingBeachBall:449383018793271307>");
      } else if (lowerargumentals === "me a mac wait cursor") {
        message.reply("Spinning beach ball of doom... Well, can't stop ya. <a:BeachBall:449382607185117184>");
      } else if (lowerargumentals === "me a finobe") {
        message.reply("Here's your Finobe! https://finobe.com");
      } else {
        message.reply("I cannot give that to you, sorry :(");
      }
}
