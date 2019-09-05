(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles/main.scss":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles/main.scss ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap\");\n* {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  font-family: Lato;\n  vertical-align: baseline; }\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\nbody {\n  line-height: 1; }\nol, ul {\n  list-style: none; }\nblockquote, q {\n  quotes: none; }\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\nbutton {\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.38;\n  width: 140px;\n  height: 40px;\n  border-radius: 5px; }\nbutton.default {\n    color: #fff;\n    background-color: #7f8185; }\nbutton.primary {\n    color: #fff;\n    background-color: #ef3a5d; }\ninput {\n  border-radius: 5px;\n  height: 40px;\n  padding-left: 8px;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.38; }\nlabel {\n  padding: 8px;\n  border-radius: 5px; }\n@font-face {\n  font-family: dh-icons;\n  src: url(\"/fonts/dh-icons.eot\");\n  src: url(\"/fonts/dh-icons.eot?#iefix\") format(\"embedded-opentype\"), url(\"/fonts/dh-icons.woff\") format(\"woff\"), url(\"/fonts/dh-icons.ttf\") format(\"truetype\"), url(\"/fonts/dh-icons.svg#dh-icons\") format(\"svg\");\n  font-weight: 400;\n  font-style: normal; }\n.icon {\n  position: relative;\n  vertical-align: middle; }\n[data-icon]:before {\n  font-family: dh-icons !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: 400 !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n[class*=\" icon-\"]:before,\n[class^=\"icon-\"]:before {\n  font-family: dh-icons !important;\n  font-style: normal !important;\n  font-weight: 400 !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  position: absolute;\n  bottom: 2px; }\n[class*=\" icon-\"]:after,\n[class^=\"icon-\"]:after {\n  font-family: dh-icons !important;\n  font-style: normal !important;\n  font-weight: 400 !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  content: \"\\61\";\n  color: transparent; }\n.icon-24h:before {\n  content: \"\\61\"; }\n.icon-ambulance:before {\n  content: \"\\62\"; }\n.icon-arrow:before {\n  content: \"\\63\"; }\n.icon-availability:before {\n  content: \"\\64\"; }\n.icon-back:before {\n  content: \"\\65\"; }\n.icon-bed:before {\n  content: \"\\66\"; }\n.icon-blog:before {\n  content: \"\\67\"; }\n.icon-calendar:before {\n  content: \"\\68\"; }\n.icon-camera:before {\n  content: \"\\69\"; }\n.icon-cat:before {\n  content: \"\\6a\"; }\n.icon-change:before {\n  content: \"\\6b\"; }\n.icon-close:before {\n  content: \"\\6c\"; }\n.icon-country-house:before {\n  content: \"\\6d\"; }\n.icon-dogs:before {\n  content: \"\\6e\"; }\n.icon-edit:before {\n  content: \"\\6f\"; }\n.icon-elderly:before {\n  content: \"\\70\"; }\n.icon-empty-star1x:before {\n  content: \"\\33\"; }\n.icon-exclusive:before {\n  content: \"\\73\"; }\n.icon-exercise-schedule:before {\n  content: \"\\74\"; }\n.icon-exercises:before {\n  content: \"\\75\"; }\n.icon-experience:before {\n  content: \"\\76\"; }\n.icon-fence:before {\n  content: \"\\77\"; }\n.icon-filter:before {\n  content: \"\\78\"; }\n.icon-first-aid:before {\n  content: \"\\79\"; }\n.icon-flat:before {\n  content: \"\\7a\"; }\n.icon-full-star1x:before {\n  content: \"\\31\"; }\n.icon-gallery:before {\n  content: \"\\42\"; }\n.icon-generic:before {\n  content: \"\\43\"; }\n.icon-gps:before {\n  content: \"\\44\"; }\n.icon-half-star1x:before {\n  content: \"\\32\"; }\n.icon-heart:before {\n  content: \"\\46\"; }\n.icon-house:before {\n  content: \"\\47\"; }\n.icon-injected-medication:before {\n  content: \"\\48\"; }\n.icon-instadog:before {\n  content: \"\\49\"; }\n.icon-kid:before {\n  content: \"\\4a\"; }\n.icon-last-minute:before {\n  content: \"\\4b\"; }\n.icon-location:before {\n  content: \"\\4c\"; }\n.icon-map:before {\n  content: \"\\4d\"; }\n.icon-menu:before {\n  content: \"\\4e\"; }\n.icon-messenger:before {\n  content: \"\\4f\"; }\n.icon-more:before {\n  content: \"\\50\"; }\n.icon-my-location:before {\n  content: \"\\51\"; }\n.icon-no-bed:before {\n  content: \"\\52\"; }\n.icon-no-dogs:before {\n  content: \"\\53\"; }\n.icon-no-elderly:before {\n  content: \"\\54\"; }\n.icon-no-kid:before {\n  content: \"\\55\"; }\n.icon-no-puppy:before {\n  content: \"\\56\"; }\n.icon-no-smoke:before {\n  content: \"\\57\"; }\n.icon-no-sofa:before {\n  content: \"\\58\"; }\n.icon-oral-medication:before {\n  content: \"\\59\"; }\n.icon-outdoor-l:before {\n  content: \"\\5a\"; }\n.icon-outdoor-m:before {\n  content: \"\\30\"; }\n.icon-outdoor-s:before {\n  content: \"\\3c\"; }\n.icon-profile:before {\n  content: \"\\3e\"; }\n.icon-puppy:before {\n  content: \"\\3f\"; }\n.icon-repeat-guests:before {\n  content: \"\\34\"; }\n.icon-report:before {\n  content: \"\\35\"; }\n.icon-reservation:before {\n  content: \"\\36\"; }\n.icon-respond-rate:before {\n  content: \"\\37\"; }\n.icon-respond-time:before {\n  content: \"\\38\"; }\n.icon-school:before {\n  content: \"\\39\"; }\n.icon-search:before {\n  content: \"\\21\"; }\n.icon-share:before {\n  content: \"\\22\"; }\n.icon-smoke:before {\n  content: \"\\23\"; }\n.icon-sofa:before {\n  content: \"\\24\"; }\n.icon-special:before {\n  content: \"\\25\"; }\n.icon-window-protected:before {\n  content: \"\\26\"; }\n.icon-young:before {\n  content: \"\\71\"; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVybWFyY29zL2dpdC9kb2ctaGVyby9zcmMvc3R5bGVzL21haW4uc2NzcyIsIi9ob21lL2NvZGVybWFyY29zL2dpdC9kb2ctaGVyby9zcmMvc3R5bGVzL3Jlc2V0LnNjc3MiLCIvaG9tZS9jb2Rlcm1hcmNvcy9naXQvZG9nLWhlcm8vc3JjL3N0eWxlcy9lbGVtZW50cy9fYnV0dG9uLnNjc3MiLCIvaG9tZS9jb2Rlcm1hcmNvcy9naXQvZG9nLWhlcm8vc3JjL3N0eWxlcy9lbGVtZW50cy9fZm9ybXMuc2NzcyIsIi9ob21lL2NvZGVybWFyY29zL2dpdC9kb2ctaGVyby9zcmMvc3R5bGVzL2VsZW1lbnRzL19pY29ucy5zY3NzIiwic3JjL3N0eWxlcy9tYWluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsb0ZBQVk7QUNGWjtFQUNDLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2xCLHdCQUF3QixFQUFBO0FBRXpCLGdEQUFBO0FBQ0E7O0VBRUMsY0FBYyxFQUFBO0FBRWY7RUFDQyxjQUFjLEVBQUE7QUFFZjtFQUNDLGdCQUFnQixFQUFBO0FBRWpCO0VBQ0MsWUFBWSxFQUFBO0FBRWI7O0VBRUMsV0FBVztFQUNYLGFBQWEsRUFBQTtBQUVkO0VBQ0MseUJBQXlCO0VBQ3pCLGlCQUFpQixFQUFBO0FDOUJsQjtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCLEVBQUE7QUFOcEI7SUFTSSxXQUFXO0lBQ1gseUJBQXlCLEVBQUE7QUFWN0I7SUFjSSxXQUFXO0lBQ1gseUJBQXlCLEVBQUE7QUNmN0I7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBO0FBSW5CO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQixFQUFBO0FDWnBCO0VBQ0UscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQixnTkFDa0c7RUFDbEcsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBO0FBRXBCO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQixFQUFBO0FDNER4QjtFRHpERSxnQ0FBZ0M7RUFDaEMsd0JBQXdCO0VBQ3hCLDZCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IsK0JBQStCO0VBQy9CLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsY0FBYztFQUNkLG1DQUFtQztFQUNuQyxrQ0FBa0MsRUFBQTtBQzREcEM7O0VEeERFLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLCtCQUErQjtFQUMvQiwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLGNBQWM7RUFDZCxtQ0FBbUM7RUFDbkMsa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7QUM0RGI7O0VEeERFLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLCtCQUErQjtFQUMvQiwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLGNBQWM7RUFDZCxtQ0FBbUM7RUFDbkMsa0NBQWtDO0VBQ2xDLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTtBQUVwQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvc3R5bGVzL21haW4uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3Jlc2V0JztcblxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xuXG5AaW1wb3J0ICdlbGVtZW50cy9idXR0b24nO1xuQGltcG9ydCAnZWxlbWVudHMvZm9ybXMnO1xuQGltcG9ydCAnZWxlbWVudHMvaWNvbnMnO1xuIiwiKiB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5ib2R5IHtcblx0bGluZS1oZWlnaHQ6IDE7XG59XG5vbCwgdWwge1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSwgcSB7XG5cdHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuXHRjb250ZW50OiAnJztcblx0Y29udGVudDogbm9uZTtcbn1cbnRhYmxlIHtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0Ym9yZGVyLXNwYWNpbmc6IDA7XG59XG4iLCJidXR0b24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS4zODtcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAmLmRlZmF1bHQge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZjgxODU7XG4gIH1cblxuICAmLnByaW1hcnkge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjNhNWQ7XG4gIH1cbn1cbiIsImlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS4zODtcbn1cblxuXG5sYWJlbCB7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBkaC1pY29ucztcbiAgc3JjOiB1cmwoXCIvZm9udHMvZGgtaWNvbnMuZW90XCIpO1xuICBzcmM6IHVybChcIi9mb250cy9kaC1pY29ucy5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIvZm9udHMvZGgtaWNvbnMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLFxuICAgIHVybChcIi9mb250cy9kaC1pY29ucy50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksIHVybChcIi9mb250cy9kaC1pY29ucy5zdmcjZGgtaWNvbnNcIikgZm9ybWF0KFwic3ZnXCIpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4uaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbltkYXRhLWljb25dOmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBkaC1pY29ucyAhaW1wb3J0YW50O1xuICBjb250ZW50OiBhdHRyKGRhdGEtaWNvbik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5bY2xhc3MqPVwiIGljb24tXCJdOmJlZm9yZSxcbltjbGFzc149XCJpY29uLVwiXTpiZWZvcmUge1xuICBmb250LWZhbWlseTogZGgtaWNvbnMgIWltcG9ydGFudDtcbiAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgZm9udC12YXJpYW50OiBub3JtYWwgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgc3BlYWs6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDJweDtcbn1cbltjbGFzcyo9XCIgaWNvbi1cIl06YWZ0ZXIsXG5bY2xhc3NePVwiaWNvbi1cIl06YWZ0ZXIge1xuICBmb250LWZhbWlseTogZGgtaWNvbnMgIWltcG9ydGFudDtcbiAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgZm9udC12YXJpYW50OiBub3JtYWwgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgc3BlYWs6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgY29udGVudDogXCJcXDYxXCI7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5pY29uLTI0aDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNjFcIjtcbn1cbi5pY29uLWFtYnVsYW5jZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNjJcIjtcbn1cbi5pY29uLWFycm93OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw2M1wiO1xufVxuLmljb24tYXZhaWxhYmlsaXR5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw2NFwiO1xufVxuLmljb24tYmFjazpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNjVcIjtcbn1cbi5pY29uLWJlZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNjZcIjtcbn1cbi5pY29uLWJsb2c6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDY3XCI7XG59XG4uaWNvbi1jYWxlbmRhcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNjhcIjtcbn1cbi5pY29uLWNhbWVyYTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNjlcIjtcbn1cbi5pY29uLWNhdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNmFcIjtcbn1cbi5pY29uLWNoYW5nZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNmJcIjtcbn1cbi5pY29uLWNsb3NlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw2Y1wiO1xufVxuLmljb24tY291bnRyeS1ob3VzZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNmRcIjtcbn1cbi5pY29uLWRvZ3M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDZlXCI7XG59XG4uaWNvbi1lZGl0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw2ZlwiO1xufVxuLmljb24tZWxkZXJseTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNzBcIjtcbn1cbi5pY29uLWVtcHR5LXN0YXIxeDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMzNcIjtcbn1cbi5pY29uLWV4Y2x1c2l2ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNzNcIjtcbn1cbi5pY29uLWV4ZXJjaXNlLXNjaGVkdWxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw3NFwiO1xufVxuLmljb24tZXhlcmNpc2VzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw3NVwiO1xufVxuLmljb24tZXhwZXJpZW5jZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNzZcIjtcbn1cbi5pY29uLWZlbmNlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw3N1wiO1xufVxuLmljb24tZmlsdGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw3OFwiO1xufVxuLmljb24tZmlyc3QtYWlkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw3OVwiO1xufVxuLmljb24tZmxhdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcN2FcIjtcbn1cbi5pY29uLWZ1bGwtc3RhcjF4OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwzMVwiO1xufVxuLmljb24tZ2FsbGVyeTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNDJcIjtcbn1cbi5pY29uLWdlbmVyaWM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDQzXCI7XG59XG4uaWNvbi1ncHM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDQ0XCI7XG59XG4uaWNvbi1oYWxmLXN0YXIxeDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMzJcIjtcbn1cbi5pY29uLWhlYXJ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw0NlwiO1xufVxuLmljb24taG91c2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDQ3XCI7XG59XG4uaWNvbi1pbmplY3RlZC1tZWRpY2F0aW9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw0OFwiO1xufVxuLmljb24taW5zdGFkb2c6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDQ5XCI7XG59XG4uaWNvbi1raWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDRhXCI7XG59XG4uaWNvbi1sYXN0LW1pbnV0ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNGJcIjtcbn1cbi5pY29uLWxvY2F0aW9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw0Y1wiO1xufVxuLmljb24tbWFwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw0ZFwiO1xufVxuLmljb24tbWVudTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNGVcIjtcbn1cbi5pY29uLW1lc3NlbmdlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNGZcIjtcbn1cbi5pY29uLW1vcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDUwXCI7XG59XG4uaWNvbi1teS1sb2NhdGlvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNTFcIjtcbn1cbi5pY29uLW5vLWJlZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNTJcIjtcbn1cbi5pY29uLW5vLWRvZ3M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDUzXCI7XG59XG4uaWNvbi1uby1lbGRlcmx5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw1NFwiO1xufVxuLmljb24tbm8ta2lkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw1NVwiO1xufVxuLmljb24tbm8tcHVwcHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDU2XCI7XG59XG4uaWNvbi1uby1zbW9rZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNTdcIjtcbn1cbi5pY29uLW5vLXNvZmE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDU4XCI7XG59XG4uaWNvbi1vcmFsLW1lZGljYXRpb246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDU5XCI7XG59XG4uaWNvbi1vdXRkb29yLWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDVhXCI7XG59XG4uaWNvbi1vdXRkb29yLW06YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDMwXCI7XG59XG4uaWNvbi1vdXRkb29yLXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDNjXCI7XG59XG4uaWNvbi1wcm9maWxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwzZVwiO1xufVxuLmljb24tcHVwcHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDNmXCI7XG59XG4uaWNvbi1yZXBlYXQtZ3Vlc3RzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwzNFwiO1xufVxuLmljb24tcmVwb3J0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwzNVwiO1xufVxuLmljb24tcmVzZXJ2YXRpb246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDM2XCI7XG59XG4uaWNvbi1yZXNwb25kLXJhdGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDM3XCI7XG59XG4uaWNvbi1yZXNwb25kLXRpbWU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDM4XCI7XG59XG4uaWNvbi1zY2hvb2w6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDM5XCI7XG59XG4uaWNvbi1zZWFyY2g6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDIxXCI7XG59XG4uaWNvbi1zaGFyZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMjJcIjtcbn1cbi5pY29uLXNtb2tlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwyM1wiO1xufVxuLmljb24tc29mYTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMjRcIjtcbn1cbi5pY29uLXNwZWNpYWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDI1XCI7XG59XG4uaWNvbi13aW5kb3ctcHJvdGVjdGVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwyNlwiO1xufVxuLmljb24teW91bmc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDcxXCI7XG59XG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICBmb250LWZhbWlseTogTGF0bztcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XG5cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7IH1cblxub2wsIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxuXG5ibG9ja3F1b3RlLCBxIHtcbiAgcXVvdGVzOiBub25lOyB9XG5cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgY29udGVudDogbm9uZTsgfVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwOyB9XG5cbmJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjM4O1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4OyB9XG4gIGJ1dHRvbi5kZWZhdWx0IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2Y4MTg1OyB9XG4gIGJ1dHRvbi5wcmltYXJ5IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWYzYTVkOyB9XG5cbmlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS4zODsgfVxuXG5sYWJlbCB7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4OyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogZGgtaWNvbnM7XG4gIHNyYzogdXJsKFwiL2ZvbnRzL2RoLWljb25zLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCIvZm9udHMvZGgtaWNvbnMuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiL2ZvbnRzL2RoLWljb25zLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiL2ZvbnRzL2RoLWljb25zLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgdXJsKFwiL2ZvbnRzL2RoLWljb25zLnN2ZyNkaC1pY29uc1wiKSBmb3JtYXQoXCJzdmdcIik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxuXG4uaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxuXG5bZGF0YS1pY29uXTpiZWZvcmUge1xuICBmb250LWZhbWlseTogZGgtaWNvbnMgIWltcG9ydGFudDtcbiAgY29udGVudDogYXR0cihkYXRhLWljb24pO1xuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlOyB9XG5cbltjbGFzcyo9XCIgaWNvbi1cIl06YmVmb3JlLFxuW2NsYXNzXj1cImljb24tXCJdOmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBkaC1pY29ucyAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMnB4OyB9XG5cbltjbGFzcyo9XCIgaWNvbi1cIl06YWZ0ZXIsXG5bY2xhc3NePVwiaWNvbi1cIl06YWZ0ZXIge1xuICBmb250LWZhbWlseTogZGgtaWNvbnMgIWltcG9ydGFudDtcbiAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgZm9udC12YXJpYW50OiBub3JtYWwgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgc3BlYWs6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgY29udGVudDogXCJcXDYxXCI7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDsgfVxuXG4uaWNvbi0yNGg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDYxXCI7IH1cblxuLmljb24tYW1idWxhbmNlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw2MlwiOyB9XG5cbi5pY29uLWFycm93OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw2M1wiOyB9XG5cbi5pY29uLWF2YWlsYWJpbGl0eTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNjRcIjsgfVxuXG4uaWNvbi1iYWNrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw2NVwiOyB9XG5cbi5pY29uLWJlZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNjZcIjsgfVxuXG4uaWNvbi1ibG9nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw2N1wiOyB9XG5cbi5pY29uLWNhbGVuZGFyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw2OFwiOyB9XG5cbi5pY29uLWNhbWVyYTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNjlcIjsgfVxuXG4uaWNvbi1jYXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDZhXCI7IH1cblxuLmljb24tY2hhbmdlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw2YlwiOyB9XG5cbi5pY29uLWNsb3NlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw2Y1wiOyB9XG5cbi5pY29uLWNvdW50cnktaG91c2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDZkXCI7IH1cblxuLmljb24tZG9nczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNmVcIjsgfVxuXG4uaWNvbi1lZGl0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw2ZlwiOyB9XG5cbi5pY29uLWVsZGVybHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDcwXCI7IH1cblxuLmljb24tZW1wdHktc3RhcjF4OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwzM1wiOyB9XG5cbi5pY29uLWV4Y2x1c2l2ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNzNcIjsgfVxuXG4uaWNvbi1leGVyY2lzZS1zY2hlZHVsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNzRcIjsgfVxuXG4uaWNvbi1leGVyY2lzZXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDc1XCI7IH1cblxuLmljb24tZXhwZXJpZW5jZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNzZcIjsgfVxuXG4uaWNvbi1mZW5jZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNzdcIjsgfVxuXG4uaWNvbi1maWx0ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDc4XCI7IH1cblxuLmljb24tZmlyc3QtYWlkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw3OVwiOyB9XG5cbi5pY29uLWZsYXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDdhXCI7IH1cblxuLmljb24tZnVsbC1zdGFyMXg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDMxXCI7IH1cblxuLmljb24tZ2FsbGVyeTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNDJcIjsgfVxuXG4uaWNvbi1nZW5lcmljOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw0M1wiOyB9XG5cbi5pY29uLWdwczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNDRcIjsgfVxuXG4uaWNvbi1oYWxmLXN0YXIxeDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMzJcIjsgfVxuXG4uaWNvbi1oZWFydDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNDZcIjsgfVxuXG4uaWNvbi1ob3VzZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNDdcIjsgfVxuXG4uaWNvbi1pbmplY3RlZC1tZWRpY2F0aW9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw0OFwiOyB9XG5cbi5pY29uLWluc3RhZG9nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw0OVwiOyB9XG5cbi5pY29uLWtpZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNGFcIjsgfVxuXG4uaWNvbi1sYXN0LW1pbnV0ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNGJcIjsgfVxuXG4uaWNvbi1sb2NhdGlvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNGNcIjsgfVxuXG4uaWNvbi1tYXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDRkXCI7IH1cblxuLmljb24tbWVudTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNGVcIjsgfVxuXG4uaWNvbi1tZXNzZW5nZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDRmXCI7IH1cblxuLmljb24tbW9yZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNTBcIjsgfVxuXG4uaWNvbi1teS1sb2NhdGlvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNTFcIjsgfVxuXG4uaWNvbi1uby1iZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDUyXCI7IH1cblxuLmljb24tbm8tZG9nczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNTNcIjsgfVxuXG4uaWNvbi1uby1lbGRlcmx5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw1NFwiOyB9XG5cbi5pY29uLW5vLWtpZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNTVcIjsgfVxuXG4uaWNvbi1uby1wdXBweTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNTZcIjsgfVxuXG4uaWNvbi1uby1zbW9rZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNTdcIjsgfVxuXG4uaWNvbi1uby1zb2ZhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw1OFwiOyB9XG5cbi5pY29uLW9yYWwtbWVkaWNhdGlvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNTlcIjsgfVxuXG4uaWNvbi1vdXRkb29yLWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDVhXCI7IH1cblxuLmljb24tb3V0ZG9vci1tOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwzMFwiOyB9XG5cbi5pY29uLW91dGRvb3ItczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcM2NcIjsgfVxuXG4uaWNvbi1wcm9maWxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwzZVwiOyB9XG5cbi5pY29uLXB1cHB5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwzZlwiOyB9XG5cbi5pY29uLXJlcGVhdC1ndWVzdHM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDM0XCI7IH1cblxuLmljb24tcmVwb3J0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwzNVwiOyB9XG5cbi5pY29uLXJlc2VydmF0aW9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwzNlwiOyB9XG5cbi5pY29uLXJlc3BvbmQtcmF0ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMzdcIjsgfVxuXG4uaWNvbi1yZXNwb25kLXRpbWU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDM4XCI7IH1cblxuLmljb24tc2Nob29sOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwzOVwiOyB9XG5cbi5pY29uLXNlYXJjaDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMjFcIjsgfVxuXG4uaWNvbi1zaGFyZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMjJcIjsgfVxuXG4uaWNvbi1zbW9rZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMjNcIjsgfVxuXG4uaWNvbi1zb2ZhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwyNFwiOyB9XG5cbi5pY29uLXNwZWNpYWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDI1XCI7IH1cblxuLmljb24td2luZG93LXByb3RlY3RlZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMjZcIjsgfVxuXG4uaWNvbi15b3VuZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNzFcIjsgfVxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src??embedded!../../node_modules/sass-loader/lib/loader.js??ref--14-3!./main.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles/main.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!************************************!*\
  !*** multi ./src/styles/main.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/codermarcos/git/dog-hero/src/styles/main.scss */"./src/styles/main.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map