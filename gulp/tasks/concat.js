var scriptSource = './app/scripts/**/*.js';
var buildDestination = './build';
gulp.task('concat', function() {
    return gulp.src(scriptSource)
        .pipe($.concat('app.js'))
        .pipe(gulp.dest(buildDestination));
});