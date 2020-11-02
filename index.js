const discord =require("discord.js");
const botConfig = require("./botconfig.json");

const client = new discord .Client();
client.login(botConfig.token);

client.on("ready", async () => {

console.log (`${client.user.username} is online`);
client.user.setActivity("Timo is haram Pt.22", {type: "WATCHING"});

});

client.on("message", async message =>{

 if(message.author.bot) return

 if (message.channel.type == "dm")
     return message.channel.send("Doner")

var prefix = botConfig.prefix;

var messageArray = message.content.split(" ");

var command = messageArray[0];

    if(command === `${prefix}doner`) {
        return message.channel.send("Kebab");
    }


    if(command === `${prefix}kebab`) {
        return message.channel.send("Doner");
    }

    if(command === `${prefix}donerkebab`) {

        var botEmbed = new discord.MessageEmbed()
            .setTitle("OOOOOOOOOOOOOOW")
            .setDescription("Ey Lachmagoen hoofd Je kan maar een Gebruiken Hé")
            .setColor("#fc1c03")
            .setImage("https://cdn.drawception.com/drawings/611640/BZWcJsYnvj.png")
            
        return;

    }

});

client.login(process.env.token);
