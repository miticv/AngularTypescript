module.exports = function () {
    var angularAppName = 'app';
    var client = './src/client/';
    var tsfolder = './src/client/ts/';
    var server = './src/server/';
    var report = './report/';
    var clientApp = 'app/';
    var temp = './temp/';
    var root = './';
    var bowerComponents = 'bower_components/';
    var wiredep = require('wiredep');
    var bowerFiles = wiredep({devDependencies: true})['js'];

    var config = {
        /**
        * file paths
        */
        alljs: [// for js-lint
            './src/**/*.js',
            './*.js',
            '!' + bowerComponents + '/**/*.*'
        ],
        allTs: [
            './typings/**/*.ts',
            tsfolder + '**/*.ts',
            '!' + tsfolder + 'typescriptApp.d.ts'
        ],
        tsfolder: tsfolder,
        appTypeScriptReferences: tsfolder + 'typescriptApp.d.ts',
        typings: './typings',
        tsOutputPath : './src/client/app/scripts',
        libraryTs: './tools/typings/**/*.ts',
        temp: temp,
        build: './build/',
        client: client,
        css: temp + 'styles.css',
        fonts: bowerComponents + 'font-awesome/fonts/**/*.*',
        htmltemplates: client + '/ts/**/*.html',
        images: client + 'images/**/*.*',
        index: client + 'index.html',
        js: [
            // here we specify order of the js files to be included in the html
            client + clientApp + '/scripts/App.js',
            client + clientApp + '/scripts/blocks/**/*.module.js',
            client + clientApp + '/scripts/blocks/**/*.js',
            client + clientApp + '/scripts/core/**/*.module.js',
            client + clientApp + '/scripts/core/**/*.js',
            client + clientApp + '/**/*.module.js',
            client + clientApp + '**/*.js'
        ],
        less: [client + 'less/styles.less'],
        server: server,
        report: report,
        root: root,
        styles: temp,
        /***
         * optimized files
         */
        optimized: {
            app: 'app.js',
            lib: 'lib.js'
        },

        /***
         * template cache
         */
        templateCache: {
            file: 'templates.js',
            options: {
                module: angularAppName,
                standAlone: false,
                root: ''
            }
        },

        /**
        *  Bower and NPM locations
        */
        bower: {
            json: require('./bower.json'),
            directory: bowerComponents,
            ignorePath: '../..'
        },
        packages: [
            './package.json',
            './bower.json'
        ],
        /***
         * Node Settings
         */
        defaultPort: 1337,
        nodeServer: './src/server/server.js'
    };

    config.getInjectOptions = function () {
        var options = {
            //ignorePath: '/src/client/'
        };

        return options;
    };

    config.getWiredepDefaultOptions = function () {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
            //,
            //exclude:  [ 'min.js']
        };
        return options;
    };

    return config;



};



