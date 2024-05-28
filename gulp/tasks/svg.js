import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import newer from 'gulp-newer';
import flatten from 'gulp-flatten';

const plumberOptions = {
  errorHandler: notify.onError({
    title: 'IMAGES',
    message: 'Error: <%= error.message %>',
  }),
};

const svg = () => {
  return app.gulp.src(app.paths.src.svg)
    .pipe(plumber(plumberOptions))
    .pipe(newer(app.paths.build.svg))
    .pipe(flatten())
    .pipe(app.gulp.dest(app.paths.build.svg));
};

export { svg };
