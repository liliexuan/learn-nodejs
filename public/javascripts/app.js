// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,except for 'app' ones, which are in a sibling directory.
requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app',
        jQuery: 'https://cdn.jsdelivr.net/npm/jquery@3.2/dist/jquery.min.js',
        vue: 'https://cdn.jsdelivr.net/npm/vue@2.5.13/dist/vue.js',
        router: 'https://unpkg.com/vue-router@3.0.1/dist/vue-router.js',
        element: 'https://unpkg.com/element-ui@2.1.0/lib/index.js'
    }
});

// Start loading the main app file. Put all of your application logic in there.
requirejs(['app/main']);
