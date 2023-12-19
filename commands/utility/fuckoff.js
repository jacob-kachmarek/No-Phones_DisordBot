const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fuckoff')
        .setDescription('Gets those silly phone users out of your ears.'),
    async execute(interaction) {
        // Check if the user is in a voice channel
        const member = interaction.guild.members.cache.get(interaction.user.id);
        if (!member.voice.channel) {
            return interaction.reply('You need to be in a voice channel to use this command.');
        }
        // Iterate through members in the voice channel
        member.voice.channel.members.forEach(async (voiceMember) => {
            // Check if the member is on a mobile device
            const isMobile = voiceMember.presence.activities.some(activity => activity.name === 'Mobile');
            if (isMobile) {
                // Kick the member from the voice channel
                await member.voice.kick('Mobile users are not allowed in this voice channel.');
                console.log(`${member.user.tag} kicked from the voice channel.`);
            }
        });
        await interaction.reply('Scanning complete. Mobile users have been kicked.');
    },
};