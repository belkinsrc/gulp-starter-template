import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import gulpIf from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';

const sass = gulpSass(dartSass);

const plumberOptions = {
  errorHandler: notify.onError({
    title: 'CSS',
    message: 'Error: <%= error.message %>',
  }),
};

const styles = () => {
  return app.gulp
    .src(app.paths.src.styles)
    .pipe(plumber(plumberOptions))
    .pipe(gulpIf(!app.isProd, sourcemaps.init()))
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false,
      grid: true,
      overrideBrowserslist: ["last 5 versions"]
    }))
    .pipe(gulpIf(app.isProd, cleanCSS({
      level: 2
    })))
    .pipe(gulpIf(!app.isProd, sourcemaps.write('.')))
    .pipe(app.gulp.dest(app.paths.build.styles))
    .pipe(browserSync.stream());
};

export { styles };
