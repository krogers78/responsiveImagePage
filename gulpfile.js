const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()

gulp.task('scss', () => {
        gulp.src('./scss/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('./css'))
            .pipe(browserSync.reload({
              stream:true
            }))
})

gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  })
})
gulp.task('default', ['browser-sync', 'scss'], () => {
  gulp.watch('./scss/**/*.scss', ['scss'])
})
