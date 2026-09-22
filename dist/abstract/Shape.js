"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
const Shape_1 = require("../interfaces/Shape");
class Shape {
    static totalShapes = 0;
    id;
    name;
    constructor(name) {
        Shape.totalShapes++;
        this.id = `SHAPE_${Shape.totalShapes}_${Math.random().toString(36).substring(2, 9)}`;
        this.name = name;
    }
    getDescription() {
        return `${this.name} [ID: ${this.id}] - المساحة: ${this.getArea().toFixed(2)}, المحيط: ${this.getPerimeter().toFixed(2)}`;
    }
    compareTo(other) {
        const areaDiff = this.getArea() - other.getArea();
        if (areaDiff > 0)
            return 1;
        if (areaDiff < 0)
            return -1;
        return 0;
    }
    equals(other) {
        return this.getArea() === other.getArea() && this.getPerimeter() === other.getPerimeter();
    }
    static getTotalShapes() {
        return Shape.totalShapes;
    }
}
exports.Shape = Shape;
//# sourceMappingURL=Shape.js.map