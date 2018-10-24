
const Discord = require("discord.js");
const client = new Discord.Client();

console.log("BOT ONLINE");


 client.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});


 client.on('message', message => {
  
  if (message.content === 'Say Hi) {

message.channel.send('Fine')
}
});


 client.on('message', message => {
  
  if (message.content === 'Weak Up') {

message.channel.send('Hello my Master')
}
});


let tokens = process.argv.slice(2)
if(!tokens[0]) {
  console.log("Supply a number of token")
  process.exit(0)
}
let token;
if(tokens[0] === "1") {
  token = "NDc0NTM0NDA1MDkyOTMzNjQz.Dq364Q.7eom10Hso0MK5foK6Nm3Sgbf4C4"
} else if(tokens[0] === "2") {
  token = "NDc0MzEyNzY3OTQwMzI5NDcz.DrEXPA.tyRZG4JuhPuFvHmwMBvkI2YJoO4" 
}  else  if(tokens[0] === "3") {
  token = "NDc0NjA3NTYyNjI1NjQ2NjAz.DrJ7zg.e9EIMFgbm0SHnxqel7wMzHI-j_A"
}
client.login(token);
