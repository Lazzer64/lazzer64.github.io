var app = angular.module('App', ['ngRoute']);
app.controller('NavCtrl', function($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;

    $scope.links = {
        'home':       { location: '/',           glyph: 'glyphicon-home',      text: 'Home',       },
        'projects':   { location: '/projects',   glyph: 'glyphicon-console',   text: 'Projects',   },
        'experience': { location: '/experience', glyph: 'glyphicon-paperclip', text: 'Experience', },
        'about':      { location: '/about',      glyph: 'glyphicon-user',      text: 'About Me',   },
        'contact':    { location: '/contact',    glyph: 'glyphicon-envelope',  text: 'Contact Me', }
    };
});

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html'
        })
        .when('/projects', {
            templateUrl: 'views/projects.html'
        })
        .when('/experience', {
            templateUrl: 'views/experience.html'
        })
        .when('/about', {
            templateUrl: 'views/about.html'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html'
        })
        .otherwise( {
            templateUrl: 'views/error.html'
        });
});
