var buildDestination = './build';
var reload = require('browser-sync').reload;
var notify = require("gulp-notify");
var sourcemaps = require('gulp-sourcemaps');
var minifyCSS = require('gulp-minify-css');
var lazypipe = require('lazypipe');

var sassSource = './app/styles/main.scss';

var sassTransform = lazypipe()
    .pipe(sourcemaps.init)
    .pipe($.sass)
    .pipe($.autoprefixer, {
        browsers: ['last 2 versions', 'IE 8'],
        cascade: false
    })
    .pipe(sourcemaps.write);

var sassOutputAndReload = lazypipe()
    .pipe(gulp.dest, buildDestination)
    .pipe(reload,{stream:true});

gulp.task('sass.vendor', function() {
    gulp.src([
        './app/styles/main.scss',
        './bower_components/dropit/dropit.css'
    ])
        .pipe(sassTransform())
            .on('error', handleErrors)
        .pipe(minifyCSS())
        .pipe($.concat('main.css'))
        .pipe(sassOutputAndReload())
});

gulp.task('sass', function () {
    gulp.src(sassSource)
        .pipe(sassTransform())
            .on('error', handleErrors)
        .pipe(sassOutputAndReload())
});

function handleErrors(errorType) {
    var args = Array.prototype.slice.call(arguments);
    notify.onError({
        title: "SASS compiler error",
        message: "<%= error.message %>"
    }).apply(this, args);
    this.emit('end');
}
