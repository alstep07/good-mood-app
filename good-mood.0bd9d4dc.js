parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"2iMt":[function(require,module,exports) {
module.exports={app:"_app_7852e",appTitle:"_appTitle_7852e",joke:"_joke_7852e",jokeText:"_jokeText_7852e",programming:"_programming_7852e",jokeUnderscore:"_jokeUnderscore_7852e",blink:"_blink_7852e",appButton:"_appButton_7852e",loadIcon:"_loadIcon_7852e"};
},{}],"CqN1":[function(require,module,exports) {
module.exports="load.dac4c4ce.gif";
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=o(require("./style.css")),t=o(require("./load.gif"));function o(e){return e&&e.__esModule?e:{default:e}}function n({setupShown:t,jokesShown:o,jokeText:n,jokesType:a}){return`\n    <div class="${e.default.app}">\n      <h1 class=${e.default.appTitle}>Good Mood App</h1>\n      ${u()}\n      ${r(n,a)}\n      ${d(t)}\n      ${s(o)}\n    </div>\n  `}function a(){return`\n    <img class="${e.default.loadIcon}" src="${t.default}" alt="loading">\n  `}function r(t,o){let n=t||"Click the button to get a joke!";return dataStore.isDataLoading&&(n=a()),dataStore.error&&(n=dataStore.error),c()&&(n=t),`\n    <div class="${e.default.joke} ${"programming"===o&&e.default.programming}">\n      <p class="${e.default.jokeText}">${n}<span class="${e.default.jokeUnderscore}">&nbsp;</span>\n      </p>\n    </div>`}function d(t){return t?`<button class="${e.default.appButton}" onclick=showPunchLine()>Punchline</button>`:`<button class="${e.default.appButton}" onclick=showRandomJoke()>Get a joke</button>`}function s(e){return`<p>Already read jokes: ${e}</p>`}function u(){return`\n    <p>Choose jokes category:</p>\n    ${["general","programming"].map(e=>`<label>\n            <input\n            id='${e}'\n            type='radio'\n            name='jokes-type'\n            onchange='(${l})(this.id);'\n            ${dataStore.jokesType===e?"checked":""}>\n            ${e}\n          </label>\n        `).join("")}\n  `}async function i(e){const t=p(e);try{const e=await fetch(t);return await e.json()}catch(o){dataStore.error=o}}function c(){return dataStore.jokeText&&dataStore.currentJoke.punchline!==dataStore.jokeText}function p(e){return`https://official-joke-api.appspot.com/jokes/${e}/random`}function l(e){dataStore.jokesType=e}async function k(){let e;for(dataStore.isDataLoading=!0;!e||dataStore.shownIds.includes(e.id);)S(),[e]=await i(dataStore.jokesType);dataStore.shownIds=[...dataStore.shownIds,e.id],dataStore.currentJoke=e,dataStore.jokeText=dataStore.currentJoke.setup,dataStore.setupShown=!0,dataStore.jokesShown++,dataStore.isDataLoading=!1,S()}function h(){dataStore.jokeText=dataStore.currentJoke.punchline,dataStore.setupShown=!1,S()}function S(){document.getElementById("app-root").innerHTML=`\n    ${n(dataStore)}\n  `}module.hot&&module.hot.accept(),window.dataStore={setupShown:!1,currentJoke:"",jokeText:"",jokesShown:0,jokesType:"general",shownIds:[],error:null,isDataLoading:!1},window.renderApp=S,window.showPunchLine=h,window.showRandomJoke=k,window.changeJokesType=l,document.getElementById("app-root").innerHTML=n(dataStore);
},{"./style.css":"2iMt","./load.gif":"CqN1"}]},{},["Focm"], null)
//# sourceMappingURL=good-mood.0bd9d4dc.js.map