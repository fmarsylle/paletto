
var BLACK_PIECE = 0;
var GREEN_PIECE = 1;
var WHITE_PIECE = 2;
var BLUE_PIECE = 3;
var YELLOW_PIECE = 4;
var RED_PIECE = 5;
var EMPTY_PIECE = null;

var Plateau = function () {
    "use strict";

    this.plateau = [];
    this.selected_color=null;
    this.joueur_actif = 1;
    this.p1_piece= [];
    this.p2_piece= [];



    this.init = function () {
       this.plateau[0] = [];

       this.plateau[0][0] = BLACK_PIECE;
        this.plateau[0][1] = GREEN_PIECE;
        this.plateau[0][2] = WHITE_PIECE;
        this.plateau[0][3] = BLUE_PIECE;
        this.plateau[0][4] = RED_PIECE;
        this.plateau[0][5] = WHITE_PIECE;

        this.plateau[1] = [];

        this.plateau[1][0] = YELLOW_PIECE;
        this.plateau[1][1] = WHITE_PIECE;
        this.plateau[1][2] = GREEN_PIECE;
        this.plateau[1][3] = RED_PIECE;
        this.plateau[1][4] = YELLOW_PIECE;
        this.plateau[1][5] = BLUE_PIECE;

        this.plateau[2] = [];

        this.plateau[2][0] = BLUE_PIECE;
        this.plateau[2][1] = YELLOW_PIECE;
        this.plateau[2][2] = BLUE_PIECE;
        this.plateau[2][3] = WHITE_PIECE;
        this.plateau[2][4] = BLACK_PIECE;
        this.plateau[2][5] =RED_PIECE;

        this.plateau[3] = [];

        this.plateau[3][0] = RED_PIECE;
        this.plateau[3][1] = BLACK_PIECE;
        this.plateau[3][2] = RED_PIECE;
        this.plateau[3][3] = GREEN_PIECE;
        this.plateau[3][4] = BLUE_PIECE;
        this.plateau[3][5] = WHITE_PIECE;

        this.plateau[4] = [];

        this.plateau[4][0] = WHITE_PIECE;
        this.plateau[4][1] = GREEN_PIECE;
        this.plateau[4][2] = YELLOW_PIECE;
        this.plateau[4][3] = BLACK_PIECE;
        this.plateau[4][4] = YELLOW_PIECE;
        this.plateau[4][5] = GREEN_PIECE;

        this.plateau[5] = [];

        this.plateau[5][0] = YELLOW_PIECE;
        this.plateau[5][1] = BLUE_PIECE;
        this.plateau[5][2] = BLACK_PIECE;
        this.plateau[5][3] = RED_PIECE;
        this.plateau[5][4] = GREEN_PIECE;
        this.plateau[5][5] = BLACK_PIECE;
    };


    this.is_juxtaposed = function () {
        var row = 0, col = 0, ok = 1;
        while (row < 6 && ok === 1) {
            col = 0;
            while (col < 6 && ok === 1) {
                ok = this.check_neighbors(row, col);
                col++;
            }
            row++;
        }
        return (ok === 1) ? true : false;
    };

    this.check_neighbors = function (row, col) {
        var color = this.plateau[row][col];
        if (col > 0) {

            if ( this.plateau[row][col - 1] === color) {
                return 0;
            }
        }
        if (col < 5) {
            if (this.plateau[row][col + 1] === color) {
                return 0;
            }
        }
        if (row > 0) {
            if (this.plateau[row - 1][col] === color) {
                return 0;
            }
        }
        if (row < 5) {
            if (this.plateau[row + 1][col] === color) {
                return 0;
            }
        }

        return 1;
    };


    this.countPiece = function(){

        var row = 0, col = 0, nb_piece=0;
        while (row < 6 ) {
            col = 0;
            while (col < 6) {
                if(this.plateau[row][col] != null){
                    nb_piece++;
                }
                col++;
            }
            row++;
        }
        return nb_piece;

    }

    this.get_selected_color = function (){

            return this.selected_color;

    };

    this.get_case = function(row, col) {

        return this.plateau[row][col];
    }

    this.select_case = function(row, col) {
        this.selected_color = this.plateau[row][col];
        this.plateau[row][col]=null;
        if(this.joueur_actif===1){

            this.p1_piece.push(this.selected_color);
        }
        else if(this.joueur_actif===2){

            this.p2_piece.push(this.selected_color);
        }
        else if(this.joueur_actif==3){

            this.p3_piece.push(this.selected_color);
        }
        else if(this.joueur_actif==4){

            this.p4_piece.push(this.selected_color);
        }

    };


    this.change_player=function(){

        if(this.joueur_actif === 1) {
            this.joueur_actif = 2;
        }else{

            this.joueur_actif = 1;
        }

    };


    this.gagne= function(player){

        if(player === 1) {

            var nb_black=0;
            for(var i=0;i<this.p1_piece.length;i++){
                if(this.p1_piece[i] === BLACK_PIECE){
                    nb_black++;

                }

            }
            if(nb_black===6){
                return true;
            }


        }

        return false;

    };

        this.init();


  /*  this.first_init = function () {
        var row, col;
        for (row = 0; row < 6; row++) {
            this.plateau[row] = [];
            for (col = 0; col < 6; col++) {
                this.plateau[row][col] = BLACK_PIECE;
            }
        }
    }

    this.init = function () {
        var row, col;
        for (row = 0; row < 6; row++) {
            for (col = 0; col < 6; col++) {
                this.plateau[row][col] = this.get_alea_color();
            }
        }
    };

    this.is_max_color = function (color) {
        var count = 0, row, col;
        for (row = 0; row < 6; row++) {
            for (col = 0; col < 6; col++) {
                count = this.increments_count(color, row, col, count);
            }
        }
        return (count === 6);
    };

    this.get_alea_color = function () {
        var color;
        while (true) {
            color = Math.floor((Math.random() * 5));
            if (!this.is_max_color(color)) {
                return color;
            }
        }
    };

    this.increments_count = function (color, row, col, count) {
        if (this.plateau[row][col] === color) {
            return count++;
        }
        return count;
    };

    this.build_alea = function () {
        this.first_init();
        var i = 0;
        while (i == 0) {
            console.log(this.plateau);
            if (this.is_juxtaposed()) {
                i=1;
            }
            this.init();
        }
    };

    this.build_alea();*/

};