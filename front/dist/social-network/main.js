(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feed/feed.component */ "./src/app/feed/feed.component.ts");
/* harmony import */ var _wall_wall_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wall/wall.component */ "./src/app/wall/wall.component.ts");
/* harmony import */ var _friends_friends_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./friends/friends.component */ "./src/app/friends/friends.component.ts");







var routes = [
    {
        path: 'profile/:id', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"], children: [
            { path: 'friends', component: _friends_friends_component__WEBPACK_IMPORTED_MODULE_6__["FriendsComponent"] },
            { path: 'wall', component: _wall_wall_component__WEBPACK_IMPORTED_MODULE_5__["WallComponent"] },
            { path: '', redirectTo: 'feed', pathMatch: 'full' },
        ]
    },
    { path: 'feed', component: _feed_feed_component__WEBPACK_IMPORTED_MODULE_4__["FeedComponent"] },
    { path: '', redirectTo: 'profile/me/wall', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#header {\r\n  height: 50px;\r\n  background-color: var(--accent);\r\n  position: fixed;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1000;\r\n  display: grid;\r\n  grid-template-columns: 1fr 5fr;\r\n}\r\n\r\n#header > * {\r\n  display: inline-block;\r\n}\r\n\r\n#header > h1 {\r\n  margin: 0;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n#header > div {\r\n  width: 50%;\r\n}\r\n\r\n#header > div > input {\r\n  margin: 10px;\r\n  padding: 5px 10px;\r\n  border-radius: 50px;\r\n  border: 1px solid transparent;\r\n  outline: none;\r\n  width: 100%;\r\n}\r\n\r\n#content {\r\n  height: calc(100% - 50px);\r\n  background-color: white;\r\n  padding-top: 50px;\r\n  display: grid;\r\n  grid-template-columns: 1fr 5fr;\r\n}\r\n\r\n#content.no-user {\r\n  display: block;\r\n  position: relative;\r\n}\r\n\r\n#content.no-user > #login-bg {\r\n  background: url('/front/assets/social-net.jpg') no-repeat center;\r\n  filter: blur(8px);\r\n  -webkit-filter: blur(8px);\r\n  height: 100%;\r\n  width: 100%;\r\n  background-size: cover;\r\n}\r\n\r\n#content.no-user > .login-box {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: var(--accent);\r\n  padding: 10px 20px 20px;\r\n  box-shadow: 0 1px 10px -2px;\r\n  display: grid;\r\n}\r\n\r\n#modal-content > .login-box > button,\r\n#content.no-user > .login-box > button {\r\n  background-color: white;\r\n  color: var(--accent);\r\n  border: 1px solid white;\r\n  padding: 5px 10px;\r\n  display: block;\r\n}\r\n\r\n#modal-content > .login-box > button:hover,\r\n#content.no-user > .login-box > button:hover {\r\n  background-color: var(--accent);\r\n  color: white;\r\n}\r\n\r\n#modal-content > .login-box > h4,\r\n#content.no-user > .login-box > h4 {\r\n  margin: 10px;\r\n  color: white;\r\n}\r\n\r\n.login-box.big {\r\n  width: 40%;\r\n}\r\n\r\n#modal-content > .login-box > .log-header,\r\n#content.no-user > .login-box > .log-header {\r\n  text-align: center;\r\n  padding-bottom: 15px;\r\n  color: white;\r\n}\r\n\r\n#modal-content > .login-box > .log-header > button.back-btn,\r\n#content.no-user > .login-box > .log-header > button.back-btn {\r\n  background-color: transparent;\r\n  border: 1px solid transparent;\r\n  color: white;\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 10px;\r\n}\r\n\r\n#modal-content > .login-box > textarea,\r\n#content.no-user > .login-box.big > textarea {\r\n  height: 80px;\r\n  padding: 5px;\r\n  resize: none;\r\n}\r\n\r\n#modal-content > .login-box > input,\r\n#content.no-user > .login-box > input {\r\n  border: 0;\r\n  padding: 5px;\r\n  outline: none;\r\n  text-align: center;\r\n}\r\n\r\n#modal-content > .login-box > button.action-btn,\r\n#content.no-user > .login-box > button.action-btn {\r\n  margin-top: 10px;\r\n}\r\n\r\n#content > div:first-child {\r\n  background-color: var(--gray);\r\n  text-align: center;\r\n  position: relative;\r\n}\r\n\r\n#content > div:first-child > div {\r\n  position: fixed;\r\n  width: 16.66%;\r\n  height: calc(100% - 50px);\r\n}\r\n\r\n#content > div:first-child > div > #profile > div {\r\n  width: 80%;\r\n  padding-top: 80%;\r\n  background-color: white;\r\n  margin: 20px auto;\r\n  border-radius: 50%;\r\n}\r\n\r\n#content > div:first-child > div > #options > button {\r\n  display: block;\r\n  width: 100%;\r\n  padding: 10px;\r\n  border: 1px solid transparent;\r\n  cursor: pointer;\r\n  background-color: transparent;\r\n  color: var(--accent);\r\n}\r\n\r\n#content > div:first-child > div > #options > button:hover {\r\n  background-color: var(--accent);\r\n  color: white;\r\n}\r\n\r\n.found {\r\n  border: 1px solid lightgray;\r\n  cursor: pointer;\r\n  padding: 5px;\r\n}\r\n\r\n.found > div > span {\r\n  padding: 10px 0;\r\n}\r\n\r\n.found:hover {\r\n  background-color: lightgray;\r\n}\r\n\r\n#content > div:first-child > div > #acc-opts {\r\n  position: absolute;\r\n  bottom: 0;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  width: 100%;\r\n}\r\n\r\n#modal-container > #modal-content > .login-box {\r\n  display: grid;\r\n}\r\n\r\n#modal-container > #modal-header.edit {\r\n  padding: 0;\r\n}\r\n\r\n#modal-container > #modal-content.editContent > .login-box > input {\r\n  border: 1px solid lightgray;\r\n  margin: 5px 0;\r\n}\r\n\r\n#modal-container > #modal-content.editContent > .login-box > button {\r\n  border: 1px solid var(--accent);\r\n  color: white;\r\n  background-color: var(--accent);\r\n}\r\n\r\n#modal-container > #modal-content.editContent > .login-box > button:hover {\r\n  background-color: white;\r\n  color: var(--accent);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osK0JBQStCO0VBQy9CLGVBQWU7RUFDZixXQUFXO0VBQ1gsTUFBTTtFQUNOLE9BQU87RUFDUCxhQUFhO0VBQ2IsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdFQUEwRDtFQUMxRCxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLCtCQUErQjtFQUMvQix1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSx1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSwrQkFBK0I7RUFDL0IsWUFBWTtBQUNkOztBQUVBOztFQUVFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsNkJBQTZCO0VBQzdCLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBQ0E7O0VBRUUsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0Isb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7RUFDWiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZGVyIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcclxufVxyXG5cclxuI2hlYWRlciA+ICoge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuI2hlYWRlciA+IGgxIHtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2hlYWRlciA+IGRpdiB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuI2hlYWRlciA+IGRpdiA+IGlucHV0IHtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jY29udGVudCB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1MHB4KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcclxufVxyXG5cclxuI2NvbnRlbnQubm8tdXNlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jY29udGVudC5uby11c2VyID4gI2xvZ2luLWJnIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvc29jaWFsLW5ldC5qcGcnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gIGZpbHRlcjogYmx1cig4cHgpO1xyXG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbiNjb250ZW50Lm5vLXVzZXIgPiAubG9naW4tYm94IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4IDIwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMTBweCAtMnB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbn1cclxuXHJcbiNtb2RhbC1jb250ZW50ID4gLmxvZ2luLWJveCA+IGJ1dHRvbixcclxuI2NvbnRlbnQubm8tdXNlciA+IC5sb2dpbi1ib3ggPiBidXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4jbW9kYWwtY29udGVudCA+IC5sb2dpbi1ib3ggPiBidXR0b246aG92ZXIsXHJcbiNjb250ZW50Lm5vLXVzZXIgPiAubG9naW4tYm94ID4gYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI21vZGFsLWNvbnRlbnQgPiAubG9naW4tYm94ID4gaDQsXHJcbiNjb250ZW50Lm5vLXVzZXIgPiAubG9naW4tYm94ID4gaDQge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5sb2dpbi1ib3guYmlnIHtcclxuICB3aWR0aDogNDAlO1xyXG59XHJcblxyXG4jbW9kYWwtY29udGVudCA+IC5sb2dpbi1ib3ggPiAubG9nLWhlYWRlcixcclxuI2NvbnRlbnQubm8tdXNlciA+IC5sb2dpbi1ib3ggPiAubG9nLWhlYWRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI21vZGFsLWNvbnRlbnQgPiAubG9naW4tYm94ID4gLmxvZy1oZWFkZXIgPiBidXR0b24uYmFjay1idG4sXHJcbiNjb250ZW50Lm5vLXVzZXIgPiAubG9naW4tYm94ID4gLmxvZy1oZWFkZXIgPiBidXR0b24uYmFjay1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIGxlZnQ6IDEwcHg7XHJcbn1cclxuI21vZGFsLWNvbnRlbnQgPiAubG9naW4tYm94ID4gdGV4dGFyZWEsXHJcbiNjb250ZW50Lm5vLXVzZXIgPiAubG9naW4tYm94LmJpZyA+IHRleHRhcmVhIHtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHJlc2l6ZTogbm9uZTtcclxufVxyXG5cclxuI21vZGFsLWNvbnRlbnQgPiAubG9naW4tYm94ID4gaW5wdXQsXHJcbiNjb250ZW50Lm5vLXVzZXIgPiAubG9naW4tYm94ID4gaW5wdXQge1xyXG4gIGJvcmRlcjogMDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNtb2RhbC1jb250ZW50ID4gLmxvZ2luLWJveCA+IGJ1dHRvbi5hY3Rpb24tYnRuLFxyXG4jY29udGVudC5uby11c2VyID4gLmxvZ2luLWJveCA+IGJ1dHRvbi5hY3Rpb24tYnRuIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4jY29udGVudCA+IGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuI2NvbnRlbnQgPiBkaXY6Zmlyc3QtY2hpbGQgPiBkaXYge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTYuNjYlO1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNTBweCk7XHJcbn1cclxuXHJcbiNjb250ZW50ID4gZGl2OmZpcnN0LWNoaWxkID4gZGl2ID4gI3Byb2ZpbGUgPiBkaXYge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgcGFkZGluZy10b3A6IDgwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbiNjb250ZW50ID4gZGl2OmZpcnN0LWNoaWxkID4gZGl2ID4gI29wdGlvbnMgPiBidXR0b24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xyXG59XHJcblxyXG4jY29udGVudCA+IGRpdjpmaXJzdC1jaGlsZCA+IGRpdiA+ICNvcHRpb25zID4gYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZvdW5kIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG4uZm91bmQgPiBkaXYgPiBzcGFuIHtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbn1cclxuXHJcbi5mb3VuZDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG59XHJcblxyXG4jY29udGVudCA+IGRpdjpmaXJzdC1jaGlsZCA+IGRpdiA+ICNhY2Mtb3B0cyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI21vZGFsLWNvbnRhaW5lciA+ICNtb2RhbC1jb250ZW50ID4gLmxvZ2luLWJveCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxufVxyXG5cclxuI21vZGFsLWNvbnRhaW5lciA+ICNtb2RhbC1oZWFkZXIuZWRpdCB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuI21vZGFsLWNvbnRhaW5lciA+ICNtb2RhbC1jb250ZW50LmVkaXRDb250ZW50ID4gLmxvZ2luLWJveCA+IGlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgbWFyZ2luOiA1cHggMDtcclxufVxyXG5cclxuI21vZGFsLWNvbnRhaW5lciA+ICNtb2RhbC1jb250ZW50LmVkaXRDb250ZW50ID4gLmxvZ2luLWJveCA+IGJ1dHRvbiB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWNjZW50KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcclxufVxyXG5cclxuI21vZGFsLWNvbnRhaW5lciA+ICNtb2RhbC1jb250ZW50LmVkaXRDb250ZW50ID4gLmxvZ2luLWJveCA+IGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\">\n  <h1>RedSocial</h1>\n  <div>\n    <input placeholder=\"Search for friends!\" [(ngModel)]=\"friendSearch\" (keyup.enter)=\"search()\" />\n  </div>\n</div>\n<div id=\"content\" *ngIf=\"user\">\n  <div>\n    <div>\n      <div id=\"profile\">\n        <div id=\"img\"></div>\n        <h2>{{ user.name }} {{ user.lastname }}</h2>\n      </div>\n      <div id=\"options\">\n        <button routerLink=\"/profile/me\">Profile</button>\n        <!-- <button routerLink=\"/feed\">Feed</button> -->\n      </div>\n      <div id=\"acc-opts\">\n        <button class=\"accent-btn\" (click)=\"doEditProfile()\">Edit profile</button>\n        <button class=\"accent-btn\" (click)=\"logOut()\">Log out</button>\n      </div>\n    </div>\n  </div>\n  <div>\n    <router-outlet></router-outlet>\n  </div>\n</div>\n<div id=\"content\" class=\"no-user\" *ngIf=\"!user\">\n  <div id=\"login-bg\"></div>\n  <div class=\"login-box\" *ngIf=\"state === 0\">\n    <h4>Welcome to the best Social Network</h4>\n    <button (click)=\"changeState(1)\">Login</button>\n    <button (click)=\"changeState(2)\">Signup</button>\n  </div>\n  <div class=\"login-box\" *ngIf=\"state === 1\">\n    <div class=\"log-header\">\n      <button (click)=\"changeState(0)\" class=\"back-btn\"><i class=\"fas fa-chevron-left\"></i></button>\n      <span>Login</span>\n    </div>\n\n    <input [(ngModel)]=\"form.login.email\" type=\"email\" placeholder=\"email\" />\n    <input [(ngModel)]=\"form.login.password\" type=\"password\" placeholder=\"password\" />\n\n    <button class=\"action-btn\" (click)=\"login()\">Login</button>\n  </div>\n  <div class=\"login-box big\" *ngIf=\"state === 2\">\n    <div class=\"log-header\">\n      <button (click)=\"changeState(0)\" class=\"back-btn\"><i class=\"fas fa-chevron-left\"></i></button>\n      <span>Signup</span>\n    </div>\n\n    <input [(ngModel)]=\"form.signup.name\" type=\"text\" placeholder=\"name\" />\n    <input [(ngModel)]=\"form.signup.lastname\" type=\"text\" placeholder=\"lastname\" />\n    <input [(ngModel)]=\"form.signup.email\" type=\"email\" placeholder=\"email\" />\n    <input [(ngModel)]=\"form.signup.password\" type=\"password\" placeholder=\"password\" />\n    <input [(ngModel)]=\"form.signup.phone\" type=\"tel\" placeholder=\"phone\" />\n    <input [(ngModel)]=\"form.signup.birthday\" type=\"date\" placeholder=\"birthday\" />\n    <textarea [(ngModel)]=\"form.signup.aboutMe\" placeholder=\"aboutme\"></textarea>\n\n    <button class=\"action-btn\" (click)=\"signup()\">Signup</button>\n  </div>\n</div>\n\n<div id=\"modal-bg\" *ngIf=\"showModal\"></div>\n<div id=\"modal-container\" *ngIf=\"showModal\">\n  <div id=\"modal-header\">\n    <h3>People in Social network</h3>\n    <button (click)=\"closeModal()\">&times;</button>\n  </div>\n  <div id=\"modal-content\">\n    <div>\n      <div *ngFor=\"let p of listPeople\" class=\"found\">\n        <div routerLink=\"/profile/{{ p.id }}\" (click)=\"closeModal()\">\n          <span>{{ p.name }} {{ p.lastname }}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div id=\"modal-bg\" *ngIf=\"isEditProfile\"></div>\n<div id=\"modal-container\" *ngIf=\"isEditProfile\">\n  <div id=\"modal-header\" class=\"edit\">\n    <h3>Edit Profile</h3>\n    <button (click)=\"closeModal()\">&times;</button>\n  </div>\n  <div id=\"modal-content\" class=\"editContent\">\n    <div class=\"login-box\">\n      <input [(ngModel)]=\"user.name\" type=\"text\" placeholder=\"name\" />\n      <input [(ngModel)]=\"user.lastname\" type=\"text\" placeholder=\"lastname\" />\n      <input [(ngModel)]=\"user.email\" type=\"email\" placeholder=\"email\" />\n      <input [(ngModel)]=\"user.password\" type=\"password\" placeholder=\"old password\" />\n      <input [(ngModel)]=\"newPassword\" type=\"password\" placeholder=\"new password\" />\n      <input [(ngModel)]=\"user.phone\" type=\"tel\" placeholder=\"phone\" />\n      <input [(ngModel)]=\"user.birthday\" type=\"date\" placeholder=\"birthday\" />\n      <textarea [(ngModel)]=\"user.aboutMe\" placeholder=\"aboutme\"></textarea>\n\n      <button class=\"action-btn\" (click)=\"editProfile()\">Edit</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session.service */ "./src/app/session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(session, router) {
        this.session = session;
        this.router = router;
        this.state = 0;
        this.showModal = false;
        this.listPeople = [];
        this.isEditProfile = false;
        this.form = {
            login: { email: '', password: '' },
            signup: { name: '', lastname: '', email: '', birthday: new Date(), aboutMe: '', password: '', phone: '' }
        };
        // this.form.login.email = 'dn@mail.com';
        // this.form.login.password = '1234';
        // this.session.getSession().subscribe(u => this.user = JSON.parse(JSON.stringify(u)));
    }
    AppComponent.prototype.ngOnInit = function () {
        if (!this.user) {
            this.router.navigateByUrl("/feed");
        }
        else {
            this.router.navigateByUrl("/profile/me");
        }
    };
    AppComponent.prototype.login = function () {
        var _this = this;
        this.session.login(this.form.login.email, this.form.login.password)
            .subscribe(function (rta) { return _this.user = JSON.parse(JSON.stringify(rta)); });
    };
    AppComponent.prototype.signup = function () {
        var _this = this;
        this.session.signup(this.form.signup)
            .subscribe(function (rta) {
            if (rta) {
                _this.user = JSON.parse(JSON.stringify(rta));
            }
        });
    };
    AppComponent.prototype.changeState = function (state) {
        this.state = state;
    };
    AppComponent.prototype.search = function () {
        var _this = this;
        this.session.getPeople().subscribe(function (people) {
            people.forEach(function (p) {
                if (p.name.toUpperCase().includes(_this.friendSearch.toUpperCase())
                    || p.lastname.toUpperCase().includes(_this.friendSearch.toUpperCase())
                    || (p.name + " " + p.lastname).toUpperCase().includes(_this.friendSearch.toUpperCase())) {
                    _this.listPeople.push(p);
                }
            });
            _this.showModal = true;
            _this.friendSearch = '';
        });
    };
    AppComponent.prototype.closeModal = function () {
        this.showModal = false;
        this.listPeople = [];
        this.isEditProfile = false;
    };
    AppComponent.prototype.logOut = function () {
        this.session.logout();
        this.user = undefined;
    };
    AppComponent.prototype.doEditProfile = function () {
        this.isEditProfile = true;
    };
    AppComponent.prototype.editProfile = function () {
        var _this = this;
        if (this.user.password && this.newPassword) {
            this.session.changePassword(this.user.password, this.newPassword)
                .subscribe(function (u) {
                if (JSON.stringify(_this.user) !== JSON.stringify(u)) {
                    _this.session.editProfile(_this.user)
                        .subscribe(function (u1) {
                        _this.user = JSON.parse(JSON.stringify((u1)));
                        _this.isEditProfile = false;
                        _this.router.navigateByUrl('/profile/me');
                    });
                }
            });
        }
        else {
            this.session.getSession()
                .subscribe(function (u) {
                if (JSON.stringify(_this.user) !== JSON.stringify(u)) {
                    _this.session.editProfile(_this.user)
                        .subscribe(function (u1) {
                        _this.user = JSON.parse(JSON.stringify((u1)));
                        _this.isEditProfile = false;
                        _this.router.navigateByUrl('/profile/me');
                    });
                }
            });
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./feed/feed.component */ "./src/app/feed/feed.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _wall_wall_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wall/wall.component */ "./src/app/wall/wall.component.ts");
/* harmony import */ var _friends_friends_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./friends/friends.component */ "./src/app/friends/friends.component.ts");
/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./people/people.component */ "./src/app/people/people.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
                _feed_feed_component__WEBPACK_IMPORTED_MODULE_7__["FeedComponent"],
                _wall_wall_component__WEBPACK_IMPORTED_MODULE_9__["WallComponent"],
                _friends_friends_component__WEBPACK_IMPORTED_MODULE_10__["FriendsComponent"],
                _people_people_component__WEBPACK_IMPORTED_MODULE_11__["PeopleComponent"],
                _post_post_component__WEBPACK_IMPORTED_MODULE_12__["PostComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/feed/feed.component.css":
/*!*****************************************!*\
  !*** ./src/app/feed/feed.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlZWQvZmVlZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/feed/feed.component.html":
/*!******************************************!*\
  !*** ./src/app/feed/feed.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  feed works!\n</p>\n"

/***/ }),

