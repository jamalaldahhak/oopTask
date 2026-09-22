"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("../abstract/Shape");
const Shape_2 = require("../interfaces/Shape");
class Rectangle extends Shape_1.Shape {
    width;
    height;
    position;
    constructor(width, height, x = 0, y = 0) {
        if (width <= 0 || height <= 0)
            throw new Error("الأبعاد يجب أن تكون أكبر من الصفر.");
        super("Rectangle");
        this.width = width;
        this.height = height;
        this.position = { x, y };
    }
    getWidth() { return this.width; }
    getHeight() { return this.height; }
    getPosition() { return { ...this.position }; }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
    scale(factor) {
        if (factor <= 0)
            throw new Error("معامل التكبير يجب أن يكون أكبر من الصفر.");
        this.width *= factor;
        this.height *= factor;
    }
    isSquare() {
        return this.width === this.height;
    }
    getDiagonal() {
        return Math.hypot(this.width, this.height);
    }
    getAspectRatio() {
        return this.width / this.height;
    }
    getBoundingBox() {
        return {
            x: this.position.x,
            y: this.position.y,
            width: this.width,
            height: this.height
        };
    }
    rotate(degrees) {
        if (degrees % 180 !== 0) {
            const temp = this.width;
            this.width = this.height;
            this.height = temp;
        }
    }
}
exports.Rectangle = Rectangle;
//# sourceMappingURL=Rectangle.js.map