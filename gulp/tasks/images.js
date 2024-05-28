const images = () => {
  return app.gulp
    .src(app.paths.src.images, { encoding: false })
    .pipe(
      app.plugins.plumber({
        errorHandler: app.plugins.notify.onError({
          title: 'IMAGES',
          message: 'Error: <%= error.message %>',
        }),
      })
    )
    .pipe(app.plugins.newer(app.paths.build.images))
    .pipe(
      app.plugins.gulpIf(
        !app.isProd,
        app.plugins.imagemin({
          optimizationLevel: 5,
          progressive: true,
          interlaced: true,
        })
      )
    )
    .pipe(app.plugins.flatten())
    .pipe(app.gulp.dest(app.paths.build.images));
};

export { images };
