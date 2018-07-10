'use strict';

/**
 * @ngdoc function
 * @name tcrAdminFrontendApp.controller:UsersLoginCtrl
 * @description
 * # UsersLoginCtrl
 * Controller of the tcrAdminFrontendApp
 */
angular.module('tcrAdminFrontendApp')
.controller('UsersLoginCtrl', function ($scope, usersService, $cookies, $location, 
    $rootScope, $utilsViewService) {
    
    $scope.loginUser = function(user, boton) {
        $('#' + boton).text('Login...');
        $utilsViewService.disable('#' + boton);
        console.log(user);
        usersService.login(user, function(data) {
            if (!data.user) {
                $scope.message = data.message;
            } else {
                $cookies.putObject('tcr-user', data.user);
                $cookies.put('tcr-token', data.token);
                $rootScope.user = data.user;
                $('#wrapper').removeClass('inLogin');
                $location.path('/');
            }
        }, function(error) {
            $scope.message = error.data;
        });
    };
    
});