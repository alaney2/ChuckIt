webpackHotUpdate("app",{

/***/ "../cra-template/template/src/App.js":
/*!*******************************************!*\
  !*** ../cra-template/template/src/App.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.css */ "../cra-template/template/src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_like_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/like.jpeg */ "../cra-template/template/src/images/like.jpeg");
/* harmony import */ var _images_meh_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/meh.png */ "../cra-template/template/src/images/meh.png");
/* harmony import */ var _images_dislike_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/dislike.png */ "../cra-template/template/src/images/dislike.png");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/alaney/Desktop/Projects/chuckit/create-react-extension/packages/cra-template/template/src/App.js";







let mysql = __webpack_require__(/*! mysql2 */ "../../../node_modules/mysql2/index.js");

let config = __webpack_require__(/*! ./config.js */ "../cra-template/template/src/config.js");

let connection = mysql.createConnection(config);
connection.connect(function (err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

function App() {
  const [website] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''); // setWebsite(window.location.hostname);
  // useEffect(() => {
  //   setWebsite(window.location.hostname);
  // })

  function handleLike(e) {
    e.preventDefault();
    let insertwebsite = `INSERT INTO websites(url) VALUES('www.youtube.com');`;
    connection.query(insertwebsite);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    className: "App",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
        id: "website",
        children: ["Site: ", website]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "buttons",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
        type: "image",
        src: _images_like_jpeg__WEBPACK_IMPORTED_MODULE_1__["default"],
        id: "like",
        alt: "like",
        onClick: handleLike
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
        type: "image",
        src: _images_meh_png__WEBPACK_IMPORTED_MODULE_2__["default"],
        id: "meh",
        alt: "neutral"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
        type: "image",
        src: _images_dislike_png__WEBPACK_IMPORTED_MODULE_3__["default"],
        id: "dislike",
        alt: "dislike"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=app.182c138435ef1b9b0954.hot-update.js.map