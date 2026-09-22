"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("../abstract/Shape");
const Shape_2 = require("../interfaces/Shape");
class Circle extends Shape_1.Shape {
    radius;
    center;
    constructor(radius, x = 0, y = 0) {
        if (radius <= 0)
            throw new Error("نصف القطر يجب أن يكون أكبر من الصفر.");
        super("Circle");
        this.radius = radius;
        this.center = { x, y };
    }
    getRadius() { return this.radius; }
    getCenter() { return { ...this.center }; }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    getPerimeter() {
        return this.getCircumference();
    }
    scale(factor) {
        if (factor <= 0)
            throw new Error("معامل التكبير يجب أن يكون أكبر من الصفر.");
        this.radius *= factor;
    }
    getDiameter() {
        return this.radius * 2;
    }
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
    isPointInside(px, py) {
        const distance = Math.hypot(px - this.center.x, py - this.center.y);
        return distance <= this.radius;
    }
    getBoundingBox() {
        return {
            x: this.center.x - this.radius,
            y: this.center.y - this.radius,
            width: this.radius * 2,
            height: this.radius * 2
        };
    }
    rotate(degrees) {
        // التدوير لا يغير خصائص الدائرة
    }
    getPosition() {
        return { ...this.center };
    }
}
exports.Circle = Circle;
//# sourceMappingURL=Circle.js.map