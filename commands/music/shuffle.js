/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
module.exports = {
    name: 'shuffle',
		cooldown:1000,
    aliases: ['sh'],
    category: 'Music',
    utilisation: '{prefix}shuffle',

    run: async(client, message)=> {
        if (!message.member.voice.channel) return message.channel.send(`❌ - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`❌ - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`❌ - No music currently playing !`);

        client.player.shuffle(message);

        return message.channel.send(`✅ - Queue shuffled **${client.player.getQueue(message).tracks.length}** song(s) !`);
    },
};