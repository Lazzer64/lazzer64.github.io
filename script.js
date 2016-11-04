var app = angular.module('App', ['ngRoute']);

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

app.controller('NavCtrl', function($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    $scope.navOpen = false;

    $scope.$on('$routeChangeStart', function(event) { 
        $scope.navOpen = false;
    });

    $scope.links = {
        'home':       { location: '/',           glyph: 'glyphicon-home',      text: 'Home',       },
        'projects':   { location: '/projects',   glyph: 'glyphicon-console',   text: 'Projects',   },
        'experience': { location: '/experience', glyph: 'glyphicon-paperclip', text: 'Experience', },
        'about':      { location: '/about',      glyph: 'glyphicon-user',      text: 'About Me',   },
        'contact':    { location: '/contact',    glyph: 'glyphicon-envelope',  text: 'Contact Me', }
    };
});

app.controller('ProjectsCtrl', function($scope, $http) {
    var github_user = 'Lazzer64';
    var bbucket_user = 'a_pelavin';

    $scope.github_open = false;
    $scope.bbucket_open = false;

    $http.get('https://api.github.com/users/'+github_user+'/repos')
        .then(function(resp) {
            var repos = resp['data'];
            $scope.github_repos = repos;
        }); $http.get('https://api.bitbucket.org/2.0/repositories/'+bbucket_user)
        .then(function(resp) {
            var repos = resp['data']['values'];
            $scope.bbucket_repos = repos;
        });
});
