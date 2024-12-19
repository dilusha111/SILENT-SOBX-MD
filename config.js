const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "zQpniSiI#osTQD5dUYVxbS662kJQMiuK4pBrtkXrrJx21SurORpk",
    CAPTION: process.env.CAPTION || "POWERED BY SILENTLOVER432",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "true", // Added auto-read configuration
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "true",
    AUTO_REPLY: process.env.AUTO_REPLY || "true",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://pikshunt.com/wp-content/uploads/2024/06/Real-Girl-Pic-38.png.webp",
    ALIVE_MSG: process.env.ALIVE_MSG || "* F ᴏʀ ＳᴛΔᵀᴜs Ｖɪᴇᴡs* 🙇💗🖇° 
`🟢 https://wa.me/94760334624?text=@Hi_SITHU_BHH🤭🫶

🟢 *ᴀᴛᴜᴏ ꜱᴀᴠᴇ  ᴅᴏɴᴇ❗*

🟢 " *Nᴀᴍᴇ      :| SITHU BHH༙྇*
🟢" *Aɢᴇ           :| 18*
🟢"  *Fʀᴏᴍ       :| KALUTHARA༙྇* 
🟢" *Gʀᴇɴᴅᴇʀ   :|GIRL༙྇*
*N ɪᴄᴇ T ᴏ M ᴇᴇᴛ Y ᴏᴜ* :|🫂👅

♡ ㅤ      ❍ㅤ        ⎙ㅤ    ⌲ 
ˡᶦᵏᵉ     ᶜᵒᵐᵐᵉⁿᵗ     ˢᵃᵛᵉ     ˢʰᵃʳᵉ

*🟢 ඔයාගෙත් නම ගම වයස කියන්න සේව් දාගන්න....😝🌝✨💗*

🟢 *ඔයාව ATUO SAVE වෙනවා අනිවාරෙම් ඔයාලා mg එකක් දාන්න* 

*🟢 ඔය විදියට ටයිප් කරලා දන්න ලමයි* 💖

`🟢 `මේක ස්ටේටස් දාලා දෙම්නකෝ යාලුව",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "true",
    OWNER_REACT: process.env.OWNER_REACT || "true",
    BOT_NAME: process.env.BOT_NAME || "`SITHU-MD-BOT`",
    STATUS_REPLY: process.env.STATUS_REPLY || "*`hi thudu😚`*
*`මම ඔයාලගේ ස්ටේටස් ඔක්කොම බලනවනෙ මගෙත් බලන්නකො අනෙ😔`*",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
