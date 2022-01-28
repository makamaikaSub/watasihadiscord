const Discord = require("discord.js");
const querystring = require("querystring");
const http = require("http");
const client = new Discord.Client();
const prefix = "¥";
const weather = require("weather-js");
const Keyv = require('keyv');
const fetch= require('node-fetch');


client.on("ready", () => {
  console.log("Bot準備完了～\n" + client.user.tag + "にログインしました");
  client.user.setPresence({
    activity: { name: "メンテナンス中" },
    status: 'dnd'
  });
  client.channels.cache
    .get("850881106513625108")
    .send(
      "メインclient\n" +
        client.user.tag +
        "が編集されました\n" +
        client.guilds.cache.size +
        "サーバーに導入されています\n" +
        client.channels.cache.size +
        "チャンネルで使用可能\nver1.01.7\n" +
        client.users.size +
        "人が使用可能"
    );
});

client.on("guildCreate", guild => {
  console.log(guild.name);
  client.channels.cache
    .get("850881106513625108")
    .send(
      "botがサーバーに追加されました\n\n" +
        guild.name +
        "サーバーid\n\n\n" +
        guild.id
    );
});

client.on("message", async message => {

  if (message.author.id == "760825049468633110") {
    if (message.content.match(/¥tao 超激レア/)) {
      message.channel.send({
        embed: {
          title:
            "超激レアです。\n\n\n属性:[陸] ランク:【超激レア】\nチャイナ:ドットが待ち構えている...！\nLv.2,057  HP: 20,620 素早さ: 250",
          image: {
            url:
              "https://cdn.discordapp.com/attachments/883939834350153759/883946506225348608/daiti_18.gif"
          },
          author: {
            name: message.author.username,
            icon_url: message.author.avatarURL()
          },
          color: 7506394,
          timestamp: new Date(),
          footer: {
            icon_url: message.guild.iconURL(),
            text: message.guild.name
          }
        }
      });
    }
    if (message.content.match(/¥tao 激レア/)) {
      message.channel.send({
        embed: {
          title: "激レアです。\n\n\n",
          image: {
            url: message.embeds[0].image.url
          },
          author: {
            name: message.author.username,
            icon_url: message.author.avatarURL()
          },
          color: 7506394,
          timestamp: new Date(),
          footer: {
            icon_url: message.guild.iconURL(),
            text: message.guild.name
          }
        }
      });
    }
    if (message.content.match(/¥tao シリーズ/)) {
      message.channel.send({
        embed: {
          title:
            "シリーズです。\n\n\n属性:[全] ランク:【シリーズ】\nrenofatomato#3840『絵師』が待ち構えている...！\nLv.2,250  HP: 22,550 素早さ: 200",
          image: {
            url:
              "https://cdn.discordapp.com/attachments/883939834350153759/883946328273616898/all_22.png"
          },
          author: {
            name: message.author.username,
            icon_url: message.author.avatarURL()
          },
          color: 7506394,
          timestamp: new Date(),
          footer: {
            icon_url: message.guild.iconURL(),
            text: message.guild.name
          }
        }
      });
    }
    if (message.content.match(/¥tao k 超激レア/)) {
      message.channel.send({
        embed: {
          title: "超激レア、、、貫通です。",
          author: {
            name: message.author.username,
            icon_url: message.author.avatarURL()
          },
          color: 7506394,
          timestamp: new Date(),
          footer: {
            icon_url: message.guild.iconURL(),
            text: message.guild.name
          }
        }
      });
    }
    if (message.content.match(/¥tao k 激レア/)) {
      message.channel.send({
        embed: {
          title: "激レア、、、貫通です。",
          author: {
            name: message.author.username,
            icon_url: message.author.avatarURL()
          },
          color: 7506394,
          timestamp: new Date(),
          footer: {
            icon_url: message.guild.iconURL(),
            text: message.guild.name
          }
        }
      });
    }
    if (message.content.match(/¥tao k シリーズ/)) {
      message.channel.send({
        embed: {
          title: "シリーズ、、、貫通です。",
          author: {
            name: message.author.username,
            icon_url: message.author.avatarURL()
          },
          color: 7506394,
          timestamp: new Date(),
          footer: {
            icon_url: message.guild.iconURL(),
            text: message.guild.name
          }
        }
      });
    }
  } else {
    if (message.content.match(/¥tao 超激レア/)) {
      message.channel.send("開発者のみ、、、です。");
    }
    if (message.content.match(/¥tao 激レア/)) {
      message.channel.send("開発者のみ、、、です。");
    }
    if (message.content.match(/¥tao シリーズ/)) {
      message.channel.send("開発者のみ、、、です。");
    }
    if (message.content.match(/¥tao k 超激レア/)) {
      message.channel.send("開発者のみ、、、です。");
    }
    if (message.content.match(/¥tao k 激レア/)) {
      message.channel.send("開発者のみ、、、です。");
    }
    if (message.content.match(/¥tao k シリーズ/)) {
      message.channel.send("開発者のみ、、、です。");
    }
    return;
  }
  if (message.author.id == "526620171658330112") {
    if (message.embeds[0].title.match(/超激レア/)) {
      message.channel.send({
        embed: {
          title: "超激レアです。\n\n\n" + message.embeds[0].title,
          image: {
            url: message.embeds[0].image.url
          },
          author: {
            name: message.author.username,
            icon_url: message.author.avatarURL()
          },
          color: 7506394,
          timestamp: new Date(),
          footer: {
            icon_url: message.guild.iconURL(),
            text: message.guild.name
          }
        }
      });
    }
    if (message.embeds[0].title.match(/激レア/)) {
      message.channel.send({
        embed: {
          title: "激レアです。\n\n\n" + message.embeds[0].title,
          image: {
            url: message.embeds[0].image.url
          },
          author: {
            name: message.author.username,
            icon_url: message.author.avatarURL()
          },
          color: 7506394,
          timestamp: new Date(),
          footer: {
            icon_url: message.guild.iconURL(),
            text: message.guild.name
          }
        }
      });
    }
    if (message.embeds[0].title.match(/シリーズ/)) {
      message.channel.send({
        embed: {
          title: "シリーズです。\n\n\n" + message.embeds[0].title,
          image: {
            url: message.embeds[0].image.url
          },
          author: {
            name: message.author.username,
            icon_url: message.author.avatarURL()
          },
          color: 7506394,
          timestamp: new Date(),
          footer: {
            icon_url: message.guild.iconURL(),
            text: message.guild.name
          }
        }
      });
    }
    if (message.content.match(/超激レア/)) {
      message.channel.send({
        embed: {
          title: "超激レア、、、貫通です。",
          author: {
            name: message.author.username,
            icon_url: message.author.avatarURL()
          },
          color: 7506394,
          timestamp: new Date(),
          footer: {
            icon_url: message.guild.iconURL(),
            text: message.guild.name
          }
        }
      });
    }
    if (message.content.match(/激レア/)) {
      message.channel.send({
        embed: {
          title: "激レア、、、貫通です。",
          author: {
            name: message.author.username,
            icon_url: message.author.avatarURL()
          },
          color: 7506394,
          timestamp: new Date(),
          footer: {
            icon_url: message.guild.iconURL(),
            text: message.guild.name
          }
        }
      });
    }
    if (message.content.match(/シリーズ/)) {
      message.channel.send({
        embed: {
          title: "シリーズ、、、貫通です。",
          author: {
            name: message.author.username,
            icon_url: message.author.avatarURL()
          },
          color: 7506394,
          timestamp: new Date(),
          footer: {
            icon_url: message.guild.iconURL(),
            text: message.guild.name
          }
        }
      });
    }
  }
  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  if (message.content.match(/¥tenki|¥tenki/)) {
    var locate = message.content.replace("¥tenki ");
    weather.find({ search: "Japan," + locate, degreeType: "C" }, function(
      err,
      result
    ) {
      {
        if (err) message.channel.send(err);
        if (result.length === 0) {
          message.channel.send("**場所を取得できませんでした**");
          return;
        }
        var current = result[0].current;
        switch (current.skytext) {
          case "Mostly Sunny":
            var skytext = "ほぼ晴れ";
            break;
          case "Cloudy":
            var skytext = "曇り";
            break;
          case "Partly Cloudy":
            var skytext = "晴れのち曇り";
            break;
          case "Sunny":
            var skytext = "晴れ";
            break;
          case "Clear":
            var skytext = "雲1つない快晴";
            break;
          case "Mostly Clear":
            var skytext = "ほぼ快晴";
            break;
          case "Mostly Cloudy":
            var skytext = "ほぼ曇り";
            break;
          case "Partly Sunny":
            var skytext = "所により晴れ";
            break;
          case "Light Rain":
            var skytext = "小雨";
            break;
          default:
            var skytext = current.skytext;
            break;
        }
        const embed = new Discord.MessageEmbed()
          .setDescription("**" + skytext + "**")
          .setAuthor(`${current.date}の${current.observationpoint}の天気`)
          .setThumbnail(current.imageUrl)

          .addField("温度", `${current.temperature}℃`, true)
          .addField("体感温度", `${current.feelslike}℃`, true)
          .addField("風", current.winddisplay, true)
          .addField("湿度", `${current.humidity}%`, true);
        message.channel.send(embed);
      }
    });
  }
  if (message.content.match(/¥ping|¥ping/)) {
    message.channel.send(client.ws.ping + "ms\nmainclient");
    return;
  }
  const lastSendTime = {};
  if (lastSendTime[message.channel.id]) {
    if (
      Date.now() - lastSendTime[message.channel.id][message.author.id] <=
      1000 /* ms */
    )
      message.channel.send("スパムしないでください！");
    lastSendTime[message.channel.id][message.author.id] = Date.now();
  } else {
    lastSendTime[message.channel.id] = {};
    lastSendTime[message.channel.id][message.author.id] = Date.now();
  }
  if (message.content.startsWith("¥mmd") && message.guild) {
    // 指定されたメッセージの数を取得
    const how = message.content.split(" ")[1];
    // メンションでユーザーが指定されていなかったら処理を止める
    if (!how || message.mentions.members.size == 0) return;
    // 指定された数のメッセージを取得
    const messages = await message.channel.messages.fetch({ limit: how });
    // メンションで指定されたユーザーのIDのみを配列に入れる
    const mentionMembers = await message.mentions.members.map(m => m.user.id);
    // 指定されたユーザーが発言したメッセージのみを抽出
    const mentionFilter = await messages.filter(msg =>
      mentionMembers.some(userID => userID == msg.author.id)
    );
    // それらのメッセージを一括削除
    message.channel.bulkDelete(mentionFilter).then;
    message.channel.send("削除しました");
  }
  if (message.content.match("テストテストテストテスト")) {
    message.channel.send({
    embed: {
        author: {
          name: message.author.username,
          icon_url: message.author.avatarURL()
        },
        title: "test",
        description:"kokonaiyou",
        color: 7506394,
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL(),
          text: "©️ マカ#7264 & apptesters"
        },
        fields: [
         {
            name: "Links",
            value: "[BotSupportServer](https://discord.gg/nJaUBX8bCs)",
            inline: true
          }
        ]
      }}
    );
  }
  if (message.content.match(/荒らし光栄圏|荒らし光栄軍/)) {
    const role = message.guild.roles.cache.find(role => role.name === "MUTED");
    message.member.roles.add(role).then;
    message.delete().then;
    const reply = await message.channel.send(
      "荒らしはお断りです。\nGG\n理由があったらADMINのDMまで"
    );
    await reply.delete({ timeout: 5000 });
  }
  if (message.content.match("http://re-file.com/18k/")) {
    const role = message.guild.roles.cache.find(role => role.name === "MUTED");
    message.member.roles.add(role).then;
    message.delete().then;
    const reply = await message.channel.send("Disccord規約違反");
    await reply.delete({ timeout: 5000 });
  }
  if (message.content.match("ポッカキット")) {
    const role = message.guild.roles.cache.find(role => role.name === "MUTED");
    message.member.roles.add(role).then;
    message.delete().then;
    const reply = await message.channel.send("yamero?");
    await reply.delete({ timeout: 5000 });
  }
  if (message.content.match("¥anti") && message.guild) {
    const role = message.guild.roles.cache.find(role => role.name === "MUTED");
    if (message.mentions.members.size !== 1)
      return message.channel.send("付与するメンバーを1人指定してください");
    const member = message.mentions.members.first();

    if (!message.member.permissions.has("ADMINISTRATOR"))
      return message.channel.send("あなたには権限がありません");
    member.roles.add(role).then;
    message.channel.send("\nGG");
  }
  if (message.content.match("https://discord.gg/fqq6Q4sbZw")) {
    const role = message.guild.roles.cache.find(role => role.name === "MUTED");
    message.member.roles.add(role).then;
    message.delete().then;
    const reply = await message.channel.send(
      "荒らしはお断りです。\nGG\n理由があったらADMINのDMまで"
    );
    await reply.delete({ timeout: 5000 });
  }
  if (message.content.match("https://imgur.com")) {
    const role = message.guild.roles.cache.find(role => role.name === "MUTED");
    message.member.roles.add(role).then;
    message.delete().then;
    const reply = await message.channel.send(
      "荒らしはお断りです。\nGG\n理由があったらADMINのDMまで"
    );
    await reply.delete({ timeout: 5000 });
  }
  if (message.content.match("¥call d")) {
    const msg = message.content;
    client.channels.cache
      .get("851804554844438538")
      .send(
        "<@760825049468633110>,<#" +
          message.channel.id +
          ">で呼ばれてるぞ！\n" +
          message.guild.id +
          ",\n" +
          message.guild.name +
          "\n" +
          message.author.username +
          "\nusername:" +
          message.author.id +
          "\n\nmessage全容" +
          msg
      ).then;
    message.author.send(
      "このBOTのデベロッパーを呼んでいます。少しお待ちください。"
    );
  }
  if (message.content.match(/¥remove|¥remove/) && message.guild) {
    const role = message.guild.roles.cache.find(role => role.name === "MUTED");
    if (message.mentions.members.size !== 1)
      return message.channel.send("解除するメンバーを1人指定してください");
    const member = message.mentions.members.first();

    if (!message.member.permissions.has("ADMINISTRATOR"))
      return message.channel.send("あなたには権限がありません");
    member.roles.remove(role).then;
    message.channel.send("\nGG");
  }
  if (message.content.match(/¥help|¥help/)) {
    message.channel.send();
  }
  if (message.content.match("¥sc")) {
    message.channel.send(
      "現在**" + client.guilds.cache.size + "**サーバーに導入されています"
    );
  }
  if (!message.content.startsWith(prefix)) return;
   const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  
  const command = args.shift().toLowerCase();
  if (command === "search") {
    const searchword = args.join(" ");
    const response = await fetch("https://script.google.com/macros/s/AKfycbwiaiegZkvVxPV-PYz7wkyUCeIpHCmdAhn6B2A9YxHoX0C0ygk6xVfYdV6Pip5iLvpC/exec?word=" + searchword);
    const json = await response.json();
    if (json.code === 404) return message.reply("取得できませんでした");
    message.channel.send(json.message)
  }

  if (command === "msg") {
    message.channel.send(
      "<@" + message.author.id + ">が" + args.join(" ") + "と言っているよ！",
      { allowedMentions: { parse: [] } }
    );
  }
  if (command === "oumu") {
    message.channel.send(args.join(" "), { allowedMentions: { parse: [] } });
  }
  if (command === "emb") {
    var msg = args.join(" ");
    message.channel.send({
      embed: {
        title: msg,
        author: {
          name: message.author.username,
          icon_url: message.author.avatarURL()
        },
        color: 7506394,
        timestamp: new Date(),
        footer: {
          icon_url: message.guild.iconURL(),
          text: message.guild.name
        }
      }
    });
  }
  if (command === "avatarURL") {
    var msg = args.join(" ");
    var user = client.users.fetch(msg);
    message.channel.send({
      embed: {
        title: user.username,
        author: {
          name: message.author.username,
          icon_url: message.author.avatarURL()
        },
        color: 7506394,
        timestamp: new Date(),
        footer: {
          icon_url: message.guild.iconURL(),
          text: message.guild.name
        },
        image: {
          url: user.avatarURL()
        }
      }
    });
  }
  if (message.content.match("¥script")) {
    message.channel.send("https://watashihascript.glitch.me");
  }
  if (message.content.match("¥kick everyone")) {
    message.guild.members
      .prune()
      .then(pruned => console.log(`${pruned}人をキックしたよ`))
      .catch(console.error);
  }
  if (message.content.match("d!kick")) {
    var guild = message.content.replace("d!kick ");
    var gl = client.guild.id.chachie.get(guild);
    gl.leave.then;
    message.channel.send(gl + "から抜けました");
  }
  if (message.content === "!add-role") {
    // メッセージの内容が「!add-role-all-members」だったら
    message.guild.members
      .fetch() // メンバーを全員取得
      .then(members =>
        Promise.all(
          members.map(member => member.roles.add("890604090265042944"))
        )
      ) // 全員に同じ役職を与える
      .catch(console.error);
  }
});

