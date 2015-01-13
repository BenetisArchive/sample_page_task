var scriptSource = './app/scripts/**/*.js';
var buildDestination = './build';
var reload = require('browser-sync').reload;
gulp.task('concat', function() {
    return gulp.src(scriptSource)
        .pipe($.concat('app.js'))
        .pipe(gulp.dest(buildDestination))
        .pipe(reload({stream:true}));
});