"use strict";
var Chair = /** @class */ (function () {
    function Chair(material, color, _length, _width, _height) {
        this.color = color;
        this.length = _length;
        this.width = _width;
        this.height = _height;
    }
    Object.defineProperty(Chair.prototype, "color", {
        get: function () {
            return this.color;
        },
        set: function (col) {
            if ((col != "Black") && (col != "White") && (col != "Red") && (col != "Green") && (col != "Blue")) {
                throw "Color error";
            }
            this._color = col;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chair.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (len) {
            if (len < 0) {
                throw "Length error";
            }
            this._length = len;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chair.prototype, "width", {
        get: function () {
            return this._length;
        },
        set: function (wth) {
            if (wth < 0) {
                throw "width error";
            }
            this._width = wth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chair.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (ht) {
            if (ht < 0) {
                throw "height error";
            }
            this._height = ht;
        },
        enumerable: true,
        configurable: true
    });
    Chair.prototype.volume = function () {
        return this.height * this.width * this.length;
    };
    Chair.prototype.details = function () {
        return JSON.stringify(this) + "" + this.volume();
    };
    return Chair;
}());
var chair1 = new Chair("metal", "Blue", 4, 4, 4);
var chair2 = new Chair("metal", "Red", 4, 4, 4);
console.log(chair1.volume());
console.log(chair1.details());
console.log(chair2.volume());
console.log(chair2.details());
