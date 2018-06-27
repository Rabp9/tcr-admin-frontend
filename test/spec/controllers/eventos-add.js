'use strict';

describe('Controller: EventosAddCtrl', function () {

  // load the controller's module
  beforeEach(module('tcrAdminFrontendApp'));

  var EventosAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventosAddCtrl = $controller('EventosAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EventosAddCtrl.awesomeThings.length).toBe(3);
  });
});
