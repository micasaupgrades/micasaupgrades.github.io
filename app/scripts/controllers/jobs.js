'use strict';

/**
 * @ngdoc function
 * @name micasaupgradesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the micasaupgradesApp
 */
angular.module('micasaupgradesApp')
    .controller('JobsCtrl', function($scope) {
        //console.log("About Controller reporting for duty.");
        analytics.page({
            title: 'Jobs',
            url: 'http://www.micasaupgrades.com/#jobs',
            path: '/#jobs'
        });
    });
