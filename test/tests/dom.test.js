buster.testCase('dom', {
  setUp: function() {
    document.body.insertAdjacentHTML('beforeend',
        '<div id="container1">' +
          '<div id="test" class="test" data="correct"><span></span><span></span><span></span></div>' +
          '<div id="another-test"></div>' +
        '</div>' +
        '<div id="container2">' +
          '<span class="test" data="also correct"></span><span class="test"></span>' +
        '</div>'
      );
  },

  "Should be able to find all the <div>s in the document": function() {
    assert.equals(4, dom.elementsByTag('div').length);
  },

  "Should be able to find all the <span>s within an another element": function() {
    var test = document.getElementById('test');
    assert.equals(3, dom.elementsByTag('span', test).length);
  },

  "Should be able to find all the elements of a particular class in the document": function() {
    assert.equals(3, dom.elementsByClass('test').length);
  },

  "Should be able to find all the elements of a particular class within an another element": function() {
    var container2 = document.getElementById('container2');
    assert.equals(2, dom.elementsByClass('test', container2).length);
  },

  "Should be able to find the first element of a particular class in the document": function() {
    assert.equals('correct', dom.elementByClass('test').getAttribute('data'));
  },

  "Should be able to find the first element of a particular class within another element": function() {
    var container2 = document.getElementById('container2');
    assert.equals('also correct', dom.elementByClass('test', container2).getAttribute('data'));
  },

  "Should be able to find the first element of a particular tag in the document": function() {
    assert.equals('container1', dom.elementByTag('div').getAttribute('id'));
  },

  "Should be able to find the first element of a particular tag within another element": function() {
    var container2 = document.getElementById('container2');
    assert.equals('also correct', dom.elementByTag('span', container2).getAttribute('data'));
  },

  tearDown: function() {
    var container1 = document.getElementById('container1');
    var container2 = document.getElementById('container2');

    container1.parentNode.removeChild(container1);
    container2.parentNode.removeChild(container2);
  }
});