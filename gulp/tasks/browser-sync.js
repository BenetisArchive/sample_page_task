var browserSync = require('browser-sync');
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./build"
        },
        open: false
    });
});