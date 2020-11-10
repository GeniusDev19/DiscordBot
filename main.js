const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!bot';


client.once('ready', () => {
      console.log('Bot is online.');
});

client.on('message', message =>{
      if(!message.content.startsWith(prefix) || message.author.bot) return;

      const args = message.content.slice(prefix.length).split(/ +/);
      const command = args.shift().toLowerCase();

      if(command === 'ping'){
            message.channel.send('pong!');
      } else if (command == 'youtube'){{
            message.channel.send('https://www.youtube.com');
      }
};

client.login('Nzc1NTQ2MzMzMTc1NjExNDAy.X6n5zg.3aX3ysSXfqiP4lL9-hXCjw38lLo')