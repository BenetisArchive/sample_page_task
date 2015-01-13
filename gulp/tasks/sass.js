var buildDestination = './build';
var reload = require('browser-sync').reload;
var notify = require("gulp-notify");
gulp.task('sass', function () {
    gulp.src('./app/styles/main.scss')
        .pipe($.sass())
        .on('error', handleErrors)
        .pipe(gulp.dest(buildDestination))
        .pipe(reload({stream:true}));
});

function handleErrors(errorType) {
    var args = Array.prototype.slice.call(arguments);
    notify.onError({
        title: "SASS compiler error",
        message: "<%= error.message %>"
    }).apply(this, args);
    this.emit('end');
}
