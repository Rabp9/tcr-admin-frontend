'use strict';

describe('Controller: EmailsEditCtrl', function () {

  // load the controller's module
  beforeEach(module('tcrAdminFrontendApp'));

  var EmailsEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EmailsEditCtrl = $controller('EmailsEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EmailsEditCtrl.awesomeThings.length).toBe(3);
  });
});
