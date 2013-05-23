/**
 * dom
 *
 * @description Simple performant dom helpers
 * @author Matt Andrews <matt@mattandre.ws>
 */

var doc = document;

function elementsByTag(search, el) {
  return (el || doc).getElementsByTagName(search);
}

function elementByTag(search, el) {
  var els = elementsByTag(search, el);
  if (els.length > 0) return els[0];
}

function elementsByClass(search, el) {
  return (el || doc).getElementsByClassName(search);
}

function elementByClass(search, el) {
  var els = elementsByClass(search, el);
  if (els.length > 0) return els[0];
}

function elementById(id) {
  return document.getElementById(id);
}

module.exports = {
  elementsByTag: elementsByTag,
  elementByTag: elementByTag,
  elementsByClass: elementsByClass,
  elementByClass: elementByClass,
  elementById: elementById
};
