const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NjY0MTA5Nzg2Nzk0ODE5NjA0.XhSTFw.BXSk_MkmVPqp4yp42wMZ8lmRnTI);
