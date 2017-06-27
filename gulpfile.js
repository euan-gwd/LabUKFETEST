var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pkg = require('./package.json');

// Copy vendor files from /node_modules into /vendor
// NOTE: requires `npm install` before running!
gulp.task('copy', function() {
    gulp.src(['node_modules/bootstrap/dist/**/*', '!**/npm.js', '!**/bootstrap-theme.*', '!**/*.map'])
        .pipe(gulp.dest('vendor/bootstrap'))
    gulp.src(['node_modules/font-awesome/fonts/**/*'])
        .pipe(gulp.dest('vendor/fonts'))
    gulp.src(['node_modules/font-awesome/css/**/*'])
        .pipe(gulp.dest('vendor/font-awesome'))
    gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('vendor/jquery'))
    gulp.src(['node_modules/tether/dist/js/*.js'])
        .pipe(gulp.dest('vendor/tether'))
})

// Default task
gulp.task('default', ['copy']);

// Configure the browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: ''
        },
								ui: false
    })
})

// Dev task with browserSync
gulp.task('dev', ['browserSync'], function() {
    // Reloads the browser whenever HTML or CSS or JS files change
    gulp.watch('css/*.css', browserSync.reload);
				gulp.watch('js/*.js', browserSync.reload);
    gulp.watch('*.html', browserSync.reload);
});
