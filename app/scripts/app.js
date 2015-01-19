'use strict';

/**
 * @ngdoc overview
 * @name micasaupgradesApp
 * @description
 * # micasaupgradesApp
 *
 * Main module of the application.
 */
var app = angular
    .module('micasaupgradesApp', [
        'ngRoute',
        'ngTouch',
        'parse-angular',
        'ajoslin.promise-tracker',
        'duScroll'

    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl'
            })
            .when('/signin', {
                templateUrl: 'views/signin.html',
                controller: 'SigninCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            });
    });

app.run(function($rootScope, $location, $anchorScroll, $routeParams) {
    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
        $location.hash($routeParams.scrollTo);
        $anchorScroll();
    });
})


app.directive('parsleyValidateInput', function($timeout) {
    return {
        link: function(scope, element, attrs) {
            element.on('remove', function() {
                return element.closest('form').parsley('removeItem', "#" + attrs.id);
            });
            return $timeout(function() {
                if (!attrs.id) {
                    attrs.id = "input_" + (_.uniqueId());
                    element.attr('id', attrs.id);
                }
                return element.closest('form').parsley('addItem', "#" + attrs.id);
            });
        }
    };
});

//fix issue of the navbar not collapsing
$(document).on('click', '.navbar-collapse.in', function(e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }
});
