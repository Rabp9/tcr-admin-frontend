'use strict';

/**
 * @ngdoc service
 * @name tcrAdminFrontendApp.oauthHttpInterceptor
 * @description
 * # oauthHttpInterceptor
 * Factory in the tcrAdminFrontendApp.
 */
angular.module('tcrAdminFrontendApp')
.factory('oAuthHttpInterceptor', function ($cookies) {
    return {
        request: function (config) {
            config.headers.Authorization = 'Bearer ' + $cookies.get('tcr-token');
            return config;
        }
    };
});