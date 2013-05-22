(function(e){if("function"==typeof bootstrap)bootstrap("dom",e);else if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeDom=e}else"undefined"!=typeof window?window.dom=e():global.dom=e()})(function(){var define,ses,bootstrap,module,exports;
return (function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0](function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
/**
 * dom
 *
 * @description Simple performant dom helpers
 * @author Matt Andrews <matt@mattandre.ws>
 */

function elementsByTag(search, el) {
  return el.getElementsByTagName(search);
}

function elementByTag(search, el) {
  var els = elementsByTag(search, el);
  if (els.length > 0) return els[0];
}

function elementsByClass(search, el) {
  return el.getElementsByClassName(search);
}

function elementByClass(search, el) {
  var els = elementsByClass(search, el);
  if (els.length > 0) return els[0];
}

module.exports = {
  elementsByTag: elementsByTag,
  elementByTag: elementByTag,
  elementsByClass: elementsByClass,
  elementByClass: elementByClass
};

},{}]},{},[1])(1)
});
;