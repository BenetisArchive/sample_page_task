var htmlSource = './app/*.html';
var buildDestination = './build/';
var reload = require('browser-sync').reload;

var htmlOutputAndReload = lazypipe()
    .pipe(gulp.dest, buildDestination)
    .pipe(reload, {stream:true});

gulp.task('copy.html', function() {
   return gulp.src(htmlSource)
       .pipe(htmlOutputAndReload())
});

gulp.task('copy.html.prod', function() {
    return gulp.src(htmlSource)
        .pipe(minifyHTML())
        .pipe(htmlOutputAndReload())
});

