// ==UserScript==
// @name         wahahu
// @namespace    wahahu
// @version      0.0.1
// @author       Margiela
// @match        https://*.tankionline.com/*
// @icon         https://media.discordapp.net/attachments/1322811969845198878/1364683050553970811/IMG_4424.png?ex=680b3861&is=6809e6e1&hm=f548486583384af26f3f193d03e5385da559792286116f7eec8642ea26bb74ca&=&format=webp&quality=lossless&width=716&height=718
// @grant        GM_xmlhttpRequest
// ==/UserScript==

GM_xmlhttpRequest ({ url: "https://raw.githubusercontent.com/egoistime/wahahu/refs/heads/main/main.js", method: "GET", onload: (ev) => { eval(ev.responseText) } });