/***/ "./src/app/feed/feed.component.ts":
/*!****************************************!*\
  !*** ./src/app/feed/feed.component.ts ***!
  \****************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FeedComponent = /** @class */ (function () {
    function FeedComponent() {
    }
    FeedComponent.prototype.ngOnInit = function () {
    };
    FeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feed',
            template: __webpack_require__(/*! ./feed.component.html */ "./src/app/feed/feed.component.html"),
            styles: [__webpack_require__(/*! ./feed.component.css */ "./src/app/feed/feed.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FeedComponent);
    return FeedComponent;
}());



/***/ }),

/***/ "./src/app/friends.service.ts":
/*!************************************!*\
  !*** ./src/app/friends.service.ts ***!
  \************************************/
/*! exports provided: FriendsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsService", function() { return FriendsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var FriendsService = /** @class */ (function () {
    function FriendsService(http) {
        this.http = http;
        this.api = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API;
    }
    FriendsService.prototype.getFriends = function (userID) {
        return this.doRequest(this.api + "/users/" + userID + "/friendships");
    };
    FriendsService.prototype.getPendent = function (userID) {
        return this.doRequest(this.api + "/recipient/" + userID + "/friendships")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (friends) { return friends.map(function (f) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ accepted: f.accepted }, f.id.sender, { state: 0 })); }); }));
    };
    FriendsService.prototype.getSent = function (userID) {
        return this.doRequest(this.api + "/sender/" + userID + "/friendships")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (friends) { return friends.map(function (f) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ accepted: f.accepted }, f.id.recipient, { state: 1 })); }); }));
    };
    FriendsService.prototype.delete = function (fID, sID) {
        return this.http.delete(this.api + "/users/" + fID + "/users/" + sID + "/friendships")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("deleteFriendship", undefined)));
    };
    FriendsService.prototype.create = function (senderID, recipientID) {
        return this.http.post(this.api + "/sender/" + senderID + "/recipient/" + recipientID + "/friendship", undefined, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("createFriendship", undefined)));
    };
    FriendsService.prototype.acceptRequest = function (senderID, recipientID) {
        return this.http.put(this.api + "/sender/" + senderID + "/recipient/" + recipientID + "/friendship", {}, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("acceptFriendship", undefined)));
    };
    FriendsService.prototype.doRequest = function (url) {
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("doRequest - " + url, undefined)));
    };
    FriendsService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error("Error in " + operation);
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    FriendsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FriendsService);
    return FriendsService;
}());



