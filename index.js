
const Discord = require("discord.js");
const client = new Discord.Client();
const token1 = "NDc0MzMwNjc5NjI3MzUwMDE3.DrTYnA.V2FxPiejXsWO3mwTcU0uX8GMIG0";
const token2 = "NDc0OTQyNDI4NjcyMTYzODUx.DrTYdA.IrPz885Wibs8mGmL7wY_KBJl1po";
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
