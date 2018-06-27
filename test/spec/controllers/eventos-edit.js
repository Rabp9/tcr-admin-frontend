'use strict';

describe('Controller: EventosEditCtrl', function () {

  // load the controller's module
  beforeEach(module('tcrAdminFrontendApp'));

  var EventosEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventosEditCtrl = $controller('EventosEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EventosEditCtrl.awesomeThings.length).toBe(3);
  });
});
