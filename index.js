
const Discord = require("discord.js");
const client = new Discord.Client();
const token1 = "NDc0NTM0NDA1MDkyOTMzNjQz.Dq364Q.7eom10Hso0MK5foK6Nm3Sgbf4C4";
const token2 = "NDc0MzEyNzY3OTQwMzI5NDcz.DrEXPA.tyRZG4JuhPuFvHmwMBvkI2YJoO4";
const token3 = "NDc0Njc3MDM0NTY4NjQ2Njg0.DrJ78w.N-wm_KlZrvVY66nX8BsWd1wy3Nc";

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


client.login(token1);
client.login(token2);
client.login(token3);
