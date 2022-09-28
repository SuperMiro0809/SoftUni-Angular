var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        this.melonSort = melonSort;
        this.weight = weight;
        this._elementIndex = this.weight * this.melonSort.length;
    }
    Object.defineProperty(Melon.prototype, "elementIndex", {
        get: function () {
            return this._elementIndex;
        },
        enumerable: false,
        configurable: true
    });
    return Melon;
}());
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Watermelon.prototype.toString = function () {
        return "Element: Water\nSort: " + this.melonSort + "\nElement Index: " + this._elementIndex;
    };
    return Watermelon;
}(Melon));
var Firemelon = /** @class */ (function (_super) {
    __extends(Firemelon, _super);
    function Firemelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Firemelon.prototype.toString = function () {
        return "Element: Fire\nSort: " + this.melonSort + "\nElement Index: " + this._elementIndex;
    };
    return Firemelon;
}(Melon));
var Earthmelon = /** @class */ (function (_super) {
    __extends(Earthmelon, _super);
    function Earthmelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Earthmelon.prototype.toString = function () {
        return "Element: Earth\nSort: " + this.melonSort + "\nElement Index: " + this._elementIndex;
    };
    return Earthmelon;
}(Melon));
var Airmelon = /** @class */ (function (_super) {
    __extends(Airmelon, _super);
    function Airmelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Airmelon.prototype.toString = function () {
        return "Element: Air\nSort: " + this.melonSort + "\nElement Index: " + this._elementIndex;
    };
    return Airmelon;
}(Melon));
var Melolemonmelon = /** @class */ (function (_super) {
    __extends(Melolemonmelon, _super);
    function Melolemonmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = 'Water';
        return _this;
    }
    Melolemonmelon.prototype.toString = function () {
        return "Element: " + this.element + "\nSort: " + this.melonSort + "\nElement Index: " + this._elementIndex;
    };
    Melolemonmelon.prototype.morph = function () {
        this.element = this.change(this.element);
    };
    Melolemonmelon.prototype.change = function (type) {
        var obj = {
            'Water': 'Fire',
            'Fire': 'Earth',
            'Earth': 'Air',
            'Air': 'Water'
        };
        return obj[type];
    };
    return Melolemonmelon;
}(Watermelon));
var watermelon = new Melolemonmelon(12.5, "Kingsize");
console.log(watermelon.toString());
watermelon.morph();
console.log(watermelon.toString());
watermelon.morph();
console.log(watermelon.toString());
watermelon.morph();
console.log(watermelon.toString());
watermelon.morph();
console.log(watermelon.toString());
