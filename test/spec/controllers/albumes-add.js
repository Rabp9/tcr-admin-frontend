'use strict';

describe('Controller: AlbumesAddCtrl', function () {

  // load the controller's module
  beforeEach(module('tcrAdminFrontendApp'));

  var AlbumesAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AlbumesAddCtrl = $controller('AlbumesAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AlbumesAddCtrl.awesomeThings.length).toBe(3);
  });
});
