import gulp from 'gulp';
import mocha from 'gulp-mocha';

//Tarea que ejecuta todas las tareas
gulp.task('default', async () => {
    console.log("Running all tests: ");
    return gulp.series('exampleTask', 'mochaTests')();
});

gulp.task('exampleTask', (cb) => {
    console.log("Example gulp task done!");
    cb();
});

//Tarea que ejecuta los tests de mocha chai
gulp.task('mochaTests', (cb) => {
    gulp.src(['test/test-*.js'], { read: false }).pipe(mocha({
        reporter: 'spec',
    }));
    cb();
});