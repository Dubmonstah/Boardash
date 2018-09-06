module.exports = function(grunt) {
    const sass = require('node-sass');

    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'css/index.css': 'sass/index.scss'
                },
            },
        },
        watch: {
            scripts: {
                files: ['sass/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            },
        },
        cssmin : {
            target : {
                src : 'css/index.css',
                dest : 'css/index.min.css',

            },
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/index.css',
                        'index.html',
                    ]
                },
                options: {
                    watchTask: true,
                    server: './',
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default', ['sass', 'browserSync', 'cssmin', 'watch']);

};