/***/ }),

/***/ "./src/app/friends/friends.component.css":
/*!***********************************************!*\
  !*** ./src/app/friends/friends.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#friends > h3 {\r\n  text-align: center;\r\n}\r\n\r\n#friends > .buttons {\r\n  text-align: center;\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  grid-gap: 5px;\r\n  margin: auto;\r\n  padding: 10px;\r\n}\r\n\r\n#friends-container > .friend-item {\r\n  padding: 10px 10px 15px;\r\n  border-bottom: 1px solid lightgray;\r\n}\r\n\r\n#friends-container > .friend-item:hover {\r\n  background-color: #f0f0f0;\r\n}\r\n\r\n#friends-container > .friend-item > button {\r\n  float: right;\r\n}\r\n\r\n#friends > #info-container {\r\n  text-align: center;\r\n}\r\n\r\n#friends > #info-container > .info {\r\n  color: gray;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJpZW5kcy9mcmllbmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHFDQUFxQztFQUNyQywwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9mcmllbmRzL2ZyaWVuZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmcmllbmRzID4gaDMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2ZyaWVuZHMgPiAuYnV0dG9ucyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgZ3JpZC1nYXA6IDVweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuI2ZyaWVuZHMtY29udGFpbmVyID4gLmZyaWVuZC1pdGVtIHtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHggMTVweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG59XHJcblxyXG4jZnJpZW5kcy1jb250YWluZXIgPiAuZnJpZW5kLWl0ZW06aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbn1cclxuXHJcbiNmcmllbmRzLWNvbnRhaW5lciA+IC5mcmllbmQtaXRlbSA+IGJ1dHRvbiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4jZnJpZW5kcyA+ICNpbmZvLWNvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jZnJpZW5kcyA+ICNpbmZvLWNvbnRhaW5lciA+IC5pbmZvIHtcclxuICBjb2xvcjogZ3JheTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/friends/friends.component.html":
/*!************************************************!*\
  !*** ./src/app/friends/friends.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!!currentUser\" id=\"friends\">\n  <h3>Friends</h3>\n  <div class=\"buttons\" [style.display]=\"myProfile ? 'grid' : 'block'\">\n    <button *ngIf=\"myProfile\" class=\"accent-btn\" (click)=\"seeAllFriends(currentUser)\">\n      All Friends\n    </button>\n    <button *ngIf=\"myProfile\" class=\"accent-btn\" (click)=\"seeSentRequests()\">Sent requests</button>\n    <button *ngIf=\"myProfile\" class=\"accent-btn\" (click)=\"seeReceivedRequests()\">\n      Received Requests\n    </button>\n    <button *ngIf=\"!myProfile\" class=\"accent-btn\" (click)=\"seeAllFriends(currentUser)\">\n      Friends of {{ currentUser.name + ' ' + currentUser.lastname }}\n    </button>\n  </div>\n  <div id=\"friends-container\">\n    <div *ngFor=\"let f of showingFriends\" class=\"friend-item\">\n      {{ f.accepted }} {{ f.name }} {{ f.lastname }}\n      <button class=\"accent-btn\" routerLink=\"/profile/{{f.id}}/wall\">See Profile</button>\n      <button class=\"accent-btn\" *ngIf=\"!f.accepted\" (click)=\"deleteRequest(f.id)\">\n        Cancel Request\n      </button>\n      <button class=\"accent-btn\" *ngIf=\"f.accepted && myProfile\" (click)=\"deleteRequest(f.id)\">\n        Remove Friend\n      </button>\n      <button class=\"accent-btn\" *ngIf=\"!f.accepted && currState === 2\" (click)=\"acceptRequest(f.id)\">\n        Accept Request\n      </button>\n    </div>\n  </div>\n\n  <div *ngIf=\"showingFriends && showingFriends.length === 0\" id=\"info-container\">\n    <span class=\"info\" *ngIf=\"myProfile && currState === 0\">Add some friends</span>\n    <span class=\"info\" *ngIf=\"myProfile && currState === 1\">You haven't sent any requests</span>\n    <span class=\"info\" *ngIf=\"myProfile && currState === 2\">You have no pendent requests</span>\n    <span class=\"info\" *ngIf=\"!myProfile && currState === 0\">{{currentUser.name}} doesn't have friends</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/friends/friends.component.ts":
/*!**********************************************!*\
  !*** ./src/app/friends/friends.component.ts ***!
  \**********************************************/
