(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles/main.scss":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles/main.scss ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,400i&display=swap\");\n* {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  font-family: Lato;\n  vertical-align: baseline; }\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\nbody {\n  line-height: 1; }\nol, ul {\n  list-style: none; }\nblockquote, q {\n  quotes: none; }\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n.button {\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.38;\n  width: 140px;\n  height: 40px;\n  border-radius: 5px; }\n.button.default {\n    color: #fff;\n    background-color: #7f8185; }\n.button.primary {\n    color: #fff;\n    background-color: #ef3a5d; }\ninput {\n  border-radius: 5px;\n  height: 40px;\n  padding-left: 8px;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.38; }\nlabel {\n  padding: 8px;\n  border-radius: 5px; }\n@font-face {\n  font-family: dh-icons;\n  src: url(\"/fonts/dh-icons.eot\");\n  src: url(\"/fonts/dh-icons.eot?#iefix\") format(\"embedded-opentype\"), url(\"/fonts/dh-icons.woff\") format(\"woff\"), url(\"/fonts/dh-icons.ttf\") format(\"truetype\"), url(\"/fonts/dh-icons.svg#dh-icons\") format(\"svg\");\n  font-weight: 400;\n  font-style: normal; }\n.icon {\n  position: relative;\n  vertical-align: middle; }\n[data-icon]:before {\n  font-family: dh-icons !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: 400 !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n[class*=\" icon-\"]:before,\n[class^=\"icon-\"]:before {\n  font-family: dh-icons !important;\n  font-style: normal !important;\n  font-weight: 400 !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  position: absolute;\n  bottom: 2px; }\n[class*=\" icon-\"]:after,\n[class^=\"icon-\"]:after {\n  font-family: dh-icons !important;\n  font-style: normal !important;\n  font-weight: 400 !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  content: \"\\61\";\n  color: transparent; }\n.icon-24h:before {\n  content: \"\\61\"; }\n.icon-ambulance:before {\n  content: \"\\62\"; }\n.icon-arrow:before {\n  content: \"\\63\"; }\n.icon-availability:before {\n  content: \"\\64\"; }\n.icon-back:before {\n  content: \"\\65\"; }\n.icon-bed:before {\n  content: \"\\66\"; }\n.icon-blog:before {\n  content: \"\\67\"; }\n.icon-calendar:before {\n  content: \"\\68\"; }\n.icon-camera:before {\n  content: \"\\69\"; }\n.icon-cat:before {\n  content: \"\\6a\"; }\n.icon-change:before {\n  content: \"\\6b\"; }\n.icon-close:before {\n  content: \"\\6c\"; }\n.icon-country-house:before {\n  content: \"\\6d\"; }\n.icon-dogs:before {\n  content: \"\\6e\"; }\n.icon-edit:before {\n  content: \"\\6f\"; }\n.icon-elderly:before {\n  content: \"\\70\"; }\n.icon-empty-star1x:before {\n  content: \"\\33\"; }\n.icon-exclusive:before {\n  content: \"\\73\"; }\n.icon-exercise-schedule:before {\n  content: \"\\74\"; }\n.icon-exercises:before {\n  content: \"\\75\"; }\n.icon-experience:before {\n  content: \"\\76\"; }\n.icon-fence:before {\n  content: \"\\77\"; }\n.icon-filter:before {\n  content: \"\\78\"; }\n.icon-first-aid:before {\n  content: \"\\79\"; }\n.icon-flat:before {\n  content: \"\\7a\"; }\n.icon-full-star1x:before {\n  content: \"\\31\"; }\n.icon-gallery:before {\n  content: \"\\42\"; }\n.icon-generic:before {\n  content: \"\\43\"; }\n.icon-gps:before {\n  content: \"\\44\"; }\n.icon-half-star1x:before {\n  content: \"\\32\"; }\n.icon-heart:before {\n  content: \"\\46\"; }\n.icon-house:before {\n  content: \"\\47\"; }\n.icon-injected-medication:before {\n  content: \"\\48\"; }\n.icon-instadog:before {\n  content: \"\\49\"; }\n.icon-kid:before {\n  content: \"\\4a\"; }\n.icon-last-minute:before {\n  content: \"\\4b\"; }\n.icon-location:before {\n  content: \"\\4c\"; }\n.icon-map:before {\n  content: \"\\4d\"; }\n.icon-menu:before {\n  content: \"\\4e\"; }\n.icon-messenger:before {\n  content: \"\\4f\"; }\n.icon-more:before {\n  content: \"\\50\"; }\n.icon-my-location:before {\n  content: \"\\51\"; }\n.icon-no-bed:before {\n  content: \"\\52\"; }\n.icon-no-dogs:before {\n  content: \"\\53\"; }\n.icon-no-elderly:before {\n  content: \"\\54\"; }\n.icon-no-kid:before {\n  content: \"\\55\"; }\n.icon-no-puppy:before {\n  content: \"\\56\"; }\n.icon-no-smoke:before {\n  content: \"\\57\"; }\n.icon-no-sofa:before {\n  content: \"\\58\"; }\n.icon-oral-medication:before {\n  content: \"\\59\"; }\n.icon-outdoor-l:before {\n  content: \"\\5a\"; }\n.icon-outdoor-m:before {\n  content: \"\\30\"; }\n.icon-outdoor-s:before {\n  content: \"\\3c\"; }\n.icon-profile:before {\n  content: \"\\3e\"; }\n.icon-puppy:before {\n  content: \"\\3f\"; }\n.icon-repeat-guests:before {\n  content: \"\\34\"; }\n.icon-report:before {\n  content: \"\\35\"; }\n.icon-reservation:before {\n  content: \"\\36\"; }\n.icon-respond-rate:before {\n  content: \"\\37\"; }\n.icon-respond-time:before {\n  content: \"\\38\"; }\n.icon-school:before {\n  content: \"\\39\"; }\n.icon-search:before {\n  content: \"\\21\"; }\n.icon-share:before {\n  content: \"\\22\"; }\n.icon-smoke:before {\n  content: \"\\23\"; }\n.icon-sofa:before {\n  content: \"\\24\"; }\n.icon-special:before {\n  content: \"\\25\"; }\n.icon-window-protected:before {\n  content: \"\\26\"; }\n.icon-young:before {\n  content: \"\\71\"; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVybWFyY29zL2dpdC9kb2ctaGVyby9zcmMvc3R5bGVzL21haW4uc2NzcyIsIi9ob21lL2NvZGVybWFyY29zL2dpdC9kb2ctaGVyby9zcmMvc3R5bGVzL3Jlc2V0LnNjc3MiLCIvaG9tZS9jb2Rlcm1hcmNvcy9naXQvZG9nLWhlcm8vc3JjL3N0eWxlcy9lbGVtZW50cy9fYnV0dG9uLnNjc3MiLCIvaG9tZS9jb2Rlcm1hcmNvcy9naXQvZG9nLWhlcm8vc3JjL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9ob21lL2NvZGVybWFyY29zL2dpdC9kb2ctaGVyby9zcmMvc3R5bGVzL2VsZW1lbnRzL19mb3Jtcy5zY3NzIiwiL2hvbWUvY29kZXJtYXJjb3MvZ2l0L2RvZy1oZXJvL3NyYy9zdHlsZXMvZWxlbWVudHMvX2ljb25zLnNjc3MiLCJzcmMvc3R5bGVzL21haW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxvRkFBWTtBQUNaLHNGQUFZO0FDSFo7RUFDQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2QsYUFBYTtFQUNiLGlCQUFpQjtFQUNsQix3QkFBd0IsRUFBQTtBQUV6QixnREFBQTtBQUNBOztFQUVDLGNBQWMsRUFBQTtBQUVmO0VBQ0MsY0FBYyxFQUFBO0FBRWY7RUFDQyxnQkFBZ0IsRUFBQTtBQUVqQjtFQUNDLFlBQVksRUFBQTtBQUViOztFQUVDLFdBQVc7RUFDWCxhQUFhLEVBQUE7QUFFZDtFQUNDLHlCQUF5QjtFQUN6QixpQkFBaUIsRUFBQTtBQzVCbEI7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUNKZTtFREtmLGtCQUFrQixFQUFBO0FBTnBCO0lBU0ksV0FBVztJQUNYLHlCQ1hrQixFQUFBO0FEQ3RCO0lBY0ksV0FBVztJQUNYLHlCQ2pCa0IsRUFBQTtBQ0V0QjtFQUNFLGtCQUFrQjtFQUNsQixZRERlO0VDRWYsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7QUFJbkI7RUFDRSxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7QUNkcEI7RUFDRSxxQkFBcUI7RUFDckIsK0JBQStCO0VBQy9CLGdOQUNrRztFQUNsRyxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7QUFFcEI7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUE7QUM2RHhCO0VEMURFLGdDQUFnQztFQUNoQyx3QkFBd0I7RUFDeEIsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUNBQW1DO0VBQ25DLGtDQUFrQyxFQUFBO0FDNkRwQzs7RUR6REUsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IsK0JBQStCO0VBQy9CLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsY0FBYztFQUNkLG1DQUFtQztFQUNuQyxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTtBQzZEYjs7RUR6REUsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IsK0JBQStCO0VBQy9CLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsY0FBYztFQUNkLG1DQUFtQztFQUNuQyxrQ0FBa0M7RUFDbEMsY0FBYztFQUNkLGtCQUFrQixFQUFBO0FBRXBCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9zdHlsZXMvbWFpbi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAncmVzZXQnO1xuXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MzAwLDQwMCw3MDAmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuczo0MDAsNDAwaSZkaXNwbGF5PXN3YXAnKTtcblxuQGltcG9ydCAnZWxlbWVudHMvYnV0dG9uJztcbkBpbXBvcnQgJ2VsZW1lbnRzL2Zvcm1zJztcbkBpbXBvcnQgJ2VsZW1lbnRzL2ljb25zJztcbiIsIioge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0Zm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICBmb250LWZhbWlseTogTGF0bztcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG5cdGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsIHVsIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsIHEge1xuXHRxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcblx0Y29udGVudDogJyc7XG5cdGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdGJvcmRlci1zcGFjaW5nOiAwO1xufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuLmJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjM4O1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogJGZvcm1IZWlnaHQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAmLmRlZmF1bHQge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRuZXV0cmFsQ29sb3I7XG4gIH1cblxuICAmLnByaW1hcnkge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5Q29sb3I7XG4gIH1cbn1cbiIsIiRwcmltYXJ5Q29sb3I6ICNlZjNhNWQ7XG4kbmV1dHJhbENvbG9yOiAjN2Y4MTg1O1xuXG4kZm9ybUhlaWdodDogNDBweDtcbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbmlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6ICRmb3JtSGVpZ2h0O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDEuMzg7XG59XG5cblxubGFiZWwge1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbiIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogZGgtaWNvbnM7XG4gIHNyYzogdXJsKFwiL2ZvbnRzL2RoLWljb25zLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCIvZm9udHMvZGgtaWNvbnMuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiL2ZvbnRzL2RoLWljb25zLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSxcbiAgICB1cmwoXCIvZm9udHMvZGgtaWNvbnMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLCB1cmwoXCIvZm9udHMvZGgtaWNvbnMuc3ZnI2RoLWljb25zXCIpIGZvcm1hdChcInN2Z1wiKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLmljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5bZGF0YS1pY29uXTpiZWZvcmUge1xuICBmb250LWZhbWlseTogZGgtaWNvbnMgIWltcG9ydGFudDtcbiAgY29udGVudDogYXR0cihkYXRhLWljb24pO1xuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuW2NsYXNzKj1cIiBpY29uLVwiXTpiZWZvcmUsXG5bY2xhc3NePVwiaWNvbi1cIl06YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IGRoLWljb25zICFpbXBvcnRhbnQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAycHg7XG59XG5bY2xhc3MqPVwiIGljb24tXCJdOmFmdGVyLFxuW2NsYXNzXj1cImljb24tXCJdOmFmdGVyIHtcbiAgZm9udC1mYW1pbHk6IGRoLWljb25zICFpbXBvcnRhbnQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIGNvbnRlbnQ6IFwiXFw2MVwiO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uaWNvbi0yNGg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDYxXCI7XG59XG4uaWNvbi1hbWJ1bGFuY2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDYyXCI7XG59XG4uaWNvbi1hcnJvdzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNjNcIjtcbn1cbi5pY29uLWF2YWlsYWJpbGl0eTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNjRcIjtcbn1cbi5pY29uLWJhY2s6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDY1XCI7XG59XG4uaWNvbi1iZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDY2XCI7XG59XG4uaWNvbi1ibG9nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw2N1wiO1xufVxuLmljb24tY2FsZW5kYXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDY4XCI7XG59XG4uaWNvbi1jYW1lcmE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDY5XCI7XG59XG4uaWNvbi1jYXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDZhXCI7XG59XG4uaWNvbi1jaGFuZ2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDZiXCI7XG59XG4uaWNvbi1jbG9zZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNmNcIjtcbn1cbi5pY29uLWNvdW50cnktaG91c2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDZkXCI7XG59XG4uaWNvbi1kb2dzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw2ZVwiO1xufVxuLmljb24tZWRpdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNmZcIjtcbn1cbi5pY29uLWVsZGVybHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDcwXCI7XG59XG4uaWNvbi1lbXB0eS1zdGFyMXg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDMzXCI7XG59XG4uaWNvbi1leGNsdXNpdmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDczXCI7XG59XG4uaWNvbi1leGVyY2lzZS1zY2hlZHVsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNzRcIjtcbn1cbi5pY29uLWV4ZXJjaXNlczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNzVcIjtcbn1cbi5pY29uLWV4cGVyaWVuY2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDc2XCI7XG59XG4uaWNvbi1mZW5jZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNzdcIjtcbn1cbi5pY29uLWZpbHRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNzhcIjtcbn1cbi5pY29uLWZpcnN0LWFpZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNzlcIjtcbn1cbi5pY29uLWZsYXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDdhXCI7XG59XG4uaWNvbi1mdWxsLXN0YXIxeDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMzFcIjtcbn1cbi5pY29uLWdhbGxlcnk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDQyXCI7XG59XG4uaWNvbi1nZW5lcmljOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw0M1wiO1xufVxuLmljb24tZ3BzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw0NFwiO1xufVxuLmljb24taGFsZi1zdGFyMXg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDMyXCI7XG59XG4uaWNvbi1oZWFydDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNDZcIjtcbn1cbi5pY29uLWhvdXNlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw0N1wiO1xufVxuLmljb24taW5qZWN0ZWQtbWVkaWNhdGlvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNDhcIjtcbn1cbi5pY29uLWluc3RhZG9nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw0OVwiO1xufVxuLmljb24ta2lkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw0YVwiO1xufVxuLmljb24tbGFzdC1taW51dGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDRiXCI7XG59XG4uaWNvbi1sb2NhdGlvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNGNcIjtcbn1cbi5pY29uLW1hcDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNGRcIjtcbn1cbi5pY29uLW1lbnU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDRlXCI7XG59XG4uaWNvbi1tZXNzZW5nZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDRmXCI7XG59XG4uaWNvbi1tb3JlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw1MFwiO1xufVxuLmljb24tbXktbG9jYXRpb246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDUxXCI7XG59XG4uaWNvbi1uby1iZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDUyXCI7XG59XG4uaWNvbi1uby1kb2dzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw1M1wiO1xufVxuLmljb24tbm8tZWxkZXJseTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNTRcIjtcbn1cbi5pY29uLW5vLWtpZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNTVcIjtcbn1cbi5pY29uLW5vLXB1cHB5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw1NlwiO1xufVxuLmljb24tbm8tc21va2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDU3XCI7XG59XG4uaWNvbi1uby1zb2ZhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw1OFwiO1xufVxuLmljb24tb3JhbC1tZWRpY2F0aW9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw1OVwiO1xufVxuLmljb24tb3V0ZG9vci1sOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw1YVwiO1xufVxuLmljb24tb3V0ZG9vci1tOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwzMFwiO1xufVxuLmljb24tb3V0ZG9vci1zOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwzY1wiO1xufVxuLmljb24tcHJvZmlsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcM2VcIjtcbn1cbi5pY29uLXB1cHB5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwzZlwiO1xufVxuLmljb24tcmVwZWF0LWd1ZXN0czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMzRcIjtcbn1cbi5pY29uLXJlcG9ydDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMzVcIjtcbn1cbi5pY29uLXJlc2VydmF0aW9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwzNlwiO1xufVxuLmljb24tcmVzcG9uZC1yYXRlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwzN1wiO1xufVxuLmljb24tcmVzcG9uZC10aW1lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwzOFwiO1xufVxuLmljb24tc2Nob29sOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwzOVwiO1xufVxuLmljb24tc2VhcmNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwyMVwiO1xufVxuLmljb24tc2hhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDIyXCI7XG59XG4uaWNvbi1zbW9rZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMjNcIjtcbn1cbi5pY29uLXNvZmE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDI0XCI7XG59XG4uaWNvbi1zcGVjaWFsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwyNVwiO1xufVxuLmljb24td2luZG93LXByb3RlY3RlZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMjZcIjtcbn1cbi5pY29uLXlvdW5nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw3MVwiO1xufVxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzozMDAsNDAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDQwMGkmZGlzcGxheT1zd2FwXCIpO1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cblxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMTsgfVxuXG5vbCwgdWwge1xuICBsaXN0LXN0eWxlOiBub25lOyB9XG5cbmJsb2NrcXVvdGUsIHEge1xuICBxdW90ZXM6IG5vbmU7IH1cblxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBjb250ZW50OiBub25lOyB9XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7IH1cblxuLmJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjM4O1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4OyB9XG4gIC5idXR0b24uZGVmYXVsdCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdmODE4NTsgfVxuICAuYnV0dG9uLnByaW1hcnkge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjNhNWQ7IH1cblxuaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjM4OyB9XG5cbmxhYmVsIHtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7IH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBkaC1pY29ucztcbiAgc3JjOiB1cmwoXCIvZm9udHMvZGgtaWNvbnMuZW90XCIpO1xuICBzcmM6IHVybChcIi9mb250cy9kaC1pY29ucy5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIvZm9udHMvZGgtaWNvbnMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIvZm9udHMvZGgtaWNvbnMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLCB1cmwoXCIvZm9udHMvZGgtaWNvbnMuc3ZnI2RoLWljb25zXCIpIGZvcm1hdChcInN2Z1wiKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XG5cbi5pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG5cbltkYXRhLWljb25dOmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBkaC1pY29ucyAhaW1wb3J0YW50O1xuICBjb250ZW50OiBhdHRyKGRhdGEtaWNvbik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7IH1cblxuW2NsYXNzKj1cIiBpY29uLVwiXTpiZWZvcmUsXG5bY2xhc3NePVwiaWNvbi1cIl06YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IGRoLWljb25zICFpbXBvcnRhbnQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAycHg7IH1cblxuW2NsYXNzKj1cIiBpY29uLVwiXTphZnRlcixcbltjbGFzc149XCJpY29uLVwiXTphZnRlciB7XG4gIGZvbnQtZmFtaWx5OiBkaC1pY29ucyAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBjb250ZW50OiBcIlxcNjFcIjtcbiAgY29sb3I6IHRyYW5zcGFyZW50OyB9XG5cbi5pY29uLTI0aDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNjFcIjsgfVxuXG4uaWNvbi1hbWJ1bGFuY2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDYyXCI7IH1cblxuLmljb24tYXJyb3c6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDYzXCI7IH1cblxuLmljb24tYXZhaWxhYmlsaXR5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw2NFwiOyB9XG5cbi5pY29uLWJhY2s6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDY1XCI7IH1cblxuLmljb24tYmVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw2NlwiOyB9XG5cbi5pY29uLWJsb2c6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDY3XCI7IH1cblxuLmljb24tY2FsZW5kYXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDY4XCI7IH1cblxuLmljb24tY2FtZXJhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw2OVwiOyB9XG5cbi5pY29uLWNhdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNmFcIjsgfVxuXG4uaWNvbi1jaGFuZ2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDZiXCI7IH1cblxuLmljb24tY2xvc2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDZjXCI7IH1cblxuLmljb24tY291bnRyeS1ob3VzZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNmRcIjsgfVxuXG4uaWNvbi1kb2dzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw2ZVwiOyB9XG5cbi5pY29uLWVkaXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDZmXCI7IH1cblxuLmljb24tZWxkZXJseTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNzBcIjsgfVxuXG4uaWNvbi1lbXB0eS1zdGFyMXg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDMzXCI7IH1cblxuLmljb24tZXhjbHVzaXZlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw3M1wiOyB9XG5cbi5pY29uLWV4ZXJjaXNlLXNjaGVkdWxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw3NFwiOyB9XG5cbi5pY29uLWV4ZXJjaXNlczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNzVcIjsgfVxuXG4uaWNvbi1leHBlcmllbmNlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw3NlwiOyB9XG5cbi5pY29uLWZlbmNlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw3N1wiOyB9XG5cbi5pY29uLWZpbHRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNzhcIjsgfVxuXG4uaWNvbi1maXJzdC1haWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDc5XCI7IH1cblxuLmljb24tZmxhdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcN2FcIjsgfVxuXG4uaWNvbi1mdWxsLXN0YXIxeDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMzFcIjsgfVxuXG4uaWNvbi1nYWxsZXJ5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw0MlwiOyB9XG5cbi5pY29uLWdlbmVyaWM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDQzXCI7IH1cblxuLmljb24tZ3BzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw0NFwiOyB9XG5cbi5pY29uLWhhbGYtc3RhcjF4OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwzMlwiOyB9XG5cbi5pY29uLWhlYXJ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw0NlwiOyB9XG5cbi5pY29uLWhvdXNlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw0N1wiOyB9XG5cbi5pY29uLWluamVjdGVkLW1lZGljYXRpb246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDQ4XCI7IH1cblxuLmljb24taW5zdGFkb2c6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDQ5XCI7IH1cblxuLmljb24ta2lkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw0YVwiOyB9XG5cbi5pY29uLWxhc3QtbWludXRlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw0YlwiOyB9XG5cbi5pY29uLWxvY2F0aW9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw0Y1wiOyB9XG5cbi5pY29uLW1hcDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNGRcIjsgfVxuXG4uaWNvbi1tZW51OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw0ZVwiOyB9XG5cbi5pY29uLW1lc3NlbmdlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNGZcIjsgfVxuXG4uaWNvbi1tb3JlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw1MFwiOyB9XG5cbi5pY29uLW15LWxvY2F0aW9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw1MVwiOyB9XG5cbi5pY29uLW5vLWJlZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNTJcIjsgfVxuXG4uaWNvbi1uby1kb2dzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw1M1wiOyB9XG5cbi5pY29uLW5vLWVsZGVybHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDU0XCI7IH1cblxuLmljb24tbm8ta2lkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw1NVwiOyB9XG5cbi5pY29uLW5vLXB1cHB5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw1NlwiOyB9XG5cbi5pY29uLW5vLXNtb2tlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw1N1wiOyB9XG5cbi5pY29uLW5vLXNvZmE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDU4XCI7IH1cblxuLmljb24tb3JhbC1tZWRpY2F0aW9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw1OVwiOyB9XG5cbi5pY29uLW91dGRvb3ItbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNWFcIjsgfVxuXG4uaWNvbi1vdXRkb29yLW06YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDMwXCI7IH1cblxuLmljb24tb3V0ZG9vci1zOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwzY1wiOyB9XG5cbi5pY29uLXByb2ZpbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDNlXCI7IH1cblxuLmljb24tcHVwcHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDNmXCI7IH1cblxuLmljb24tcmVwZWF0LWd1ZXN0czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMzRcIjsgfVxuXG4uaWNvbi1yZXBvcnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDM1XCI7IH1cblxuLmljb24tcmVzZXJ2YXRpb246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDM2XCI7IH1cblxuLmljb24tcmVzcG9uZC1yYXRlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwzN1wiOyB9XG5cbi5pY29uLXJlc3BvbmQtdGltZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMzhcIjsgfVxuXG4uaWNvbi1zY2hvb2w6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDM5XCI7IH1cblxuLmljb24tc2VhcmNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwyMVwiOyB9XG5cbi5pY29uLXNoYXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwyMlwiOyB9XG5cbi5pY29uLXNtb2tlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwyM1wiOyB9XG5cbi5pY29uLXNvZmE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDI0XCI7IH1cblxuLmljb24tc3BlY2lhbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMjVcIjsgfVxuXG4uaWNvbi13aW5kb3ctcHJvdGVjdGVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwyNlwiOyB9XG5cbi5pY29uLXlvdW5nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw3MVwiOyB9XG4iXX0= */", '', '']]

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