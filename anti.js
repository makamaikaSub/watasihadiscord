const Discord = require('discord.js');
const { Client, MessageAttachment } = require('discord.js');
const client = new Discord.Client()
const AntiSpam = require("discord-anti-spam");
const antiSpam = new AntiSpam({
    warnThreshold: 10, // Amount of messages sent in a row that will cause a warning.
    muteThreshold: 4, // Amount of messages sent in a row that will cause a mute
    kickThreshold: 7, // Amount of messages sent in a row that will cause a kick.
    banThreshold: 7, // Amount of messages sent in a row that will cause a ban.
    maxInterval: 2000, // Amount of time (in milliseconds) in which messages are considered spam.
    warnMessage: '{@user}, Please stop spamming.', // Message that will be sent in chat upon warning a user.
    kickMessage: '**{user_tag}** has been kicked for spamming.', // Message that will be sent in chat upon kicking a user.
    muteMessage: '**{user_tag}** has been muted for spamming.',// Message that will be sent in chat upon muting a user.
    banMessage: '**{user_tag}** has been banned for spamming.', // Message that will be sent in chat upon banning a user.
    maxDuplicatesWarning: 6, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesKick: 5, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesBan: 7, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesMute: 8, // Ammount of duplicate message that trigger a mute.
    ignoredPermissions: [ 'ADMINISTRATOR'], // Bypass users with any of these permissions.
    ignoreBots: true, // Ignore bot messages.
    verbose: true, // Extended Logs from module.
    ignoredMembers: [], // Array of User IDs that get ignored.
    muteRoleName: "Muted", // Name of the role that will be given to muted users!
    removeMessages: true // If the bot should remove all the spam messages when taking action on a user!
    // And many more options... See the documentation.
});



client.on("ready", () => console.log(`Logged in as ${client.user.tag}.`)); //cmdにはじめにだす
client.on('message', async message => {//上のと同じ
  if (message.content.startsWith('m!allantispam') && message.guild) {

      if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send('権限がありません');
   message.channel.send("すべてのチャンネルをantispamしました")
  message.guild.channels.cache.find((channel)=>{
const a = channel.id
channel.setTopic('antispam')

    })
  }//イベント終了
});


client.on('message', async message => {//上のと同じ
if (message.content.startsWith('m!antispam') && message.guild) {
if (!message.member.hasPermission('ADMINISTRATOR'))
return message.channel.send('権限がありません');
  message.channel.setTopic('antispam')
message.channel.send("このチャンネルをスパム対策しました")}});//イベント終了

client.on('message', async message => {//上のと同じ
if (message.content.startsWith('m!noantispam') && message.guild) {
if (!message.member.hasPermission('ADMINISTRATOR'))
return message.channel.send('権限がありません');

  message.channel.setTopic(' ')
message.channel.send("このチャンネルをスパム対解除しました")}});//イベント終了


client.on("ready", () => console.log(`Logged in as ${client.user.tag}.`)); //cmdにはじめにだす
client.on('message', async message => {//上のと同じ
  if (message.content.startsWith('m!noallantispam') && message.guild) {
      if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send('権限がありません');
    message.channel.send("すべてのチャンネルのantispamを解除しました")
  message.guild.channels.cache.find((channel)=>{
const a = channel.id
channel.setTopic(' ')

    })
  }//イベント終了
});

client.on("message", (message) => {
    if (!message.channel.topic) {
    //エラー回避
    return;
  }
  if (message.channel.topic.match(/antispam/)) {
    //トピックのところを対象にする
    antiSpam.message(message);
  }
}); //実行