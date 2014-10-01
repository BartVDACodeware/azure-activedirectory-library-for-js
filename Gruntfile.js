module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['build/'],
        jsdoc: {
            dist: {
                src: ['lib/*.js'],
                options: {
                    destination: 'doc'
                }
            }
        },
        jshint: {
            src: {
                options: {
                  jshintrc: '.jshintrc'
                },
                src: ['lib/*.js']
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        jasmine_node: {
            options: {
                forceExit: true,
                match: '.',
                matchall: false,
                extensions: 'js',
                specNameMatcher: 'spec',
                jUnit: {
                    report: true,
                    savePath: "./build/reports/jasmine/",
                    useDotNotation: true,
                    consolidate: true
                }
            },
            all: ['tests/unit/spec/']
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jasmine-node');

    // jasmine node directly js api 
    grunt.registerTask('default', ['jshint', 'jasmine_node']);
    
    // browser tests for angular modules
    grunt.registerTask('karma', ['karma']);
};