
const Discord = require("discord.js");
const client = new Discord.Client();

console.log("BOT ONLINE");


 client.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});


 client.on('message', message => {
  
  if (message.content === 'Say Hi') {

message.channel.send('Fine')
}
});


 client.on('message', message => {
  
  if (message.content === 'Weak Up') {

message.channel.send('Hello my Master')
}
});



client.login(tokenfile.token);
