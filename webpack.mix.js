const mix = require('laravel-mix');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Sage application. By default, we are compiling the Sass file
 | for your application, as well as bundling up your JS files.
 |
 */

mix.setPublicPath('./dist').browserSync({server: '.', proxy: null});

mix.sass('resources/styles/main.scss', 'styles').options({
  processCssUrls: false,
});

mix.js('resources/scripts/main.js', 'scripts');

mix.copyDirectory('resources/images', 'dist/images');
mix.copyDirectory('resources/favicons', 'dist/favicons');

let productionSourceMaps = false;
mix.sourceMaps(productionSourceMaps, 'source-map').version();
