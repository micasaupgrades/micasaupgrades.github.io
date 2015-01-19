'use strict';

/**
 * @ngdoc function
 * @name micasaupgradesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the micasaupgradesApp
 */
angular.module('micasaupgradesApp')
    .controller('MainCtrl', function($scope) {
        //console.log("Main Controller reporting for duty.");
        analytics.page({
            title: 'Home',
            url: 'http://www.micasaupgrades.com',
            path: '/'
        });
    });
