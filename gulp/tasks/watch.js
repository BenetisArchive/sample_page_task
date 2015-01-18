gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('./app/*.html', ['copy.html']);
    gulp.watch('./app/styles/**/*.scss', ['sass']);
    gulp.watch('./app/scripts/**/*.js', ['concat']);
    gulp.watch('./bower_components/**/*.js', ['concat_vendor']);
    gulp.watch('./app/assets/sprites/**', ['sprites']);
});