'use strict';

import gulp from 'gulp';
import browserify from 'browserify';
import watchify from 'watchify';
import gutil from 'gutil';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';
import webserver from 'gulp-webserver';

/*
  Faz uma build do projeto e a atualiza quando o código for alterado.
*/
gulp.task('watchify', () => {
  const customOpts = {
    entries: ['./app/main.js'],
    debug: true,
    transform: [
      'vueify',
      'babelify'
    ]
  };
  const opts = Object.assign({}, watchify.args, customOpts);
  const b = watchify(browserify(opts));

  b.on('log', gutil.log);
  b.on('update', bundle);

  bundle();

  function bundle() {
    return b.bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('build.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist'));
  }
});

/*
  Inicia um webserver na porta 8000.
*/
gulp.task('serve', () => {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('run-dev', ['watchify', 'serve']);