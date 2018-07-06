'use strict';

/**
 * @ngdoc service
 * @name tcrAdminFrontendApp.usersService
 * @description
 * # usersService
 * Factory in the tcrAdminFrontendApp.
 */
angular.module('tcrAdminFrontendApp')
.factory('usersService', function ($resource, envService) {
    return $resource(envService.getHost() + 'users/:id.json', {}, {
        getPersonas: {
            method: 'GET',
            url: envService.getHost() + 'users/getPersonas/.json'
        },
        login: {
            method: 'POST',
            url: envService.getHost() + 'users/token/.json',
        },
        getAdmin: {
            method: 'GET',
            url: envService.getHost() + 'users/getAdmin/.json',
        }
    });
});