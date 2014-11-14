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

PalettoTestCase.prototype.testStory3 = function () {
    var p = new Plateau();
    p.select_case(5, 0);
    assertTrue(p.get_selected_color() === YELLOW_PIECE && p.get_case(5,0) === null && p.countPiece() === 35 );
};


PalettoTestCase.prototype.testStory4 = function () {
    var p = new Plateau();
    p.change_player();
    p.select_case(0, 0);
    p.select_case(5, 5);
    assertTrue( p.get_case(0,0) === null &&  p.get_case(5,5) === null );
};

PalettoTestCase.prototype.testStory5 = function () {

    assertTrue( true);
};


PalettoTestCase.prototype.testStory6 = function () {
    var p = new Plateau();
    assertTrue( p1.gagne);
};
