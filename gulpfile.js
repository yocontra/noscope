var gulp = require('gulp');

var lr = require('gulp-livereload');
var jshint = require('gulp-jshint');

var source = require('vinyl-source-stream');
var browserify = require('browserify');
var openit = require('open');

var paths = {
  main: './index.js',
  tests: './test/**/*.js',
  lib: './lib/**/*.js'
};
paths.js = [paths.main, paths.tests, paths.lib];

gulp.task('lint', function(){
  return gulp.src(paths.js)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

var bundler = browserify(paths.main);

gulp.task('compile', function(){
  return bundler.bundle({standalone: 'noscope'})
    .pipe(source('noscope.js'))
    .pipe(gulp.dest('./dist'))
    .pipe(lr());
});

gulp.task('test-server', ['compile'], function(cb){
  var port = process.env.PORT || 9090;
  var server = require('./test/runner/server.js');
  server.listen(port, function(){
    openit('http://localhost:'+port);
    cb();
  });
});

gulp.task('watch', function(){
  gulp.watch(paths.js, ['lint']);
  gulp.watch([paths.main, paths.lib], ['compile']);
  gulp.watch(paths.tests, function(e){
    lr().changed(e.path);
  });
});

gulp.task('default', ['test-server', 'watch']);
