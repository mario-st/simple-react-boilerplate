var gulp       = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var react      = require('gulp-react');
var babel      = require('gulp-babel');
var plumber    = require("gulp-plumber");
var concat     = require("gulp-concat");
var watch      = require("gulp-watch");
var rename     = require('gulp-rename');
var uglify     = require('gulp-uglify');

var browserify = require('gulp-browserify');
var babelify   = require('babelify');

var path             = require('path');
var karma            = require('karma');
var karmaParseConfig = require('karma/lib/config').parseConfig;

function runKarma (configFilePath, options, cb) {

    configFilePath = path.resolve(configFilePath);

    var server = karma.server;
    var config = karmaParseConfig(configFilePath, {});

    Object.keys(options).forEach(function (key) {
        config[ key ] = options[ key ];
    });

    server.start(config, function (exitCode) {
        console.log('Karma has exited with ' + exitCode);
        cb();
        process.exit(exitCode);
    });
}

gulp.task("dist", function () {
    return gulp.src("src/app.jsx")
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(browserify({
            transform : [ babelify ],
            extensions: [ ".js", ".json", ".jsx" ]
        }))
        .pipe(rename("app.js"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("dist"));
});

gulp.task("dev", function () {
    return gulp.src("src/**/*.jsx")
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("lib"));
});

gulp.task("test", function (cb) {
    runKarma("karma.conf.js", {
        autoWatch: false,
        singleRun: true
    }, cb);
});

gulp.task("watch-dev", function () {
    return gulp.src("src/**/*.jsx")
        .pipe(plumber())
        .pipe(watch("src/**/*.jsx", { verbose: true }))
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("lib"));
});

gulp.task("watch-test", function (cb) {
    runKarma("karma.conf.js", {
        autoWatch: true,
        singleRun: false
    }, cb);
});