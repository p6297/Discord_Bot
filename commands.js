require("dotenv").config();
const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'ping',
    description: 'Replies with a pong',
  },
];

const rest = new REST({ version: '10' }).setToken("MTEyNzk5MDQ3ODA2Nzk5MDU3OA.GUKP4J.Abv9iULUl6KC5vis9cg2wlkUKTJg3exLgZugGs");

(async()=> {
    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }
})();