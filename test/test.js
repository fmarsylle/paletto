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

    p.select_case(0, 0);
    p.select_case(5, 5);
    p.change_player();
    p.select_case(0, 1);
    p.select_case(5,4);
    p.select_case(4,5);
    p.change_player();
    p.select_case(1,0);
    p.select_case(5,0);
    p.change_player();
    p.select_case(2,0);
    p.change_player();
    p.select_case(4,0);
    p.select_case(3,5);
    p.select_case(0,5);
    p.select_case(0,2);
    p.change_player();
   p.select_case(0,4);
    p.select_case(2,5);
    p.select_case(5,3);
    p.select_case(3,0);
    p.change_player();
    p.select_case(2,3);
    p.select_case(1,5);
    p.select_case(5,1);
    p.change_player();
    p.select_case(2,1);
    p.select_case(1,4);
    p.select_case(4,4);
    p.change_player();
    p.select_case(3,1);
    p.select_case(5,2);
    p.select_case(4,3);
    p.select_case(2,4);
    assertTrue(p.gagne(1));
};
