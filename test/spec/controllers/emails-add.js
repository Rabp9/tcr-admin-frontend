'use strict';

describe('Controller: EmailsAddCtrl', function () {

  // load the controller's module
  beforeEach(module('tcrAdminFrontendApp'));

  var EmailsAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EmailsAddCtrl = $controller('EmailsAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EmailsAddCtrl.awesomeThings.length).toBe(3);
  });
});
