buster.testCase('fruitmachine.define()', {
  setUp: function() {
    document.body.insertAdjacentHTML('beforeend',
        '<div id="container1">' +
          '<div id="test" class="test"><span></span><span></span><span></span></div>' +
          '<div id="another-test"></div>' +
        '</div>' +
        '<div id="container2">' +
        '</div>'
      );
  },

  "Should be able to find all the <div>s in the document": function() {
    assert.equals(4, dom.elementsByTag('div').length);
  },

  "Should be able to find all the <span>s within an another element": function() {
    var test = document.getElementById('test');
    assert.equals(3, dom.elementsByTag('span').length);
  },

  tearDown: function() {
    var container1 = document.getElementById('container1');
    var container2 = document.getElementById('container2');

    container1.parentNode.removeChild(container1);
    container2.parentNode.removeChild(container2);
  }
});