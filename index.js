// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

// Create a new client instance.
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this.
client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Login in with token from .env
client.login(process.env.DISCORD_TOKEN);
