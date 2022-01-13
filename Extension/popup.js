// Initialize button with user's preferred color
// let changeColor = document.getElementById("changeColor");
let website = document.getElementById("website");
let likeButton = document.getElementById("like");
let neutralButton = document.getElementById("meh");
let dislikeButton = document.getElementById("dislike");

let mysql = require('mysql2');
let config = require('../Database/config.js');
let connection = mysql.createConnection(config);
const insert_id;

connection.connect(function(err) {
  if(err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connected to the MySQL server.');
});

likeButton.addEventListener("click", async () => {
  //insert SQL statements
  let insertwebsite = ` INSERT INTO websites(url)
                        VALUES(?);       `;

  connection.query(insertwebsite, `${website}`, (err, results, fields)=>{
    if(err) return console.error(err.message);
    insert_id = results.insertid;
  });
});

chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
  let url = tabs[0].url;
  let domain = "";
  let encounteredPeriod = false;
  for (let char of url) {
    if (char === '.') encounteredPeriod = true;
    if (char === '/' && encounteredPeriod) break;
    domain += char;
  }
  if (domain === 'https://www.youtube.com') {
    website.innerHTML += url;
  } else {
    website.innerHTML += domain;
  }
});



connection.end();






// When the button is clicked, inject setPageBackgroundColor into current page
// changeColor.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: setPageBackgroundColor,
//   });
// });

// The body of this function will be executed as a content script inside the
// current page
// function setPageBackgroundColor() {
//   chrome.storage.sync.get("color", ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// }