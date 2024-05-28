import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import newer from 'gulp-newer';
import flatten from 'gulp-flatten';
import browserSync from 'browser-sync';
import webpackStream from 'webpack-stream';
import gulpIf from 'gulp-if';
import terser from 'gulp-terser';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';

const plugins = {
  browserSync,
  plumber,
  notify,
  newer,
  gulpIf
};

export { plugins };
