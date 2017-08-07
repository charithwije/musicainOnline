var gulp = require('gulp'), sass = require('gulp-sass');

const SASS_FILE_SOURCES = ['src/app/**/*.scss'];

gulp.task('default', function() {
  // place code for your default task here
  	return gulp.src(SASS_FILE_SOURCES)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('src/app'));
});