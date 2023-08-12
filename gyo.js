// çıtırından shitcode oldu kusura bakmayın.
// github.com/ozcangyo


const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const gamedig = require('gamedig'); 

const prefix = '!';

client.on('ready', () => {
  console.log(`benim adım ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === `${prefix}oyuncular`) {
    try {
      const players = await gamedig.query({
        type: 'mtasa',
        host: '193.223.107.144', // ip adresini gir buraya brom
        port: 22003,
      });

      const playerList = players.players.map(player => `\`\`\`${player.name}\`\`\``).join('\n');

      const embed = {
        title: 'XX Roleplay',
        fields: [
          {
            name: 'OYUNCULAR',
            value: playerList || "Herhangi bir oyuncu yok.",
            inline: true,
          },
          {
            name: 'Sunucu Açıklaması',
            value: '```Sunucu hakkında ufak açıklama, ip adresi vs vs yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı ..```',
            inline: true,
          },
          {
            name: 'Sosyal Medya',
            value: '```Site instagram benzeri adreslerinizi ekleyebilirsiniz yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı ```',
            inline: true,
          },
        ],
        timestamp: new Date(),
        footer: {
          text: '© Delta Tech - GYO',
        },
      };

      message.reply({ embeds: [embed] });
    } catch (error) {
      console.error('Hata:', error);
      message.reply('[GYO] Bir hata oluştu, lütfen daha sonra tekrar deneyin.');
    }
  }
});

client.login("BURAYA_TOKEN"); // töken
