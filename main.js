const { GatewayIntentBits, Client, EmbedBuilder } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const config = require(`${process.cwd()}/config.json`);
require('colors');

client.on('ready', () => {
    console.log('ready!'.green)
})

client.login(config.token)

client.on('messageCreate', async (message) => {
    if(message.author.bot || !message.guild || message.channel.isDMBased()) return;
    var prefix = config.prefix
    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    client.color = config.color;

    if(command === 'ASDLGÑMLÑ32'){
        let embed = new EmbedBuilder()
            .setAuthor({name: 'Episodio 01'})
            .setDescription(`Hello world \`${client.ws.ping}ms\`!`)
            .setColor(client.color)
        message.channel.send({embeds: [embed]})
    }
})