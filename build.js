({
    appDir: 'app',
    baseUrl: '.',
    dir: './build',
    modules: [
        {
            name: 'app'
        }
    ],
    fileExclusionRegExp:
        /^(src|r|templates|require\-config)$/,
    optimizeCss: 'standard',
    removeCombined: false,
    compile: {
        options: {
            paths: {
                'highcharts': 'empty:',
            }
        }
    },
    paths: {
        angular: 'bower_components/angular/angular',
        angularSanitize:'bower_components/angular-sanitize/angular-sanitize',
        angularMocks: 'bower_components/angular-mocks/angular-mocks',
        angular_jwt: 'bower_components/angular-jwt/dist/angular-jwt',
        text: 'bower_components/requirejs-text/text',
    },

    shim: {
        'angular' : {'exports' : 'angular'},
        'angularLoader':['angular'],
        'angularSanitize':['angular'],
        'angular_jwt': ['angular'],
        'angularMocks': {
            deps:['angular'],
            'exports':'angular.mock'
        },
        'momenttz':['moment'],
    },
    priority: [
        "jquery,angular"
    ],

})