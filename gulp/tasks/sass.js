var buildDestination = './build';
var reload = require('browser-sync').reload;
gulp.task('sass', function () {
    gulp.src('./app/styles/main.scss')
        .pipe($.sass())
        .pipe(gulp.dest(buildDestination))
        .pipe(reload({stream:true}));
});