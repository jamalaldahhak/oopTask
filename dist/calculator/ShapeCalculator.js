"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapeCalculator = void 0;
const Shape_1 = require("../interfaces/Shape");
const ShapeUtilities_1 = require("../abstract/ShapeUtilities");
class ShapeCalculator {
    shapes = [];
    addShape(shape) {
        this.shapes.push(shape);
    }
    removeShape(id) {
        const index = this.shapes.findIndex(s => s.id === id);
        if (index !== -1) {
            this.shapes.splice(index, 1);
            return true;
        }
        return false;
    }
    getShape(id) {
        return this.shapes.find(s => s.id === id);
    }
    updateShape(id, updates) {
        const shape = this.getShape(id);
        if (!shape)
            return false;
        Object.assign(shape, updates);
        return true;
    }
    addMultipleShapes(shapes) {
        this.shapes.push(...shapes);
    }
    clearAll() {
        this.shapes = [];
    }
    findShapes(predicate) {
        return this.shapes.filter(predicate);
    }
    getAverageArea() {
        if (this.shapes.length === 0)
            return 0;
        return ShapeUtilities_1.ShapeUtilities.calculateTotalArea(this.shapes) / this.shapes.length;
    }
    getLargestPerimeter() {
        if (this.shapes.length === 0)
            return null;
        return this.shapes.reduce((max, shape) => (shape.getPerimeter() > max.getPerimeter() ? shape : max), this.shapes[0]);
    }
}
exports.ShapeCalculator = ShapeCalculator;
//# sourceMappingURL=ShapeCalculator.js.map