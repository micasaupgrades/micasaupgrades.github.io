'use strict';

/**
 * @ngdoc function
 * @name micasaupgradesApp.controller:SignInCtrl
 * @description
 * # SignInCtrl
 * Controller of the micasaupgradesApp
 */
angular.module('micasaupgradesApp')
    .controller('SigninCtrl', function($scope) {
        //console.log("Signin Controller reporting for duty.");
        analytics.page({
            title: 'Sign In',
            url: 'http://www.micasaupgrades.com',
            path: '/#signin'
        });
    });
