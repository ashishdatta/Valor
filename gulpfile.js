'use strict';
var gulp = require('gulp'),
		jshint = require('gulp-jshint'),
    mocha = require('gulp-mocha');

gulp.task('test', function () {
    gulp.src('./test/*.js').pipe(mocha({
            reporter: 'spec',
            bail: true,
            ui: 'bdd'
        }));
});

gulp.task('lint', function () {
        gulp.src(['./lib/*', './test/*', './gulpfile.js'])
            .pipe(jshint('.jshintrc'))
            .pipe(jshint.reporter('default'));
});