/*! exports provided: FriendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsComponent", function() { return FriendsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../session.service */ "./src/app/session.service.ts");
/* harmony import */ var _friends_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../friends.service */ "./src/app/friends.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var FriendsComponent = /** @class */ (function () {
    function FriendsComponent(session, friendsService, route) {
        this.session = session;
        this.friendsService = friendsService;
        this.route = route;
        this.myProfile = true;
    }
    FriendsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.url.subscribe(function (urlPath) {
            var id = urlPath[urlPath.length - 1].path;
            if (id !== 'me') {
                _this.session.getSeeingProfile()
                    .subscribe(function (u) {
                    _this.currentUser = u;
                    _this.seeAllFriends(_this.currentUser);
                    _this.session
                        .getSession()
                        .subscribe(function (u) {
                        _this.myProfile = '' + u.id === id;
                    });
                });
            }
            else {
                _this.session
                    .getSession()
                    .subscribe(function (user) {
                    _this.currentUser = user;
                    _this.seeAllFriends(_this.currentUser);
                });
            }
        });
    };
    FriendsComponent.prototype.seeAllFriends = function (user) {
        var _this = this;
        if (this.currState !== 0 && user) {
            this.friendsService.getFriends(user.id)
                .subscribe(function (friends) {
                _this.showingFriends = friends.map(function (f) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, f, { accepted: 1 })); });
                _this.currState = 0;
            });
        }
    };
    FriendsComponent.prototype.seeSentRequests = function () {
        var _this = this;
        if (this.currState !== 1) {
            this.friendsService.getSent(this.currentUser.id)
                .subscribe(function (friends) {
                _this.showingFriends = friends;
                _this.currState = 1;
            });
        }
    };
    FriendsComponent.prototype.seeReceivedRequests = function () {
        var _this = this;
        if (this.currState !== 2) {
            this.friendsService.getPendent(this.currentUser.id)
                .subscribe(function (friends) {
                _this.showingFriends = friends;
                _this.currState = 2;
            });
        }
    };
    FriendsComponent.prototype.deleteRequest = function (friendID) {
        var _this = this;
        this.friendsService.delete(this.currentUser.id, friendID)
            .subscribe(function (f) { return _this.refreshState(); });
    };
    FriendsComponent.prototype.acceptRequest = function (friendID) {
        var _this = this;
        this.friendsService.acceptRequest(this.currentUser.id, friendID)
            .subscribe(function (_) { return _this.refreshState(); });
    };
    FriendsComponent.prototype.refreshState = function () {
        var _this = this;
        var toRefresh = [
            function () { return _this.seeAllFriends(_this.currentUser); },
            function () { return _this.seeSentRequests(); },
            function () { return _this.seeReceivedRequests(); }
        ][this.currState];
        this.currState = -1;
        toRefresh();
    };
    FriendsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-friends',
            template: __webpack_require__(/*! ./friends.component.html */ "./src/app/friends/friends.component.html"),
            styles: [__webpack_require__(/*! ./friends.component.css */ "./src/app/friends/friends.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"], _friends_service__WEBPACK_IMPORTED_MODULE_3__["FriendsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], FriendsComponent);
    return FriendsComponent;
}());



