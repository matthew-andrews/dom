/**
 * Module Dependencies
 */

var browserify = require('browserify');

/**
 * Exports
 */

module.exports = function (grunt) {

  grunt.registerTask('browserify', function() {
    var done = this.async();
    var b = browserify(__dirname + '/../lib/dom.js');
    b.bundle({ standalone: 'dom' }, function(err, string) {
      grunt.file.write('build/dom.js', string);
       grunt.log.writeln('Written build/dom.js (' + String(string.length).green + ' bytes)');
      done();
    });
  });
};