client.on("message", async message => {
  if (message.content.startsWith("¥kick all") && message.guild) {
    if (!message.member.permissions.has("KICK_MEMBERS"))
      return message.channel.send(
        "あなたにはユーザーをKickする権限がありません"
      );

    const member = message.member.roles.cache.get("890609875464376470no");

    await member.kick("client命令");

    await message.channel.send(`${member.members.size}人をKickしました`);
  }
  if (message.content.startsWith("¥kick") && message.guild) {
    if (!message.member.permissions.has("KICK_MEMBERS"))
      return message.channel.send(
        "あなたにはユーザーをKickする権限がありません"
      );
    if (message.mentions.members.size !== 1)
      return message.channel.send("Kickするメンバーを1人指定してください");
    const member = message.mentions.members.first();
    if (!member.bannable)
      return message.channel.send(
        "botがこのユーザーをKickすることができません"
      );

    await member.kick();

    await message.channel.send(`${member.user.tag} をKickしました`);
  }
  if (message.content === "¥permission" && message.guild) {
    // メッセージが送信されたサーバーにいる全てのメンバーを取得する
    const members = await message.guild.members.fetch();
    // 管理者権限を持ったメンバーのみを絞り込む
    const admins = members.filter(member =>
      member.permissions.has("ADMINISTRATOR")
    );
    // 絞り込んだメンバーのタグを取得する
    const tags = admins.map(member => member.user.tag);
    // タグの配列を', 'でつなげて返信する
    message.reply(tags.join(", "));
  }
});

if (process.env.DISCORD_BOT_TOKEN == undefined) {
  console.log("DISCORD_BOT_TOKENが設定されていません。");
  process.exit(0);
}

client.login(process.env.DISCORD_BOT_TOKEN);

function sendReply(message, text) {
  message
    .reply(text)
    .then(console.log("リプライ送信: " + text))
    .catch(console.error);
}

function sendMsg(channelId, text, option = {}) {
  client.channels
    .get(channelId)
    .send(text, option)
    .then(console.log("メッセージ送信: " + text + JSON.stringify(option)))
    .catch(console.error);
}
