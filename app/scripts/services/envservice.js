'use strict';

/**
 * @ngdoc service
 * @name tcrAdminFrontendApp.envService
 * @description
 * # envService
 * Factory in the tcrAdminFrontendApp.
 */
angular.module('tcrAdminFrontendApp')
.factory('envService', function () {
    return {
        getHost: function() {
            switch (window.location.hostname) {
                case 'localhost':
                    return 'http://localhost:8000/tcr-backend/';
            }
        }
    };
});