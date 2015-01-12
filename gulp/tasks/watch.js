gulp.task('watch', function() {
    gulp.watch('./app/*.html', ['copy.html']);
});