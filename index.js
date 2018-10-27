
const Discord = require("discord.js");
const client = new Discord.Client();
const token1 = "NDc0MzA5MDY1MzcyMjA1MDc2.DrW3ew.ytfj4JcCwVvp2a0T-bmR_OIDmXA";
const token2 = "NDc0MzA5NTM2NDcyMzY3MTE1.DrW3vg.cLTxPniMEEpGx1SClfQjdhI0K1I";
const token3 = "NDc0Njc3MDM0NTY4NjQ2Njg0.DrJ78w.N-wm_KlZrvVY66nX8BsWd1wy3Nc";
console.log("BOT ONLINE");


 client.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});


 client.on('message', message => {
  
  if (message.content === 'Say Hi') {

message.channel.send('Hi')
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
