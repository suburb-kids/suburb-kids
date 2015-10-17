var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    autoprefixer  = require('gulp-autoprefixer'),
    gutil         = require('gulp-util'),
    jade          = require('gulp-jade'),
    browserify    = require('browserify'),
    source        = require('vinyl-source-stream'),
    spawn         = require('child_process').spawn,
    uglify        = require('gulp-uglify'),
    minifyCss     = require('gulp-minify-css'),
    plumber       = require('gulp-plumber');

function swallowError(err) {
  console.log(err);
  this.emit('end');
};

gulp.task('scripts', function() {
  return gulp.src('assets/javascripts/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/javascripts/'));
});

gulp.task('styles', function() {
  gulp.src('./assets/stylesheets/*.sass')
    .pipe(plumber(swallowError))
    .pipe(sass({
      indentedSyntax: true,
      errLogToConsole: true
    }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./public/stylesheets/'));

  gulp.src('./assets/stylesheets/*.css')
    .pipe(gulp.dest('./public/stylesheets/'));
});

gulp.task('jade', function() {
  gulp.src('./views/index.jade')
    .pipe(plumber(swallowError))
    .pipe(jade())
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch('./assets/javascripts/**/*.*', ['scripts']);
  gulp.watch('./assets/javascripts/*.*', ['scripts']);
  gulp.watch('./assets/stylesheets/*', ['styles']);
  gulp.watch('./views/*.jade', ['jade']);
  gulp.watch('./views/**/*.jade', ['jade']);
  gulp.watch('./views/partials/*.jade', ['jade']);
});

gulp.task('default', function() {
  var process;

  function restart() {
    if (process) {
      process.kill();
    }

    process = spawn('gulp', ['tasks'], {stdio: 'inherit'});
  }

  gulp.watch('gulpfile.js', restart);
  restart();
});

gulp.task('tasks', ['styles', 'scripts', 'jade', 'watch']);
gulp.task('build', ['styles', 'scripts', 'jade']);
