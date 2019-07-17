class Chair {
    material!: string;
    _color!: string;
    _length!: number;
    _width!: number;
    _height!: number;

    get color():string {
        return this.color;
    }
    set color(col) {
        if ((col != "Black") && (col !="White") && (col !="Red") && (col !="Green") && (col !="Blue")) {
            throw "Color error";
        }

        this._color = col;
    }


    get length() {
        return this._length;
    }
    set length(len) {
        if (len < 0) {
            throw "Length error";
        }

        this._length = len;
    }


    get width() {
        return this._length;
    }
    set width(wth) {
        if (wth < 0) {
            throw "width error";
        }

        this._width = wth;
    }

    get height() {
        return this._height;
    }
    set height(ht) {
        if (ht < 0) {
            throw "height error";
        }

        this._height = ht;
    }
    constructor(material: string, color: string, _length: number, _width: number, _height: number) {
        this.color = color;
        this.length = _length;
        this.width = _width;
        this.height = _height;

    }

    volume() {
        return this.height * this.width * this.length;
    }
    details() {
        
        return JSON.stringify(this) + "" + this.volume();

    }
}

let chair1 = new Chair("metal", "Blue", 4, 4, 4);
let chair2 = new Chair("metal", "Red", 4, 4, 4);

console.log(chair1.volume());
console.log(chair1.details());
console.log(chair2.volume());
console.log(chair2.details()); 
