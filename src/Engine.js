
var BLACK_PIECE = 0;
var GREEN_PIECE = 1;
var WHITE_PIECE = 2;
var BLUE_PIECE = 3;
var YELLOW_PIECE = 4;
var RED_PIECE = 5;

var Plateau = function () {
    "use strict";

    this.plateau = [];

    this.first_init = function () {
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

    this.is_juxtaposed = function () {
        var row = 0, col = 0, ok = 1;
        while (row < 6 && ok === 1) {
            while (col < 6 && ok === 1) {
                ok = this.check_neighbors(row, col);
                col++;
            }
            row++;
        }
        return ok;
    };

    this.check_neighbors = function (row, col) {
        var color = this.plateau[row][col];
        if (col !== 0) {

            if ( this.plateau[row][col - 1] === color) {
                return 0;
            }
        }
        if (col !== 5) {
            if (this.plateau[row][col + 1] === color) {
                return 0;
            }
        }
        if (row !== 0) {
            if (this.plateau[row - 1][col] === color) {
                return 0;
            }
        }
        if (row !== 5) {
            if ( this.plateau[row + 1][col] === color) {
                return 0;
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
        while (i < 1000) {
            console.log(this.plateau);
            this.init();
            i++;
        }
    };

    this.build_alea();
};