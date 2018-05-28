
var guildList = client.guilds.array();
        try {
            guildList.forEach(guild => guild.defaultChannel.send("messageToSend"));
        } catch (err) {
            console.log("Could not send message to " + guild.name);
        }
