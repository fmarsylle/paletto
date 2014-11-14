'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {
    var p = new Plateau();
    assertTrue(p.is_juxtaposed());
};

PalettoTestCase.prototype.testStory2 = function () {
   var p = new Plateau();
    p.select_case(5, 0);
    assertTrue(p.get_selected_color() === YELLOW_PIECE);
};