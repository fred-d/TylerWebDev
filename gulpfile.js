var elixir = require('laravel-elixir');

elixir.config.js.browserify.transformers = [{
    name: 'babelify',

    // https://www.npmjs.com/package/gulp-babel#babel-options
    options: {
        stage: 0,
        compact: false,
    },
},];

elixir(function(mix) {
    mix.sass('main.scss')
        .browserify('main.js');
});