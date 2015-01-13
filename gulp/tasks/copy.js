var htmlSource = './app/*.html';
var htmlDestination = './build/';
var reload = require('browser-sync').reload;
gulp.task('copy.html', function() {
   return gulp.src(htmlSource)
       .pipe(gulp.dest(htmlDestination))
       .pipe(reload({stream:true}));
});
