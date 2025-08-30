const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'VAJIRA-MD=SgJwmL4Q#4q-9i2kY2qPzJpOOco2qC-zuWFVLQCfb_GEva-JwBYg' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94762048412' : process.env.OWNER_NUMBER,
N_JID: process.env.N_JID=== undefined ? '‌120363421350428668@newsletter': process.env.N_JID,    
PREFIX: process.env.PREFIX || '.' ,
LOGO: process.env.LOGO || 'https://i.ibb.co/39kWRqJs/320.jpg' ,    
FOOTER: process.env.FOOTER || '> BY SHAGEE',
LIMIT_PLUGIN: process.env.LIMIT_PLUGIN || '2000' ,    
PREMIUM_USERS: process.env.PREMIUM_USERS || '94703403671',    
LANG: process.env.LANG || 'en',    
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech' : process.env.POSTGRESQL_URL,   
MAX_SIZE: 500,
MODE: process.env.MODE === undefined ? 'button' : process.env.MODE,
ALIVE:  process.env.ALIVE  || '> *ＳＨAG EＥ 🌑⚡ | ⛚ Sʜᴀɢᴇᴇ   BᴏᴛＺｚ ᴢ  ᴛᴇᴄʜ*'  ,    
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
JID: process.env.JID || "120363421350428668@newsletter",
WACHLINK: process.env.WACHLINK || `https://whatsapp.com/channel/0029Vb6A4FQJkK7AOqqfBM17`
};
