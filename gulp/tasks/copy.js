var htmlSource = './app/*.html';
var htmlDestination = './build/';

gulp.task('copy.html', function() {
   return gulp.src(htmlSource)
       .pipe(gulp.dest(htmlDestination));
});