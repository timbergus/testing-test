var glob = require('glob');

require('babel-core/register')({
    presets: ['es2015', 'stage-2']
});

glob(__dirname + '/src/**/_test_', function (err, files) {
    files.map(function (file) {
        require(file);
    });
});
