gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('./app/*.html', ['copy.html']);
    gulp.watch('./app/styles/**/*.scss', ['sass']);
    gulp.watch('./bower_components/**/*.css', ['sass.vendor']);
    gulp.watch('./app/scripts/**/*.js', ['concat']);
    gulp.watch('./bower_components/**/*.js', ['concat.vendor']);
    gulp.watch('./app/assets/sprites/**', ['sprites']);
});