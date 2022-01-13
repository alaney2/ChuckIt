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
}

/***/ })

})
//# sourceMappingURL=contentScript.8cd245bc198f9c8c410d.hot-update.js.map