/**
 * The Gruntfile containing the tasks.
 *
 * @author Orgun109uk <orgun109uk@gmail.com>
 */

'use strict';

/*jshint camelcase: false */
/*eslint-disable camelcase*/

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /**
         * Provides the jsHint task options.
         */
        jshint: {
            files: ['Gruntfile.js', 'index.js', 'lib/*.js', 'tests/*.js'],
            options: {
                reporter: require('jshint-stylish'),
                jshintrc: './.jshintrc'
            }
        },

        /**
         * Provides the esLint task options.
         */
        eslint: {
            files: ['<%= jshint.files %>']
        }
    });

    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', ['jshint', 'eslint']);
};