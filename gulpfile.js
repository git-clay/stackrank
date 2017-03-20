var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var babel = require('gulp-babel')

gulp.task('default', function () {
  // browserify({
  //   entries: 'app/index.jsx',
  //   extensions: ['.jsx'],
  //   debug: true
  // })
  return gulp.src('react/client.js')
  .pipe(babel({
    presets: ['es2015','react']
  }))
  .pipe(gulp.dest('dist'))
});

// gulp.task('watch', ['build'], function () {
//   console.log("watching for changes...");
//   gulp.watch('app/**/*.jsx', ['build']);
// });

// gulp.task('default', ['watch']);
