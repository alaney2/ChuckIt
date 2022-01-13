// Initialize button with user's preferred color
// let changeColor = document.getElementById("changeColor");
let website = document.getElementById("website");
let likeButton = document.getElementById("like");
let neutralButton = document.getElementById("meh");
let dislikeButton = document.getElementById("dislike");

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