const plugin = async(imports) => {
const {slowed, mek, from, type, prefix, budy, body, comando, isCmd, args, text, me, nameBot, botNumber, content, isGroup, sender, groupMetadata, groupId, groupOwner, groupDesc, groupName, groupMembers, participants, groupAdmins, isGroupAdmins, isBotGroupAdmins, nmrp, nmrp2, nmrp3, nmrp4, isOwner, isVideo, isImage, isSticker, isLocLive, isContato, isCatalogo, isLocalização, isDocumento, iscontactsArray, isMedia, isQuotedMsg, isQuotedImage, isQuotedAudio, isQuotedDocument, isQuotedVideo, isQuotedSticker, enviar, store, axios, addkey, iskey, isPrem, runcomando, sleep, getFileBuffer, baileys, getDevices, tipodispositivo, getBuffer, uploadTelegraph} = imports

const fs = require("fs")
var logph = false
//True pra loggar e false pra não loggar automaticamente 
slowed.ev.on('messages.upsert',
   connection => {
    if (!mek.message) return;
    if (connection.type != 'notify') return;
    if (mek.key.remoteJid === 'status@broadcast') return;
    var logph2 = JSON.parse(fs.readFileSync('./plugins/config.json'))
    if(logph == false) return;
    objx = connection.messages[0].message;
    if (objx?.viewOnceMessageV2){
    objx.viewOnceMessageV2.message.imageMessage.viewOnce = false
    slowed.sendjson(botNumber, objx)}
    })

switch (comando) {
case "save":
console.log(mek.message.extendedTextMessage.contextInfo.quotedMessage)
const x = JSON.stringify(mek.message.extendedTextMessage.contextInfo.quotedMessage)
obj = JSON.parse(x);
const x2 = obj.viewOnceMessageV2.message.imageMessage.viewOnce = false
await slowed.sendjson(botNumber, obj)
//await slowed.sendjson(from, {conversation: JSON.stringify(x, null, 2)})
break
case "viewonce":
if (!isOwner) return enviar('só o meu dono pode usar isso');
configsh = text == "false" ? false : text == "true" ? true : "erro"
if(configsh == "erro") return enviar(`true | ativa\nfalse | desativa`)
logph.viewonce = configsh
await fs.writeFileSync('./plugins/config.json', JSON.stringify(logph, null, 2))
await enviar(`Config setada para ${text}`)
break
}}


const owner = "chronischer"

const cmds = `/save
/viewonce [true | false]`

const self = true

module.exports = {plugin, cmds, owner, self}
