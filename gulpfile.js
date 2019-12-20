var gulp = require('gulp');
var gzip = require('gulp-gzip');

gulp.task('compress', function() {
  return gulp.src(['./dist/browser/**/*.*'])
      .pipe(gzip())
      .pipe(gulp.dest('./dist/browser'));
});