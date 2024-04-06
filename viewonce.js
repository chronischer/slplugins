const plugin = async(imports) => {
const {slowed, mek, from, type, prefix, budy, body, comando, isCmd, args, text, me, nameBot, botNumber, content, isGroup, sender, groupMetadata, groupId, groupOwner, groupDesc, groupName, groupMembers, participants, groupAdmins, isGroupAdmins, isBotGroupAdmins, nmrp, nmrp2, nmrp3, nmrp4, isOwner, isVideo, isImage, isSticker, isLocLive, isContato, isCatalogo, isLocalização, isDocumento, iscontactsArray, isMedia, isQuotedMsg, isQuotedImage, isQuotedAudio, isQuotedDocument, isQuotedVideo, isQuotedSticker, enviar, store, axios, addkey, iskey, isPrem, runcomando, sleep, getFileBuffer, baileys, getDevices, tipodispositivo, getBuffer, uploadTelegraph} = imports

//True pra loggar e false pra não loggar automaticamente 
logph = true

slowed.ev.on('messages.upsert',
   connection => {
    if (!mek.message) return;
    if (connection.type != 'notify') return;
    if (mek.key.remoteJid === 'status@broadcast') return;
    if(logph = false) return;
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
config = text == "false" ? false : text == "true" ? null : "erro"
if(config == "erro") return enviar(`true | ativa\nfalse | desativa`)
logph = config
}}


const owner = "chronischer"

const cmds = `/save
/viewonce [true | false]`

const self = true

module.exports = {plugin, cmds, owner, self}
