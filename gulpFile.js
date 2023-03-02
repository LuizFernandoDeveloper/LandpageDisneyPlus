const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))

function styles(){
    console.log("Função Styles");
    return  gulp.src('./src/styles/*.scss')
            .pipe(sass({ outputStyle:'compressed'}))
            .pipe(gulp.dest('./dist/css'));
}

exports.default = styles;

exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
}