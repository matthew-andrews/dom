module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    buster: {},

    browserify: {
      build: {
        src: 'lib/index.js',
        dest: 'build/<%= pkg.name %>.js'
      },
      options: {
        standalone: '<%= pkg.name %>'
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= pkg.version %> */\n'
      },
      build: {
        files: {
          'build/<%= pkg.name %>.min.js': 'build/<%= pkg.name %>.js'
        }
      }
    },

    watch: {
      scripts: {
        files: ['lib/*.js'],
        tasks: ['browserify']
      }
    }
  });

  // Load npm tasks
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-buster');

  // Load local tasks
  grunt.loadTasks('tasks');

  // Default task.
  grunt.registerTask('default', ['browserify', 'uglify']);
};
