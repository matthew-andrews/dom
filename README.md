# dom

Simple performant dom helpers with no dependencies.  Compiles and minifies down to < 2kb.

## elementsByTag(tag, el)

Returns a node list of the elements within **el** who's tag matches specified **tag**.

## elementByTag(tag, el)

Returns the first element within **el** who's tag matches specified **tag**, undefined if there is none.

## elementsByClass(class, el)

Returns a node list of the elements within **el** who have a class matching specified **class**.

## elementByClass(class, el)

Returns the first element within **el** who have a class matching specified **class**, undefined if there is none.

## elementById(id)

Simply wraps document.getElementById.
