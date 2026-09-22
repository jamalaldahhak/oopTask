"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
const Shape_1 = require("../abstract/Shape");
const Shape_2 = require("../interfaces/Shape");
class Triangle extends Shape_1.Shape {
    sides;
    vertices;
    constructor(sideA, sideB, sideC) {
        if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
            throw new Error("أطوال الأضلاع المدخلة لا تشكل مثلثاً صحيحاً.");
        }
        super("Triangle");
        this.sides = [sideA, sideB, sideC];
        const xC = (sideA * sideA + sideC * sideC - sideB * sideB) / (2 * sideA);
        const yC = Math.sqrt(Math.max(0, sideC * sideC - xC * xC));
        this.vertices = [
            { x: 0, y: 0 },
            { x: sideA, y: 0 },
            { x: xC, y: yC }
        ];
    }
    getArea() {
        const s = this.getPerimeter() / 2;
        const [a, b, c] = this.sides;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }
    getPerimeter() {
        return this.sides[0] + this.sides[1] + this.sides[2];
    }
    scale(factor) {
        if (factor <= 0)
            throw new Error("معامل التكبير يجب أن يكون أكبر من الصفر.");
        this.sides = [this.sides[0] * factor, this.sides[1] * factor, this.sides[2] * factor];
        this.vertices = this.vertices.map(v => ({ x: v.x * factor, y: v.y * factor }));
    }
    getAngles() {
        const [a, b, c] = this.sides;
        const toDeg = (rad) => (rad * 180) / Math.PI;
        const angleA = toDeg(Math.acos((b * b + c * c - a * a) / (2 * b * c)));
        const angleB = toDeg(Math.acos((a * a + c * c - b * b) / (2 * a * c)));
        const angleC = 180 - angleA - angleB;
        return { angleA, angleB, angleC };
    }
    isEquilateral() {
        const [a, b, c] = this.sides;
        return a === b && b === c;
    }
    isIsosceles() {
        const [a, b, c] = this.sides;
        return a === b || b === c || a === c;
    }
    isRightAngled() {
        const angles = Object.values(this.getAngles());
        return angles.some(angle => Math.abs(angle - 90) < 1e-5);
    }
    getCircumradius() {
        return (this.sides[0] * this.sides[1] * this.sides[2]) / (4 * this.getArea());
    }
    getInradius() {
        return this.getArea() / (this.getPerimeter() / 2);
    }
    getBoundingBox() {
        const xCoords = this.vertices.map(v => v.x);
        const yCoords = this.vertices.map(v => v.y);
        const minX = Math.min(...xCoords);
        const maxX = Math.max(...xCoords);
        const minY = Math.min(...yCoords);
        const maxY = Math.max(...yCoords);
        return {
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY
        };
    }
}
exports.Triangle = Triangle;
//# sourceMappingURL=Triangle.js.map