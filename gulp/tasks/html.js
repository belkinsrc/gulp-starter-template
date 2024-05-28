import browserSync from 'browser-sync';
import fileInclude from 'gulp-file-include';
// import ejs from 'gulp-ejs';
import htmlmin from 'gulp-htmlmin';
// import rename from 'gulp-rename';
import replace from 'gulp-replace';
import typograf from 'gulp-typograf';
import gulpIf from 'gulp-if';

const fileIncludeOptions = {
  prefix: '@',
  basepath: '@file',
};

const html = () => {
  return app.gulp.src(app.paths.src.html)
    .pipe(fileInclude(fileIncludeOptions))
    .pipe(replace(/@image\//g, 'images/'))
    .pipe(gulpIf(app.isProd, htmlmin({ collapseWhitespace: true })))
    .pipe(typograf({ locale: ['ru', 'en-US'] }))
    .pipe(app.gulp.dest(app.paths.build.html))
    .pipe(browserSync.stream());
}

export { html };