const { src, dest, series, parallel } = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const {deleteAsync} = require('del');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

const sourceFile = './app/js/app.js';
const destFolder = './dist/';
const destFile = 'LT.js';
const vinylDestination = './dist/js/';
// Browserify JS without preprocessing
function browserifyTask() {
  return browserify({ entries: [sourceFile], debug: true })
    .transform('babelify', {
      presets: ['@babel/preset-env'],
      sourceMaps: true,
      global: true,      
      ignore: [/\/core-js\//] // optional: skip known polyfills
    })
    .bundle()
    .pipe(source(destFile))
    .pipe(dest(vinylDestination));
}

function cssTask() {
  return src('app/css/**/*.css')
    .pipe(concat('bundle.css'))
    .pipe(cleanCSS()) // optional, remove if you want unminified
    .pipe(dest(destFolder + 'css/'));
}


// Copy static files
function copyTask() {
    src(['app/*', '!app/*.html']).pipe(dest(destFolder));
    src('app/*.html').pipe(dest(destFolder));
    src('app/js/**/*', { encoding: false }).pipe(dest(destFolder + 'js/'));
    src('app/css/**/*', { encoding: false }).pipe(dest(destFolder + 'css/'));
    src('app/img/**/*', { encoding: false }).pipe(dest(destFolder + 'img/'));
    src('app/favicon.ico', { encoding: false }).pipe(dest(destFolder));
    return src('app/audio/**/*', { encoding: false }).pipe(dest(destFolder + 'audio/'));
}

// Clean dist folder
function cleanTask() {
    return deleteAsync([destFolder + '/**/*']);
}

// Export tasks
exports.clean = cleanTask;
exports.browserify = browserifyTask;
exports.copy = copyTask;

exports.css = cssTask;

exports.default = series(
  cleanTask,
  parallel(copyTask, browserifyTask, cssTask)
);
