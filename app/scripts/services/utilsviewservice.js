'use strict';

/**
 * @ngdoc service
 * @name tcrAdminFrontendApp.utilsviewservice
 * @description
 * # utilsviewservice
 * Factory in the tcrAdminFrontendApp.
 */
angular.module('tcrAdminFrontendApp')
.factory('$utilsViewService', function () {
    return {
        enable: function(id) {
            $(id).removeClass('disabled');
            $(id).prop('disabled', false);
        },
        disable: function(id) {
            $(id).addClass('disabled');
            $(id).prop('disabled', true);
        }
    };
});