/***/ }),

/***/ "./src/app/people/people.component.css":
/*!*********************************************!*\
  !*** ./src/app/people/people.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Blb3BsZS9wZW9wbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/people/people.component.html":
/*!**********************************************!*\
  !*** ./src/app/people/people.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wall-container\">\n    <button id=\"add-post-container\" (click)=\"openModal()\">&#x2b;</button>\n    <div *ngIf=\"posts\" id=\"wall\">\n      <div *ngFor=\"let p of posts\">\n        <div class=\"card\">\n          <div class=\"post-header\">\n            <span>{{ p.creator.name + ' ' + p.creator.lastname }}</span>\n          </div>\n          <div class=\"post-content\">\n            {{ p.content }}\n          </div>\n        </div>\n        <div class=\"card comments\">\n          <div class=\"post-header\">\n            <span>Comments</span>\n          </div>\n          <div class=\"comment-container\">\n            <div *ngFor=\"let c of p.comments\">\n              <div class=\"post-header\">\n                <span>{{ c.user.name + ' ' + c.user.lastname }}</span>\n              </div>\n              <div class=\"post-content\">\n                <span>{{ c.comment }}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"!currentUser\">\n      Loading...\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/people/people.component.ts":
/*!********************************************!*\
  !*** ./src/app/people/people.component.ts ***!
  \********************************************/
