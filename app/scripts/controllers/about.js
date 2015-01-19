'use strict';

/**
 * @ngdoc function
 * @name micasaupgradesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the micasaupgradesApp
 */
angular.module('micasaupgradesApp')
    .controller('AboutCtrl', function($scope) {
        console.log("About Controller reporting for duty.");
        analytics.page({
            title: 'About',
            url: 'http://www.micasaupgrades.com/#about',
            path: '/#about'
        });
    });
