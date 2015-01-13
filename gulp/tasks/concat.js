var scriptSource = './app/scripts/**/*.js';
var buildDestination = './build';
var reload = require('browser-sync').reload;
var lazypipe = require('lazypipe');

var outputDataAndReload = lazypipe()
    .pipe(gulp.dest, buildDestination)
    .pipe(reload, {stream:true});

gulp.task('concat', function() {
    return gulp.src(scriptSource)
        .pipe($.concat('app.js'))
        .pipe(outputDataAndReload())
});

gulp.task('concat.prod', function() {
    return gulp.src(scriptSource)
        .pipe($.concat('app.js'))
        .pipe($.uglify())
        .pipe(outputDataAndReload())
});