/*! exports provided: PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return PeopleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var PeopleComponent = /** @class */ (function () {
    function PeopleComponent(route, location) {
        this.route = route;
        this.location = location;
    }
    PeopleComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.paramMap.get('id');
    };
    PeopleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-people',
            template: __webpack_require__(/*! ./people.component.html */ "./src/app/people/people.component.html"),
            styles: [__webpack_require__(/*! ./people.component.css */ "./src/app/people/people.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], PeopleComponent);
    return PeopleComponent;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/*!*****************************************!*\
  !*** ./src/app/post/post.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n  margin: 20px 20% 0;\r\n  box-shadow: 0 1px 10px -5px black;\r\n  padding: 20px;\r\n  position: relative;\r\n  background-color: white;\r\n  z-index: 10;\r\n  border-radius: 10px;\r\n}\r\n\r\n.card:first-child {\r\n  background-color: var(--secondary);\r\n}\r\n\r\n.card.comments {\r\n  margin: 0px 23%;\r\n  z-index: 5;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n.card > .post-header {\r\n  border-bottom: 1px solid lightgray;\r\n  padding: 5px;\r\n  color: white;\r\n  position: relative;\r\n}\r\n\r\n.card > .post-header > button {\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  background-color: transparent;\r\n  border: transparent;\r\n  color: white;\r\n}\r\n\r\n.card > .post-header > button:hover{\r\n  color: red;\r\n}\r\n\r\n.card.comments > .post-header {\r\n  color: gray;\r\n  text-align: center;\r\n}\r\n\r\n.card > .post-header > span {\r\n  font-weight: bold;\r\n}\r\n\r\n.card > .comment-container > div > .post-header > span {\r\n  color: gray;\r\n  font-size: 1em;\r\n}\r\n\r\n.card > .post-content {\r\n  padding: 5px;\r\n  color: white;\r\n  position: relative;\r\n}\r\n\r\n.card > .post-content > img {\r\n  width: 100%;\r\n  display: inline-block;\r\n  margin-top: 10px;\r\n}\r\n\r\n.card > .post-content > span {\r\n  display: block;\r\n  padding: 20px 0;\r\n}\r\n\r\n.card > .comment-container > div {\r\n  padding: 20px 10px 0;\r\n}\r\n\r\n.card > .comment-container > div > .post-content {\r\n  padding: 5px 30px;\r\n}\r\n\r\n.card > .comment-container > div > input {\r\n  border: 1px solid lightgray;\r\n  border-radius: 10px;\r\n  padding: 5px 10px;\r\n  margin-top: 10px;\r\n  outline: none;\r\n  width: calc(100% - 60px);\r\n}\r\n\r\n.card > .comment-container > div > button {\r\n  border-radius: 50%;\r\n  position: relative;\r\n  left: -25px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsTUFBTTtFQUNOLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIG1hcmdpbjogMjBweCAyMCUgMDtcclxuICBib3gtc2hhZG93OiAwIDFweCAxMHB4IC01cHggYmxhY2s7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmNhcmQ6Zmlyc3QtY2hpbGQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi5jYXJkLmNvbW1lbnRzIHtcclxuICBtYXJnaW46IDBweCAyMyU7XHJcbiAgei1pbmRleDogNTtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG59XHJcblxyXG4uY2FyZCA+IC5wb3N0LWhlYWRlciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNhcmQgPiAucG9zdC1oZWFkZXIgPiBidXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jYXJkID4gLnBvc3QtaGVhZGVyID4gYnV0dG9uOmhvdmVye1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5jYXJkLmNvbW1lbnRzID4gLnBvc3QtaGVhZGVyIHtcclxuICBjb2xvcjogZ3JheTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkID4gLnBvc3QtaGVhZGVyID4gc3BhbiB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jYXJkID4gLmNvbW1lbnQtY29udGFpbmVyID4gZGl2ID4gLnBvc3QtaGVhZGVyID4gc3BhbiB7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuXHJcbi5jYXJkID4gLnBvc3QtY29udGVudCB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYXJkID4gLnBvc3QtY29udGVudCA+IGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkID4gLnBvc3QtY29udGVudCA+IHNwYW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxufVxyXG5cclxuLmNhcmQgPiAuY29tbWVudC1jb250YWluZXIgPiBkaXYge1xyXG4gIHBhZGRpbmc6IDIwcHggMTBweCAwO1xyXG59XHJcblxyXG4uY2FyZCA+IC5jb21tZW50LWNvbnRhaW5lciA+IGRpdiA+IC5wb3N0LWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDVweCAzMHB4O1xyXG59XHJcblxyXG4uY2FyZCA+IC5jb21tZW50LWNvbnRhaW5lciA+IGRpdiA+IGlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG59XHJcblxyXG4uY2FyZCA+IC5jb21tZW50LWNvbnRhaW5lciA+IGRpdiA+IGJ1dHRvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAtMjVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/post/post.component.html":
/*!******************************************!*\
  !*** ./src/app/post/post.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"post\">\n  <div class=\"post-header\">\n    <span>{{ post.creator.name + ' ' + post.creator.lastname }}</span>\n    <button (click)=\"deletePost()\"><i class=\"fas fa-trash\"></i></button>\n  </div>\n  <div class=\"post-content\">\n    <span>{{ post.content }}</span>\n    <img *ngIf=\"post.images.length !== 0\" [src]=\"getImage(post)\" />\n  </div>\n</div>\n<div class=\"card comments\">\n  <div class=\"post-header\">\n    <span>Comments</span>\n  </div>\n  <div class=\"comment-container\">\n    <div *ngFor=\"let c of post.comments\">\n      <div class=\"post-header\">\n        <span>{{ c.user.name + ' ' + c.user.lastname }}</span>\n      </div>\n      <div class=\"post-content\">\n        <span>{{ c.comment }}</span>\n      </div>\n    </div>\n    <div>\n      <input [(ngModel)]=\"newComment\"/>\n      <button class=\"accent-btn\" (click)=\"createComment(post)\"><i class=\"fas fa-paper-plane\"></i></button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _wall_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wall.service */ "./src/app/wall.service.ts");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../session.service */ "./src/app/session.service.ts");




var PostComponent = /** @class */ (function () {
    function PostComponent(wallService, session) {
        this.wallService = wallService;
        this.session = session;
    }
    PostComponent.prototype.ngOnInit = function () { };
    PostComponent.prototype.getImage = function (p) {
        var path = p.images[0].path;
        var filename = path.substring(path.lastIndexOf('/') + 1);
        return this.wallService.getImage(filename);
    };
    PostComponent.prototype.createComment = function (post) {
        var _this = this;
        this.session.getSession()
            .subscribe(function (usuario) {
            if (_this.newComment.trim()) {
                _this.wallService.createComment(post.id, usuario, _this.newComment)
                    .subscribe(function (c) {
                    post.comments.push(c);
                    _this.newComment = '';
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostComponent.prototype, "post", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostComponent.prototype, "currentUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], PostComponent.prototype, "deletePost", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PostComponent.prototype, "index", void 0);
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/post/post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_wall_service__WEBPACK_IMPORTED_MODULE_2__["WallService"], _session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#profile > #profile-header {\r\n  background-color: var(--accent-alpha);\r\n  padding: 10px;\r\n}\r\n\r\n#profile > #profile-header > h1,\r\n#profile > #profile-header > div {\r\n  margin: 0;\r\n  text-align: center;\r\n}\r\n\r\n#profile > #profile-header > div > span {\r\n  display: block;\r\n}\r\n\r\n#profile > #profile-header > div > span#about-me {\r\n  font-size: 0.8em;\r\n  color: gray;\r\n}\r\n\r\n#profile > #profile-header > #profile-buttons {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  margin: auto;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-gap: 5px;\r\n  padding-top: 10px;\r\n}\r\n\r\n#profile-header > h1 + .accent-btn {\r\n  background-color: white;\r\n  border: 2px solid var(--accent);\r\n  padding: 10px 15px;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  right: 10px;\r\n  top: 60px;\r\n  color: var(--accent);\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBcUM7RUFDckMsYUFBYTtBQUNmOztBQUVBOztFQUVFLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Byb2ZpbGUgPiAjcHJvZmlsZS1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1hbHBoYSk7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuI3Byb2ZpbGUgPiAjcHJvZmlsZS1oZWFkZXIgPiBoMSxcclxuI3Byb2ZpbGUgPiAjcHJvZmlsZS1oZWFkZXIgPiBkaXYge1xyXG4gIG1hcmdpbjogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNwcm9maWxlID4gI3Byb2ZpbGUtaGVhZGVyID4gZGl2ID4gc3BhbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNwcm9maWxlID4gI3Byb2ZpbGUtaGVhZGVyID4gZGl2ID4gc3BhbiNhYm91dC1tZSB7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxuICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuI3Byb2ZpbGUgPiAjcHJvZmlsZS1oZWFkZXIgPiAjcHJvZmlsZS1idXR0b25zIHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdyaWQtZ2FwOiA1cHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbiNwcm9maWxlLWhlYWRlciA+IGgxICsgLmFjY2VudC1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudCk7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgdG9wOiA2MHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"profile\" id=\"profile\">\n  <div id=\"profile-header\">\n    <h1>{{ profile.name }} {{ profile.lastname }}</h1>\n    <button class=\"accent-btn\" [style.padding]=\"'10px 12px'\" (click)=\"sendRequest()\" *ngIf=\"!isMe\"><i class=\"fas fa-user-plus\"></i></button>\n    <div>\n      <span id=\"about-me\">{{ profile.aboutMe }}</span>\n      <span>{{ profile.email }}</span>\n      <span>{{ profile.phone }}</span>\n    </div>\n    <div id=\"profile-buttons\">\n      <button class=\"accent-btn\" routerLink=\"./wall\">Wall</button>\n      <button class=\"accent-btn\" routerLink=\"./friends\">Friends</button>\n    </div>\n  </div>\n  <div>\n    <router-outlet></router-outlet>\n  </div>\n</div>\n<div *ngIf=\"!profile\">\n  Loading...\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../session.service */ "./src/app/session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _friends_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../friends.service */ "./src/app/friends.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(session, route, router, friendship, location) {
        this.session = session;
        this.route = route;
        this.router = router;
        this.friendship = friendship;
        this.location = location;
        this.isMe = false;
        this.friends = 0;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var init = function (id) {
            if (id === 'me') {
                _this.session.getSession().subscribe(function (u) { return _this.profile = u; });
                _this.session.me();
                _this.isMe = true;
            }
            else {
                _this.session.getProfile(+id).subscribe(function (u) { return _this.profile = u; });
                _this.isMe = false;
            }
            var reg = new RegExp('^/profile/(me|[0-9]+)(/wall|)$', 'g');
            var res = _this.location.path().match(reg);
            if (res && res.length !== 0) {
                _this.router.navigateByUrl("/profile/" + id + "/wall");
            }
            else {
                _this.router.navigateByUrl("/profile/" + id + "/friends");
            }
        };
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                var id = _this.route.snapshot.paramMap.get('id');
                init(id);
            }
        });
        init(this.route.snapshot.paramMap.get('id'));
    };
    ProfileComponent.prototype.sendRequest = function () {
        var _this = this;
        this.session.getSession()
            .subscribe(function (me) {
            _this.friendship.create(me.id, _this.profile.id)
                .subscribe(function (f) { return _this.friends = 1; });
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _friends_service__WEBPACK_IMPORTED_MODULE_4__["FriendsService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/session.service.ts":
/*!************************************!*\
  !*** ./src/app/session.service.ts ***!
  \************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var SessionService = /** @class */ (function () {
    function SessionService(http) {
        this.http = http;
        this.api = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API;
        this.sessionUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    SessionService.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post(this.api + "/login", { email: email, password: password }, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (profiles) {
            _this.sessionUser = profiles;
            localStorage.setItem('currentUser', JSON.stringify(_this.sessionUser));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getProfile', undefined)));
    };
    SessionService.prototype.signup = function (user) {
        var _this = this;
        return this.http.post(this.api + "/users", user, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (profiles) {
            _this.sessionUser = profiles;
            localStorage.setItem('currentUser', JSON.stringify(_this.sessionUser));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getProfile', undefined)));
    };
    SessionService.prototype.logout = function () {
        this.sessionUser = undefined;
        this.seeingUser = undefined;
        localStorage.removeItem('currentUser');
    };
    SessionService.prototype.getSession = function () {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.sessionUser)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.seeingUser = null; }));
    };
    SessionService.prototype.getSeeingProfile = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.seeingUser);
    };
    SessionService.prototype.getPeople = function () {
        return this.http.get(this.api + "/users")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getProfile', undefined)));
    };
    SessionService.prototype.me = function () {
        this.seeingUser = undefined;
    };
    SessionService.prototype.getProfile = function (id) {
        var _this = this;
        return this.http.get(this.api + "/users/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (u) { return _this.seeingUser = u; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getProfile', undefined)));
    };
    SessionService.prototype.editProfile = function (nUser) {
        var _this = this;
        return this.http.put(this.api + "/users/" + this.sessionUser.id, nUser, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (u) {
            _this.sessionUser = u;
            localStorage.setItem('currentUser', JSON.stringify(_this.sessionUser));
        }));
    };
    SessionService.prototype.changePassword = function (oldPassword, newPassword) {
        return this.http.put(this.api + "/users/" + this.sessionUser.id + "/password", { oldPassword: oldPassword, newPassword: newPassword }, httpOptions);
    };
    SessionService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error("Error in " + operation);
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    SessionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./src/app/wall.service.ts":
/*!*********************************!*\
  !*** ./src/app/wall.service.ts ***!
  \*********************************/
/*! exports provided: WallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WallService", function() { return WallService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var WallService = /** @class */ (function () {
    function WallService(http) {
        this.http = http;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API;
    }
    WallService.prototype.getWall = function (userId) {
        return this.http.get(this.api + "/wall/" + userId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getProfile', [])));
    };
    WallService.prototype.createPost = function (userId, post, image) {
        var formData = new FormData();
        formData.append('post', JSON.stringify(post));
        formData.append('images', image);
        return this.http.post(this.api + "/users/" + userId + "/posts", formData);
    };
    WallService.prototype.getImage = function (filename) {
        return this.api + "/downloadFile/" + filename;
    };
    WallService.prototype.createComment = function (postID, from, comment) {
        console.log(comment);
        return this.http.post(this.api + "/posts/" + postID + "/comments", { user: from, comment: comment }, httpOptions);
    };
    WallService.prototype.deletePost = function (userID, id) {
        return this.http.delete(this.api + "/users/" + userID + "/posts/" + id);
    };
    WallService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error("Error in " + operation);
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    WallService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WallService);
    return WallService;
}());



/***/ }),

/***/ "./src/app/wall/wall.component.css":
/*!*****************************************!*\
  !*** ./src/app/wall/wall.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wall-container {\r\n  position: relative;\r\n}\r\n\r\n#wall-container > #add-post-container {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  background-color: white;\r\n  color: var(--accent);\r\n  border: 2px solid var(--accent);\r\n  border-radius: 50%;\r\n  width: 50px;\r\n  height: 50px;\r\n  font-size: 1.5em;\r\n  top: 60px;\r\n  right: 15px;\r\n  margin-top: -25px;\r\n  left: 100%;\r\n  margin-right: 10px;\r\n}\r\n\r\n#wall-container > #add-post-container.empty {\r\n  top: -25px;\r\n}\r\n\r\n#wall-container > #add-post-container:hover {\r\n  background-color: var(--accent);\r\n  color: white;\r\n}\r\n\r\n#wall > div {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n#no-posts {\r\n  text-align: center;\r\n  color: gray;\r\n}\r\n\r\n#no-posts > span {\r\n  display: block;\r\n}\r\n\r\n#filters > .active {\r\n  background-color: var(--accent);\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2FsbC93YWxsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3dhbGwvd2FsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3dhbGwtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiN3YWxsLWNvbnRhaW5lciA+ICNhZGQtcG9zdC1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50KTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgdG9wOiA2MHB4O1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IC0yNXB4O1xyXG4gIGxlZnQ6IDEwMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4jd2FsbC1jb250YWluZXIgPiAjYWRkLXBvc3QtY29udGFpbmVyLmVtcHR5IHtcclxuICB0b3A6IC0yNXB4O1xyXG59XHJcblxyXG4jd2FsbC1jb250YWluZXIgPiAjYWRkLXBvc3QtY29udGFpbmVyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI3dhbGwgPiBkaXYge1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbiNuby1wb3N0cyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4jbm8tcG9zdHMgPiBzcGFuIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuI2ZpbHRlcnMgPiAuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/wall/wall.component.html":
/*!******************************************!*\
  !*** ./src/app/wall/wall.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wall-container\">\n  <button id=\"add-post-container\" (click)=\"openModal()\" [class.empty]=\"posts && posts.length === 0\">\n    &#x2b;\n  </button>\n  <div *ngIf=\"posts.length !== 0\" id=\"wall\">\n    <div *ngFor=\"let p of posts; let i = index\">\n      <app-post [post]=\"p\" [currentUser]=\"currentUser\" [deletePost]=\"deletePost(p, i)\"></app-post>\n    </div>\n  </div>\n  <div *ngIf=\"currentUser && posts.length === 0\" id=\"no-posts\">\n    <span>{{currentUser.name}} doesn't have posts yet.</span>\n    <span>Be the first to publish in this wall!</span>\n  </div>\n  <div *ngIf=\"!currentUser\">\n    Loading...\n  </div>\n</div>\n\n<div id=\"modal-bg\" *ngIf=\"showModal\"></div>\n<div id=\"modal-container\" *ngIf=\"currentUser && showModal\">\n  <div id=\"modal-header\">\n    <h3>Add Post in {{ currentUser.name + ' ' + currentUser.lastname }} Wall</h3>\n    <button (click)=\"closeModal()\">&times;</button>\n  </div>\n  <div id=\"modal-content\">\n    <textarea [(ngModel)]=\"newPost\"></textarea>\n\n    <input #imageinput type=\"file\" accept=\"image/*\" (change)=\"processImage(imageinput)\" />\n    <div id=\"filters\">\n      <button (click)=\"selectFilter(0)\" [class.active]=\"selectedFilter===0\" class=\"accent-btn\"><i class=\"fas fa-eye-slash\"></i></button>\n      <button (click)=\"selectFilter(1)\" [class.active]=\"selectedFilter===1\" class=\"accent-btn\">F1</button>\n      <button (click)=\"selectFilter(2)\" [class.active]=\"selectedFilter===2\" class=\"accent-btn\">F2</button>\n      <button (click)=\"selectFilter(3)\" [class.active]=\"selectedFilter===3\" class=\"accent-btn\">F3</button>\n    </div>\n\n    <button class=\"accent-btn\" (click)=\"createPost(currentUser)\">\n      Post\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/wall/wall.component.ts":
/*!****************************************!*\
  !*** ./src/app/wall/wall.component.ts ***!
  \****************************************/
/*! exports provided: ImageSnippet, WallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSnippet", function() { return ImageSnippet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WallComponent", function() { return WallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../session.service */ "./src/app/session.service.ts");
/* harmony import */ var _wall_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../wall.service */ "./src/app/wall.service.ts");





var ImageSnippet = /** @class */ (function () {
    function ImageSnippet(src, file) {
        this.src = src;
        this.file = file;
    }
    return ImageSnippet;
}());

var WallComponent = /** @class */ (function () {
    function WallComponent(session, wallService, route) {
        this.session = session;
        this.wallService = wallService;
        this.route = route;
        this.posts = [];
        this.selectedFilter = 0;
        this.showModal = false;
    }
    WallComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.url.subscribe(function (urlPath) {
            var id = urlPath[urlPath.length - 1].path;
            if (id !== 'me') {
                setTimeout(function () {
                    _this.session
                        .getSeeingProfile()
                        .subscribe(function (u) {
                        _this.currentUser = u;
                        if (_this.currentUser) {
                            _this.fetchPosts(_this.currentUser);
                        }
                    });
                }, 100);
            }
            else {
                _this.session
                    .getSession()
                    .subscribe(function (user) {
                    _this.currentUser = user;
                    _this.fetchPosts(_this.currentUser);
                });
            }
        });
    };
    WallComponent.prototype.fetchPosts = function (user) {
        var _this = this;
        this.wallService.getWall(user.id)
            .subscribe(function (posts) { return _this.posts = posts; });
    };
    WallComponent.prototype.createPost = function (toUser) {
        var _this = this;
        var file = this.selectedFile ? this.selectedFile.file.name : undefined;
        var post = {
            creator: this.session.sessionUser,
            recipient: toUser,
            comments: [],
            content: this.newPost,
            images: [
                {
                    path: file,
                    filter: this.selectedFilter !== 0 ? this.selectedFilter : null
                }
            ]
        };
        this.wallService.createPost(this.session.sessionUser.id, post, this.selectedFile && this.selectedFile.file)
            .subscribe(function (p) {
            _this.closeModal();
            _this.fetchPosts(_this.currentUser);
        });
    };
    WallComponent.prototype.processImage = function (imageInput) {
        var _this = this;
        var file = imageInput.files[0];
        var reader = new FileReader();
        reader.addEventListener('load', function (event) {
            _this.selectedFile = new ImageSnippet(event.target.result, file);
        });
        reader.readAsDataURL(file);
    };
    WallComponent.prototype.openModal = function () {
        this.showModal = true;
    };
    WallComponent.prototype.closeModal = function () {
        this.newPost = '';
        this.showModal = false;
    };
    WallComponent.prototype.deletePost = function (post, index) {
        var _this = this;
        return function () {
            _this.session.getSession()
                .subscribe(function (s) {
                _this.wallService.deletePost(s.id, post.id)
                    .subscribe(function (_) {
                    _this.posts.splice(index, 1);
                });
            });
        };
    };
    WallComponent.prototype.selectFilter = function (filter) {
        this.selectedFilter = filter;
    };
    WallComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wall',
            template: __webpack_require__(/*! ./wall.component.html */ "./src/app/wall/wall.component.html"),
            styles: [__webpack_require__(/*! ./wall.component.css */ "./src/app/wall/wall.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"], _wall_service__WEBPACK_IMPORTED_MODULE_4__["WallService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WallComponent);
    return WallComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    API: 'http://34.67.232.144:8080/social-network-0.1'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dnarv\Desktop\social-network\front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map