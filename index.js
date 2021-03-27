const Discord = require('discord.js');

const Client = new Discord.Client();

client.once('ready', () => {
    console.log( 'Ready !' )
});