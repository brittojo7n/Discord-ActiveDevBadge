const { createInterface } = require('node:readline');
const { Client, Routes } = require('discord.js');

const ping = {
  name: 'ping',
  description: 'Pings the bot and shows the latency'
};

const commands = [ping]; 

const client = new Client({ intents: [] });
const rl = createInterface({ input: process.stdin, output: process.stdout });

client.on('interactionCreate', (interaction) => {
  if (interaction.commandName === 'ping') {
    interaction.reply(`Latency is ${Date.now() - interaction.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);  
  } else {
    interaction.reply('This command is not yet implemented.');
  }
});

const question = (q) => new Promise((resolve) => rl.question(q, resolve));

(async ()=>{
  const token = await question('Application token? ');
  if(!token) throw new Error('Invalid token');
  
  await client.login(token).catch((err) => {
    throw err
  });

  await client.rest.put(Routes.applicationCommands(client.user.id), { body: commands });

  console.log('DONE | Application/Bot is up and running. DO NOT CLOSE THIS TAB UNLESS YOU ARE FINISHED USING THE BOT, IT WILL PUT THE BOT OFFLINE.');
})();
