'use strict';

angular.module('micasaupgradesApp')
    .controller('ContactCtrl', function($scope, $http, $log, $timeout, promiseTracker) {

        analytics.page({
            title: 'Contact',
            url: 'http://www.micasaupgrades.com',
            path: '/#contact'
        });

        $scope.progress = promiseTracker('prog');
        // Form submit handler.
        $scope.submit = function(form) {

            // Trigger validation flag.
            $scope.submitted = true;


            // If form is invalid, return and let AngularJS show validation errors.
            if (form.$invalid) {
                return;
            }
            
            $scope.hideform = true; 
            
            // Default values for the request.
            var data = {

                'name': $scope.name,
                'email': $scope.email,
                'company': $scope.company,
                'phone': $scope.phone,
                'message': $scope.message
            };
            Parse.initialize('ShzuLP3tmkQKqtA1U1BBSeR4CzwtpGGunjQkrkju', '9lpKCFpx9Ih7bKrfkW2YNY9EdLmbqKkWq0dGmZl3');

            var $promise = Parse.Cloud.run('contactus', data, {
                success: function(object) {
                    $scope.name = null;
                    $scope.email = null;
                    $scope.company = null;
                    $scope.phone = null;
                    $scope.message = null;
                    $scope.messages = 'Thank you for your interest in MiCasa.  We will be in touch with you shortly.';
                    $scope.submitted = false;


                    analytics.page({
                        title: 'Contact Success',
                        url: 'http://www.micasaupgrades.com/#contact-success',
                        path: '/#contact-success',
                        referrer: 'http://www.micasaupgrades.com/#contact'
                    });

                },
                error: function(object, error) {
                    $scope.messages = 'Oops, we received your request, but there was an error processing it.';
                }
            });
            // Track the request and show its progress to the user.
            $scope.progress.addPromise($promise);
        };
    });
