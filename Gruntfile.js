// var path = require('path');
// var merge = require('merge');
//
// module.exports = function(grunt) {
//   // Load all grunt tasks we have installed:
//   require("matchdep").filterAll("grunt-*").forEach(grunt.loadNpmTasks);
//
//   grunt.initConfig({
//     clean: ["tmp/assets/css"],
//     cssmin: {
//       // Minify CSS using cssmin. CSS @imports are inlined this way (whereas the Sass task only inlines imported .sass files)
//       dist: {
//         files: [{
//           expand: true,
//           cwd: 'tmp/assets/css',
//           src: ['*.css'],
//           dest: '_site/assets/css',
//           ext: '.css'
//         }]
//       }
//     },
//     notify: {
//       cssmin: {
//         options:{
//           title: "CSS Files built",
//           message: "CSSMin task complete"
//         }
//       }
//     },
//     sass: {
//       // Compile Sass files to a tmp directory where the minifier will pick it up from there.
//       dist: {
//         options: {
//           style: 'nested',
//           update: true
//         },
//         files: [{
//           expand: true,
//           cwd: 'assets/css',
//           src: ['*.scss'],
//           dest: 'tmp/assets/css',
//           ext: '.css'
//         }]
//       }
//     },
//     watch: {
//       css: {
//         // Watch for any changes that happen within the src directory:
//         files: ["assets/**/*.scss"],
//         tasks: ["css"]
//       },
//       livereload: {
//         // Here we watch the files the sass task will compile to
//         // These files are sent to the live reload server after sass compiles to them
//         options: {
//           livereload: true
//         },
//         files: ['_site/assets/**/*'],
//       }
//     }
//   });
//
//   // Default task watches for changes:
//   grunt.registerTask("default", ["watch"]);
//
//   // Builds all SASS
//   grunt.registerTask("build", ["sass", "cssmin", "clean"]);
//
//   grunt.registerTask("css", ["sass", "newer:cssmin", "notify:cssmin"]);
// };
