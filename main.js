const Discord = require("discord.js")     //arty
const client = new Discord.Client();       //arty
const config = require("./config.js")    //arty
const fs = require("fs");                //arty
require('./util/Loader.js')(client);     //arty

client.commands = new Discord.Collection(); //arty
client.aliases = new Discord.Collection();  //arty
fs.readdir('./commands/', (err, files) => { //arty
  if (err) console.error(err);               //arty
  console.log(`${files.length} komut yüklenecek.`); //arty
  files.forEach(f => {                       //arty
    let props = require(`./commands/${f}`);   //arty
    console.log(`${props.config.name} komutu yüklendi.`);  //arty
    console.log(`arty <3`)     //arty
    client.commands.set(props.config.name, props); //arty
    props.config.aliases.forEach(alias => {          //arty
      client.aliases.set(alias, props.config.name);  //arty
    });
  });
})

client.login("token")
