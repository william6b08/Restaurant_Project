(()=>{"use strict";var e,t={991:(e,t,n)=>{n.d(t,{Z:()=>r});const o=n.p+"cc296375eefdb4f8966f.jpg",i=n.p+"e6b988e4cf8cfaaf2882.jpg",r=function(){const e=[{dishName:"Filet Milgnon",description:"Filet mignon is a tender and expensive cut of beef. It is considered the king of steaks because of its melt-in-your-mouth texture. ",imgSource:i},{dishName:"Beef Wellington",description:"Beef Wellington is a dish consisting of a whole filet of beef that is coated with a pâté and duxelles, a combination of minced mushrooms, herbs, and shallots.",imgSource:o}],t=document.createElement("div");t.classList.add("Menu-container");for(const n of e){const e=document.createElement("div");e.classList.add("menuItem");const o=document.createElement("h1");o.textContent=n.dishName;const i=document.createElement("p");i.textContent=n.description;const r=new Image;r.src=n.imgSource,e.appendChild(r),e.appendChild(o),e.appendChild(i),t.appendChild(e)}document.getElementById("main-content").appendChild(t)}}},n={};function o(e){var i=n[e];if(void 0!==i)return i.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),e=o(991),document.getElementById("Menu").onclick=e.Z})();