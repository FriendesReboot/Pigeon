  function clean(text) {
    if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      else
    return text;
};
exports.run = (client, message, args) => {
      const item = args.join(" ");
      if item == "me a beach ball" {
        message.reply("Here you go! <a:BouncingBeachBall:449383018793271307>");
      } else {
        message.reply("I cannot give that to you, sorry :(");
      }
}
