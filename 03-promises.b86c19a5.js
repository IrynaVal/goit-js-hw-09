!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("iU1Pc");document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();var t=n.target.elements.delay.value,o=n.target.elements.step.value,r=n.target.elements.amount.value,a=0,l=null,u=Number(t);l=setInterval((function(){var n,t;(a+=1)>=2&&(u+=Number(o)),(n=a,t=u,new Promise((function(e,o){var r=Math.random()>.3;setTimeout((function(){r?e({position:n,delay:t}):o({position:n,delay:t})}),t)}))).then((function(n){var t=n.position,o=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),a>=r&&clearInterval(l)}),o)}))}();
//# sourceMappingURL=03-promises.b86c19a5.js.map
