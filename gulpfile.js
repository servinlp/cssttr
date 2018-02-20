const gulp = require( 'gulp' ),
	postcss = require( 'gulp-postcss' ),
	sass = require( 'gulp-sass' ),
	scsslint = require( 'gulp-scss-lint' ),
	sourcemaps = require( 'gulp-sourcemaps' ),
	autoprefixer = require( 'autoprefixer' ),
	browserSync = require( 'browser-sync' ).create()

gulp.task( 'serveMe', [ 'css' ], () => {

	browserSync.init( {
		server: {
		    baseDir: './'
		},
		open: false
	} )

	gulp.watch( [ './scss/*.scss', './scss/**/*.scss' ], [ 'cssLint', 'css' ] )
	gulp.watch( '*.html' ).on( 'change', browserSync.reload )

})

gulp.task( 'cssLint', () => {

	return gulp.src( [ './scss/*.scss', './scss/**/*.scss' ] )
		.pipe( scsslint( {
			config: 'scsslint.yml'
		} ) )

} )

gulp.task( 'css', () => {

    return gulp.src( './scss/*.scss' )
		.pipe( sourcemaps.init() )
		.pipe( sass().on( 'error', sass.logError ) )
		.pipe( sourcemaps.write('.') )
        .pipe(gulp.dest( './' ) )
		.pipe( browserSync.stream() )

} )

gulp.task( 'watch:css', () => {

	gulp.watch( [ './scss/*.scss', './scss/**/*.scss' ], [ 'cssLint', 'css' ] )

} )

gulp.task( 'default', [ 'cssLint', 'css' ] )
gulp.task( 'watch', [ 'watch:css' ] )
gulp.task( 'serve', [ 'serveMe' ] )