/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const gulp = require('gulp');
const babel = require('gulp-babel');
const flatten = require('gulp-flatten');
const del = require('del');

/**
 * Remove previous build
 */
gulp.task('clean', () => {
  return del(['dist']);
});

/**
 * Compile JavaScript assets
 * 1. Compiles JS with babel
 * 2. Flattens structure to allow base-imports
 *    `import Bar from 'foo/Bar';`
 * 3. Fix relative imports between components
 */
gulp.task('js', () => {
  return gulp
    .src(['./src/**/*.js', '!src/**/*.spec.js'])
    .pipe(
      babel({
        babelrc: false,
        plugins: ['inline-react-svg', 'transform-object-assign', 'babel-plugin-styled-components'],
        presets: ['es2015', 'react', 'stage-0'],
        resolveModuleSource: source => {
          const isRelativeImport = source.charAt(0) === '.';

          if (!isRelativeImport) {
            return source;
          }

          const paths = source.split('/');
          const basePath = paths[paths.length - 1];

          return `./${basePath}`;
        }
      })
    )
    .pipe(flatten())
    .pipe(gulp.dest('dist'));
});

/**
 * Copy package.json and other NPM related assets to enable "flat-pack" module imports
 */
gulp.task('copy', () => {
  return gulp
    .src(['package.json', 'README.md', 'CHANGELOG.md', 'index.d.ts', '../../LICENSE.md'], {
      allowEmpty: true
    })
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', gulp.series('clean', 'js', 'copy'));
