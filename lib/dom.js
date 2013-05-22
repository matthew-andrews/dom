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
