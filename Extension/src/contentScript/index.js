// eslint-disable-next-line no-unused-vars
/*global chrome*/

// If the extension doesn't need a content script, just leave this file empty

// This is an example of a script that will run on every page. This can alter pages
// Don't forget to change `matches` in manifest.json if you want to only change specific webpages
// printAllPageLinks();

// // This needs to be an export due to typescript implementation limitation of needing '--isolatedModules' tsconfig
// export function printAllPageLinks() {
//   const allLinks = Array.from(document.querySelectorAll('a')).map(
//     link => link.href
//   );

//   console.log('-'.repeat(30));
//   console.log(
//     `These are all ${allLinks.length} links on the current page that have been printed by the Sample Create React Extension`
//   );
//   console.log(allLinks);
//   console.log('-'.repeat(30));
// }

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
