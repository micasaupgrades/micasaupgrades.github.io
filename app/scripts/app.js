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
        'ui.router',
        'ngTouch',
        'parse-angular',
        'ajoslin.promise-tracker',
        'duScroll'

    ])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/#');

        $stateProvider
            .state('#', {
                templateUrl: 'views/main.html',
                url: '/',
                controller: 'MainCtrl'
            })
            .state('jobs', {
                templateUrl: 'views/jobs.html',
                url: '/jobs',
                controller: 'JobsCtrl'
            })
            .state('sales-associate', {
                templateUrl: 'views/sales-associate.html',
                url: '/jobs/sales-associate'
            })
            .state('success-member', {
                templateUrl: 'views/success-member.html',
                url: '/jobs/success-member'
            })
            .state('full-stack-engineer', {
                templateUrl: 'views/full-stack-engineer.html',
                url: '/jobs/full-stack-engineer'
            })
            .state('contact', {
                templateUrl: 'views/contact.html',
                url: '/contact',
                controller: 'ContactCtrl'
            })
            .state('signin', {
                templateUrl: 'views/signin.html',
                url: '/signin',
                controller: 'SigninCtrl'
            })
            .state('about', {
                templateUrl: 'views/about.html',
                url: '/about',
                controller: 'AboutCtrl'
            });
    });

angular.module('micasaupgradesApp').run(["$rootScope", "$anchorScroll" , function ($rootScope, $anchorScroll) {
    $rootScope.$on("$locationChangeSuccess", function() {
                $anchorScroll();
    });
}]);

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
