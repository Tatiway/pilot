var gulp = require('gulp'),
		server = require('gulp-server-livereload'),
		sass = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		uglify = require('gulp-uglify'),
		concat = require('gulp-concat'),
		rename = require('gulp-rename');

//webserver
gulp.task('webserver', function(){
	gulp.src('app')
	.pipe(server({
		livereload:true,
		directoryListing:false,
		defaultFile:'index.html',
		open:true
	}));
});


// project js
gulp.task('compress', function() {
  return gulp.src('javascript/*.js')
  	.pipe(rename({suffix: '.min', prefix : '_'}))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'));
});

//project sass - css
gulp.task('styles',function () {
  gulp.src('sass/*.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({suffix: '.min', prefix : '_'}))
		.pipe(autoprefixer({
		browsers: ['last 15 versions'],
		cascade: false
	}))
	.pipe(gulp.dest('app/css'));
});

gulp.task('watch', function() {
	gulp.watch('sass/*.sass', ['styles']);
	gulp.watch('javascript/*.js', ['compress']);

});

gulp.task('default', ['styles','compress','watch', 'webserver'], function() {

});




