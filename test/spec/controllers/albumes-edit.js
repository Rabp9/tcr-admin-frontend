'use strict';

describe('Controller: AlbumesEditCtrl', function () {

  // load the controller's module
  beforeEach(module('tcrAdminFrontendApp'));

  var AlbumesEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AlbumesEditCtrl = $controller('AlbumesEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AlbumesEditCtrl.awesomeThings.length).toBe(3);
  });
});
