const plugin = async(imports) => {
const {slowed, mek, from, type, prefix, budy, body, comando, isCmd, args, text, me, nameBot, botNumber, content, isGroup, sender, groupMetadata, groupId, groupOwner, groupDesc, groupName, groupMembers, participants, groupAdmins, isGroupAdmins, isBotGroupAdmins, nmrp, nmrp2, nmrp3, nmrp4, isOwner, isVideo, isImage, isSticker, isLocLive, isContato, isCatalogo, isLocalização, isDocumento, iscontactsArray, isMedia, isQuotedMsg, isQuotedImage, isQuotedAudio, isQuotedDocument, isQuotedVideo, isQuotedSticker, enviar, store, axios, addkey, iskey, isPrem, runcomando, sleep, getFileBuffer, baileys, getDevices, tipodispositivo, getBuffer, uploadTelegraph} = imports

const fs=require('fs');fs.readFile('./plugins/config.json','utf8',(err,data)=>{if(err){console.error('[PL: ViewOnce]: Erro de leitura de configuração',err);return}let config;try{config=JSON.parse(data)}catch(error){console.error('[PL: ViewOnce]: Erro no parsing do JSON:',error);return}if(!config.hasOwnProperty('viewonce')){config.viewonce=false;fs.writeFile('./plugins/config.json',JSON.stringify(config,null,2),'utf8',(err)=>{if(err){console.error('[PL: ViewOnce]: ',err);return}console.log('[PL: ViewOnce]: Configurado com Sucesso!')})}else{return)}});
   
//True pra loggar e false pra não loggar automaticamente 
const logph = JSON.parse(fs.readFileSync('./plugins/config.json'))

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
config = text == "false" ? false : text == "true" ? true : "erro"
if(config == "erro") return enviar(`true | ativa\nfalse | desativa`)
logph.viewonce = config
await fs.writeFileSync('./plugins/config.json', JSON.stringify(logph, null, 2))
}}


const owner = "chronischer"

const cmds = `/save
/viewonce [true | false]`

const self = true

module.exports = {plugin, cmds, owner, self}
