const Discord = require('discord.js');
const client = new Discord.Client();
client.disabledMembers = new Map();
client.login(process.env.token);

client.on('ready', async () => {
        console.log('I am ready!');
        client.user.setPresence({
            activity: {
            name:  "I want to talk to your manager.",
            type: "PLAYING"
          
            }

    });


client.on('message', async (message) => {
        if(message.author.bot) return;
        const args = message.content.trim().split(/ +/g);
        if((args[0].toLowerCase() == 'i\'m' || args[0].toLowerCase() == 'im') && (args[1]) && !client.disabledMembers.has(message.author.id)){
                message.channel.send(`Hi ${args.slice(1).join(' ')}, I want to talk to your manager.`);
        }
        owos = ['owo', 'ovo', 'uwu', 'uvu', 'unu', 'ono', 'umu', 'ene', 'nun'];
        if(owos.includes(args[0].toLowerCase()) && !client.disabledMembers.has(message.author.id)) message.channel.send('stfu');
        if(message.mentions.has(client.user)){
    
                if(message.content.indexOf('stop') !== -1) client.disabledMembers.set(message.author.id, message.guild.id)
                else if (message.content.indexOf('no, get your fakeass manager here!') !== -1 && client.disabledMembers.has(message.author.id)) client.disabledMembers.delete(message.author.id);
        }
 
        managers = ['cashier', 'worker', 'manager'];
        if(managers.includes(args[0].toLowerCase()) && !client.disabledMembers.has(message.author.id)) message.channel.send('I SAID, GET ME YOUR MANAGER!');
        if(message.mentions.has(client.user)){
                
            if(message.content.indexOf('I wanna talk to your manager.') !== -1) client.disabledMembers.set(message.author.id, message.guild.id)
                else if (message.content.indexOf('stfu') !== -1 && client.disabledMembers.has(message.author.id)) client.disabledMembers.delete(message.author.id);
        }

        shuts = ['shut', 'stfu', 'shut the fuck up'];
        if(shuts.includes(args[0].toLowerCase()) && !client.disabledMembers.has(message.author.id)) message.channel.send("Listen here, I will not tolerate you saying the words that consist of the letters 's h u t  u p'. I only want to talk to your manager, so take your own advice and close your annoying fucking mouth and get your fakeass manager here.");
        if(message.mentions.has(client.user)){

        }
        stops = ['stop', 'enough', 'annoying'];
        if(stops.includes(args[0].toLowerCase()) && !client.disabledMembers.has(message.author.id)) message.channel.send("Listen here you little shit, you invited me to this server so shut up, and get me your manager.");
        if(message.mentions.has(client.user)){

        }
        managers = ['developer', 'owner'];
        if(managers.includes(args[0].toLowerCase()) && !client.disabledMembers.has(message.author.id)) message.channel.send("This bot is made by; Casstey Schwarzenegger#0001 ");
        if(message.mentions.has(client.user)){
        }
    });

})