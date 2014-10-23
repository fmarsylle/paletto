'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {
    var p = new Plateau();
    assertTrue(p.is_juxtaposed());
};