var buildDestination = './build';
var stylesDestination = './app/styles';
var runSequence = require('run-sequence');
global.$ = require('gulp-load-plugins')();
global.gulp = require('gulp');
gulp.task('sprites' ,function () {
    runSequence('generateSpriteFiles', 'sass');
});

gulp.task('generateSpriteFiles', function() {
    var spriteData = gulp.src('./app/assets/sprites/*.png').pipe($.spritesmith({
        imgName: 'sprite.png',
        cssName: '_sprite.scss'
    }));
    // Pipe image stream through image optimizer and onto disk
    spriteData.img
        .pipe($.imagemin())
        .pipe(gulp.dest(buildDestination));

    // Pipe CSS stream through CSS optimizer and onto disk
    spriteData.css
        .pipe(gulp.dest(stylesDestination));
});