/*
 * Generated on 2014-04-16
 * generator-assemble v0.4.11
 * https://github.com/assemble/generator-assemble
 *
 * Copyright (c) 2014 Hariadi Hinta
 * Licensed under the MIT license.
 */

'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'

module.exports = function(grunt) {

  require('time-grunt')(grunt);
  // require('load-grunt-tasks')(grunt);
  require('load-grunt-tasks')(grunt, {pattern: ['grunt-*', 'assemble']});

  // Project configuration.
  grunt.initConfig({

    config: {
      src: 'src',
      dist: 'dist'
    },

    watch: {
      sass: {
        files: ['<%= config.src %>/assets/{,*/}*.scss'],
        tasks: ['sass']
      },
      assemble: {
        files: ['<%= config.src %>/{content,data,templates}/{,*/}*.{md,hbs,yml}'],
        tasks: ['assemble']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.dist %>/{,*/}*.html',
          '<%= config.dist %>/assets/{,*/}*.css',
          '<%= config.dist %>/assets/{,*/}*.js',
          '<%= config.dist %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= config.dist %>'
          ]
        }
      }
    },

    assemble: {
      pages: {
        options: {
          flatten: true,
          assets: '<%= config.dist %>/assets',
          layout: '<%= config.src %>/templates/layouts/default.hbs',
          data: '<%= config.src %>/data/*.{json,yml}',
          partials: '<%= config.src %>/templates/partials/*.hbs'
        },
        files: {
          '<%= config.dist %>/': ['<%= config.src %>/templates/pages/*.hbs']
        }
      }
    },

    sass: {
      // options: {                      // dictionary of render options
      //     includePaths: [
      //         '<%= config.src %>/assets/sass/'
      //     ]
      // },
      beast: {
        files: {
            'dist/assets/css/3wpproto.css': 'src/assets/sass/3wpproto.scss'
        }
      }
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: [
      '<%= config.dist %>/assets/css/3wpproto.css',
      '<%= config.dist %>/**/*.{html,xml}',
    ]

  });

  // grunt.loadNpmTasks('assemble');
  // grunt.loadNpmTasks('grunt-contrib-clean');
  // grunt.loadNpmTasks('grunt-contrib-connect');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-sass');


  grunt.registerTask('server', [
    'clean',
    'sass',
    'assemble',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    'sass',
    'assemble'
  ]);

  grunt.registerTask('default', [
    'server'
  ]);

};
