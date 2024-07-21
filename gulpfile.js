
var gulp = require('gulp');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');

// task to copy all htm/html files from app directory to dist directory
gulp.task('copyhtml', function() {
  return gulp.src('app/*.+(htm|html)')
	.pipe(gulp.dest('dist/'))
 });

gulp.task('copyimages', function(){
  return gulp.src('app/images/*.+(png|jpg|gif)')
  .pipe(gulp.dest('dist/images'))
});

gulp.task('copyjs', function(){
  return gulp.src('app/js/*.js')
  .pipe(gulp.dest('dist/'))
});

// function to change sass code to css
gulp.task('copycss', function() {
	return gulp.src('app/css/*.css')
		.pipe(gulp.dest('dist/'))
});

gulp.task('watch', function() {
	gulp.watch('app/*.+(htm|html)', gulp.series('copyhtml'));
  gulp.watch('app/images/*.+(png|jpg|gif)', gulp.series('copyimages'));
  gulp.watch('app/js/*.js', gulp.series('copyjs'));
  gulp.watch('app/**/*.css', gulp.series('copycss'));
});

gulp.task('default', function(callback) {
	runSequence(['sass', 'copycss', 'copyjs', 'copyhtml', 'copyimages'], callback)
});
