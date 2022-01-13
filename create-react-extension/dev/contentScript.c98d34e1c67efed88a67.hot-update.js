webpackHotUpdate("contentScript",{

/***/ "../cra-template/template/src/contentScript/index.js":
/*!***********************************************************!*\
  !*** ../cra-template/template/src/contentScript/index.js ***!
  \***********************************************************/
/*! exports provided: printAllPageLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printAllPageLinks", function() { return printAllPageLinks; });
// If your extension doesn't need a content script, just leave this file empty
// This is an example of a script that will run on every page. This can alter pages
// Don't forget to change `matches` in manifest.json if you want to only change specific webpages
printAllPageLinks(); // This needs to be an export due to typescript implementation limitation of needing '--isolatedModules' tsconfig

function printAllPageLinks() {
  const allLinks = Array.from(document.querySelectorAll('a')).map(link => link.href);
  console.log('-'.repeat(30));
  console.log(`These are all ${allLinks.length} links on the current page that have been printed by the Sample Create React Extension`);
  console.log(allLinks);
  console.log('-'.repeat(30));
} // const [, setWebsite] = useState();
//   chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
//     let url = tabs[0].url;
//     let domain = "";
//     let encounteredPeriod = false;
//     for (let char of url) {
//       if (char === '.') encounteredPeriod = true;
//       if (char === '/' && encounteredPeriod) break;
//       domain += char;
//     }
//     if (domain === 'https://www.youtube.com') {
//       setWebsite(url);
//     } else {
//       setWebsite(domain);
//     }
//   });

/***/ })

})
//# sourceMappingURL=contentScript.c98d34e1c67efed88a67.hot-update.js.map