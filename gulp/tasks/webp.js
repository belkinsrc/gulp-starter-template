import webp from 'gulp-webp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import newer from 'gulp-newer';
import flatten from 'gulp-flatten';

const plumberOptions = {
  errorHandler: notify.onError({
    title: 'WEBP',
    message: 'Error: <%= error.message %>',
  }),
};

const webpImages = () => {
  return app.gulp
    .src(app.paths.src.images, { encoding: false })
    .pipe(plumber(plumberOptions))
    .pipe(newer(app.paths.build.images))
    .pipe(webp())
    .pipe(flatten())
    .pipe(app.gulp.dest(app.paths.build.images));
};

export { webpImages };