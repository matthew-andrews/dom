# dom [![Build Status](https://travis-ci.org/matthew-andrews/dom.png?branch=master)](https://travis-ci.org/matthew-andrews/dom)

Simple performant dom helpers with no dependencies.  Compiles and minifies down to < 2kb.

## elementsByTag(tag[, el])

Returns a node list of the elements within **el** who's tag matches specified **tag**.

## elementByTag(tag[, el])

Returns the first element within **el** who's tag matches specified **tag**, undefined if there is none.

## elementsByClass(class[, el])

Returns a node list of the elements within **el** who have a class matching specified **class**.

## elementByClass(class[, el])

Returns the first element within **el** who have a class matching specified **class**, undefined if there is none.

If an `el` is unspecified in any of the above functions, dom will fallback to `document`.
