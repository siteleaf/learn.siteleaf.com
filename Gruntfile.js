function js(filename){
  return 'assets/js/src/' + filename + '.js';
}

function jsArray(filenames){
  return filenames.split(',').map(function(filename){
    return js(filename.trim());
  });
}

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    /*sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/scss',
          src: ['*.scss'],
          dest: ['build/css', '_site/build/css'],
          ext: '.css'
        }]
      },
      options: {
        style: 'compressed'
      }
    },*/
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        sourceMap: true
      }
    },
    watch: {
      /*css: {
        files: 'src/scss/*.scss',
        tasks: ['sass']
      },*/
      scripts: {
        files: 'assets/js/src/**/*.js',
        tasks: ['uglify'],
        options: {
          livereload: true,
        }
      },
      site_css: {
        files: '_site/assets/css/*.css',
        options: {
          livereload: true,
        }
      }
    }
  });

  // Load the plugins:
  grunt.loadNpmTasks('grunt-contrib-sass');   // $ grunt sass
  grunt.loadNpmTasks('grunt-contrib-uglify'); // $ grunt uglify
  grunt.loadNpmTasks('grunt-contrib-watch');  // $ grunt watch

  // Default task:
  grunt.registerTask('default', ['watch']);   // $ grunt

};
