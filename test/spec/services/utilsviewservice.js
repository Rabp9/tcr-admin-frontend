'use strict';

describe('Service: utilsviewservice', function () {

  // load the service's module
  beforeEach(module('tcrAdminFrontendApp'));

  // instantiate service
  var utilsviewservice;
  beforeEach(inject(function (_utilsviewservice_) {
    utilsviewservice = _utilsviewservice_;
  }));

  it('should do something', function () {
    expect(!!utilsviewservice).toBe(true);
  });

});
