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
                controller: 'SignInCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            });
    });

app.controller('ModalCtrl', function($scope) {
    console.log("Modal Controller reporting for duty.");
    $scope.showModal = false;
    $scope.toggleModal = function() {
        console.log("Toggle Modal");
        $scope.showModal = !$scope.showModal;
    };
});

app.directive('modal', function() {
    console.log("modal directive loaded");
    return {
        template: '<div class="modal fade">' +
            '<div class="modal-dialog">' +
            '<div class="modal-content">' +
            '<div class="modal-header">' +
            '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
            '<h4 class="modal-title">{{ title }}</h4>' +
            '</div>' +
            '<div class="modal-body" ng-transclude></div>' +
            '</div>' +
            '</div>' +
            '</div>',
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: true,
        link: function postLink(scope, element, attrs) {
            scope.title = attrs.title;

            scope.$watch(attrs.visible, function(value) {
                if (value == true)
                    $(element).modal('show');
                else
                    $(element).modal('hide');
            });

            $(element).on('shown.bs.modal', function() {
                scope.$apply(function() {
                    scope.$parent[attrs.visible] = true;
                });
            });

            $(element).on('hidden.bs.modal', function() {
                scope.$apply(function() {
                    scope.$parent[attrs.visible] = false;
                });
            });
        }
    };
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
