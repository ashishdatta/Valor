var gulp = require('gulp');

gulp.task('watch', function(){
	gulp.watch('test.js');
});

gulp.task('default', ['watch']);