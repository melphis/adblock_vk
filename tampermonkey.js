// ==UserScript==
// @name         VK.com/feed ads remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  shows how to use babel compiler
// @author       You
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
// @match        https://vk.com/feed
// ==/UserScript==

$(document).ready(() => {
  setInterval(() => {
    $('a')
      .filter((index, link) => link.innerHTML && link.innerHTML.match(/Рекламная запись/))
      .each((index, link) => link.closest('.feed_row').remove());
  }, 1000);
});
