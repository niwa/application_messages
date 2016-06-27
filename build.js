({
    appDir: 'dist',
    baseUrl: '.',
    dir: './build',
    modules: [
        {
            name: 'am'
        }
    ],
    fileExclusionRegExp:
        /^(src|r|templates|require\-config)$/,
    optimizeCss: 'standard',
    removeCombined: false,

    paths: {
        angular: 'bower_components/angular/angular',
        angularSanitize:'bower_components/angular-sanitize/angular-sanitize',
        angularRoute: 'bower_components/angular-route/angular-route',
        angularMocks: 'bower_components/angular-mocks/angular-mocks',
        text: 'bower_components/requirejs-text/text',
        jquery:'bower_components/jquery/dist/jquery',
        bootstrap:'bower_components/bootstrap/dist/js/bootstrap',
    },

    shim: {
        'angular' : {'exports' : 'angular'},
        'angularLoader':['angular'],
        'angularRoute': ['angular'],
        'angularSanitize':['angular'],
        'angularMocks': {
            deps:['angular'],
            'exports':'angular.mock'
        },
        'bootstrap':['jquery'],
    },
    priority: [
        "angular"
    ]

})