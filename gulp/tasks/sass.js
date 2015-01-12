var stylesDestination = './build/css';
var reload = require('browser-sync').reload;
gulp.task('sass', function () {
    gulp.src('./app/styles/main.scss')
        .pipe($.sass())
        .pipe(gulp.dest(stylesDestination))
        .pipe(reload({stream:true}));
});