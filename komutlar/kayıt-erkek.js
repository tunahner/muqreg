const Discord = require('discord.js')
const datab = require('quick.db')
const ms = require('ms')
const moment = require("moment");
const { parseZone } = require("moment");

exports.run =  async (client, message, args) => {
  
if(!['779144852125777921'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) 
return message.reply(`Bu Komut İçin Yetkiniz Bulunmamaktadır.`) 
  
const erkek = message.guild.roles.cache.find(r => r.id === '779335479917019167')
const erkek2 = message.guild.roles.cache.find(r => r.id === '780244172136513537')
const erkek3 = message.guild.roles.cache.find(r => r.id === '780244295243661313')
const kayıtsız = message.guild.roles.cache.find(r => r.id === '779362019458809886')
const savelogs = message.guild.channels.cache.find(c => c.id === '779357273364496417')
if(!erkek) return message.channel.send('1.ci Erkek rolü ayarlanmamış.')
if(!erkek2) return message.channel.send('2.ci Erkek rolü ayarlanmamış.')
if(!kayıtsız) return message.channel.send('Kayıtsız rolü ayarlanmamış')
if(!savelogs) return message.channel.send('Save log ayarlanmamış.')




const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));

if(!member) return message.channel.send(`Kayıt Etmek İçin Bir **Kullanıcı** Etiketlemen Lazım`)
if(member.id === message.author.id) return message.channel.send('Kendini kayıt edemezsin.')
if(member.id === client.user.id) return message.channel.send('Botu kayıt edemezsin.')
if(member.id === message.guild.OwnerID) return message.channel.send('Sunucu sahibini kayıt edemezsin.')
if(member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(`Bu kullanıcı sizden üst/aynı pozsiyondadır.`)
  
if(!args[0]) return message.channel.send('Bir kullanıcı belirt')  
let timereplace = args[0];
let time = timereplace.replace(/y/, ' yıl').replace(/d/, ' gün').replace(/s/, ' saniye').replace(/m/, ' dakika').replace(/h/, ' saat') 
 datab.add('case', 1)
 const sadxstg = await datab.fetch('case')
 var tarih = new Date(Date.now())
 var tarih2 = ms(timereplace)
 var tarih3 = Date.now() + tarih2 + 1296000000
 let ay = moment(Date.now()+1296000000).format("MM")
 let gün = moment(Date.now()+1296000000).format("DD")
 let saat = moment(Date.now()+1296000000).format("HH:mm:ss")
 let yıl = moment(Date.now()+1296000000).format("YYYY")
 let kayıtsaat = `\`${gün} ${ay.replace(/01/, 'Ocak').replace(/02/, 'Şubat').replace(/03/, 'Mart').replace(/04/, 'Nisan').replace(/05/, 'Mayıs').replace(/06/, 'Haziran').replace(/07/, 'Temmuz').replace(/08/, 'Ağustos').replace(/09/, 'Eylül').replace(/10/, 'Ekim').replace(/11/, 'Kasım').replace(/12/, 'Aralık')} ${saat} (${yıl})\``
 
let tag = '✵' 
let name = args[1]
let age = Number(args[2])
if(!name) return message.channel.send('Bir İsim Belirtmelisin Dostum!.')
if(!age) return message.channel.send('Yaşsız kabul edilmiyor!.')
  
datab.add(`yetkili.${message.author.id}.erkek`, 1)
datab.add(`yetkili.${message.author.id}.toplam`, 1)

let alldata = datab.fetch(`yetkili.${message.author.id}.toplam`)

const rol = "788870975122309151";
datab.set(`rol.${message.guild.id}`, rol);
let rol1 = datab.fetch(`rol.${message.guild.id}`)

member.setNickname(`${tag} ${name} | ${age}`)
member.roles.add(erkek)
member.roles.add(erkek2)
member.roles.remove(kayıtsız)

const embed = new Discord.MessageEmbed()

.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
.setDescription(`
• <a:ucgen:790913881962840125>  ${member}, ${message.author} Kişi Tarafından ${erkek}, ${erkek2}, ${erkek3}, Olarak Kayıt Edildi <a:ucgen:790913881962840125> 

• <a:greenbrave:790913930678763550>  İsmi \`${tag} ${name} | ${age}\` Olarak Güncellendi.

• <a:registerbook:790913867642699776>  <@!${message.author.id}> Kişisinin Toplam __**${alldata}**__ Adet Teyiti Oldu. <a:onayli:790913919543541770> `)
.setFooter("")
.setColor("0x2f3136")
.setThumbnail(
  ""
);
const kanal = message.guild.channels.cache.find(c => c.id === '790884267101126677')
kanal.send(`<@${member.user.id}>, **Aramıza Yeni Biri Katıldı Herkes Hoşgeldin Desin <a:onayli:790913919543541770> **`)
message.channel.send(embed)

datab.push(`isim.${message.guild.id}`, {
  userID: member.id, 
  isim: name,
  yas: age,
  tag: tag
})

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['erkek', 'e', 'boy', 'man'],
    permLevel: 0
  }

  exports.help = {
    name: 'erkek',
    description: "Etiketlenen kişiyi erkek rolleriyle kayıt eder.",
    usage: '.erkek @etiket/id İsim Yaş'
  }