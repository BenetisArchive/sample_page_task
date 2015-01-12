gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('./app/*.html', ['copy.html']);
    gulp.watch('./app/styles/**/*.scss', ['sass']);
});