/*global chrome*/
// If your extension doesn't need a background script, just leave this file empty

// chrome.tabs.onActivated.addListener((activeInfo) => {
//   chrome.tabs.get(activeInfo.tabId, (tab) => {
//     let domain = "";
//     let encounteredPeriod = false;
//     console.log(tab.url);
//     for (let char of tab.url) {
//       if (char === '.') encounteredPeriod = true;
//       if (char === '/' && encounteredPeriod) break;
//       domain += char;
//     }
//     if (domain === 'https://www.youtube.com') domain = tab.url;
//     chrome.storage.local.set({domain: domain, url: tab.url }, () => {
//       console.log('Domain set to: ', domain);
//     });
//   });
// });

// chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
//   let url = tabs[0].url;
//   let domain = "";
//   let encounteredPeriod = false;
//   for (let char of url) {
//     if (char === '.') encounteredPeriod = true;
//     if (char === '/' && encounteredPeriod) break;
//     domain += char;
//   }
//   if (domain === 'https://www.youtube.com') domain = url;
//   // console.log(currentDomain, domain, website);
//   chrome.storage.local.set({domain: domain, url: url }, () => {
//     console.log('Domain set to: ', domain);
//   });
//   // if (currentDomain !== domain) setDomain(currentDomain);
// });
