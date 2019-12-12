const sass = require('node-sass');

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            sass: {
              files: ['sass/*.scss'],
              files: ['sass/*/*.scss'],
              task: ['sass']
            }
        },
        sass: {
          options: {
            implementation: sass,
            sourceMap: true
          },
          dist: {
            files: {
              'css/style.css': 'sass/main.scss'
            }
          }
        }
    });
  
    // Load the plugin that provides the "uglify" task.\
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    
  
    // Default task(s)
    grunt.registerTask('default', ['watch']);

  
  };