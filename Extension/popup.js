// Initialize button with user's preferred color
// let changeColor = document.getElementById("changeColor");
let website = document.getElementById("website");
let likeButton = document.getElementById("like");
let neutralButton = document.getElementById("meh");
let dislikeButton = document.getElementById("dislike");

chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
  let url = tabs[0].url;
  website.innerHTML += url;
  // use `url` here inside the callback because it's asynchronous!
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