const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//     .sass('resources/sass/app.scss', 'public/css');

const mix = require('laravel-mix');

mix.js('resources/js/app.ts', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]).vue();


    mix.ts('resources/ts/app.tsx', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');