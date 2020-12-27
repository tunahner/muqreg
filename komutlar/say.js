const Discord = require("discord.js");

  let guild = "773563386603896862";

  const voiceChannels = message.guild.channels.cache.filter(
    c => c.type === "voice"
  );

  let count = 0;

  for (const [id, voiceChannel] of voiceChannels)
    count += voiceChannel.members.size;

  var msg = message;

  var üyesayısı = msg.guild.members.cache.size.toString().replace(/ /g, "    ");

  var üs = üyesayısı.match(/([0-9])/g);

  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase();

  if (üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
        "0": `<a:713728601551274046:792846500643864606>`,

        "1": `<a:713728623525232650:792846459442692127>`,

        "2": `<a:713728633985957948:792846467890020403>`,

        "3": `<a:713728642835939351:792846470051135528>`,

        "4": `<a:713728656312238080:792846470201344006>`,

        "5": `<a:713728670262624276:792846469987958784>`,

        "6": `<a:713728690189631488:792846471170097193>`,

        "7": `<a:713728702516691046:792846470583812106>`,

        "8": `<a:713728716194185246:792846473174843432>`,

        "9": `<a:713728728357797949:792846472704950312>`
      }[d];
    });
  } /////////////////////////////

  var sessayı = count.toString().replace(/ /g, "    ");

  var üs2 = sessayı.match(/([0-9])/g);

  sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase();

  if (üs2) {
    sessayı = sessayı.replace(/([0-9])/g, d => {
      return {
       "0": `<a:713728601551274046:792846500643864606>`,

        "1": `<a:713728623525232650:792846459442692127>`,

        "2": `<a:713728633985957948:792846467890020403>`,

        "3": `<a:713728642835939351:792846470051135528>`,

        "4": `<a:713728656312238080:792846470201344006>`,

        "5": `<a:713728670262624276:792846469987958784>`,

        "6": `<a:713728690189631488:792846471170097193>`,

        "7": `<a:713728702516691046:792846470583812106>`,

        "8": `<a:713728716194185246:792846473174843432>`,

        "9": `<a:713728728357797949:792846472704950312>`
      }[d];
    });
  }

  /////////////////////////////////////////

  var tagdakiler = 0;

  let tag = "✵";

  message.guild.members.cache.forEach(member => {
    if (member.user.username.includes(tag)) {
      tagdakiler = tagdakiler + 1;
    }
  });

  var tagdakilerr = tagdakiler.toString().replace(/ /g, "    ");

  var üs3 = tagdakilerr.match(/([0-9])/g);

  tagdakilerr = tagdakilerr.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase();

  if (üs3) {
    tagdakilerr = tagdakilerr.replace(/([0-9])/g, d => {
      return {
         "0": `<a:713728601551274046:792846500643864606>`,

        "1": `<a:713728623525232650:792846459442692127>`,

        "2": `<a:713728633985957948:792846467890020403>`,

        "3": `<a:713728642835939351:792846470051135528>`,

        "4": `<a:713728656312238080:792846470201344006>`,

        "5": `<a:713728670262624276:792846469987958784>`,

        "6": `<a:713728690189631488:792846471170097193>`,

        "7": `<a:713728702516691046:792846470583812106>`,

        "8": `<a:713728716194185246:792846473174843432>`,

        "9": `<a:713728728357797949:792846472704950312>`
    });
  }

  //////////////////////////////////////////

  var onlayn = message.guild.members.cache
    .filter(m => m.presence.status !== "offline")
    .size.toString()
    .replace(/ /g, "    ");

  var üs4 = onlayn.match(/([0-9])/g);

  onlayn = onlayn.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase();

  if (üs4) {
    onlayn = onlayn.replace(/([0-9])/g, d => {
      return {
         "0": `<a:713728601551274046:792846500643864606>`,

        "1": `<a:713728623525232650:792846459442692127>`,

        "2": `<a:713728633985957948:792846467890020403>`,

        "3": `<a:713728642835939351:792846470051135528>`,

        "4": `<a:713728656312238080:792846470201344006>`,

        "5": `<a:713728670262624276:792846469987958784>`,

        "6": `<a:713728690189631488:792846471170097193>`,

        "7": `<a:713728702516691046:792846470583812106>`,

        "8": `<a:713728716194185246:792846473174843432>`,

        "9": `<a:713728728357797949:792846472704950312>`
      }[d];
    });
  }

  let emoji1 = `<a:bluestar:788408572743516190>`;

  const embed1 = new Discord.MessageEmbed()
    .setThumbnail("")
    .setAuthor(`${client.user.username}`, client.user.avatarURL)
    .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))

    .setColor("000000")

    .setDescription(
      `<a:redstar:790913918679646219>   **Sunucumuzda  ${üyesayısı} Üye bulunmakta.** \n\n <a:redstar:790913918679646219>  **Sunucumuzda  ${onlayn} Çevrimiçi üye bulunmakta** \n\n <a:redstar:790913918679646219>  **Seslide  ${sessayı} Üye bulunmakta.** \n\n <a:redstar:790913918679646219> **Tagımızda ${tagdakilerr} bulunmakta.** \n\n `
    )

    .setFooter(``);

  const hata = new Discord.MessageEmbed()

    .setColor("000000")

    .setAuthor(`Hata`)

    .setDescription(`**Bu komutu kullanmaya hakkınız yoktur!**`);

  msg.channel.send(embed1);

  /*client.setInterval(() => {

  let channel = client.channels.get("694870726280347668");

  channel.setTopic(`Toplam üye: _${üyesayısı.toString()}_ / Çevrimiçi üye: ${onlayn}`); //kanal açıklama oto

}, 10000);*/
};

exports.conf = {
  enabled: true,

  guildOnly: true,

  aliases: ["say"],

  permLevel: 0
};

exports.help = {
  name: "say"
};
