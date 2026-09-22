"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapeUtilities = void 0;
const Shape_1 = require("../interfaces/Shape");
class ShapeUtilities {
    static calculateTotalArea(shapes) {
        return shapes.reduce((sum, shape) => sum + shape.getArea(), 0);
    }
    static findLargestShape(shapes) {
        if (shapes.length === 0)
            return null;
        return shapes.reduce((max, shape) => (shape.getArea() > max.getArea() ? shape : max), shapes[0]);
    }
    static findSmallestShape(shapes) {
        if (shapes.length === 0)
            return null;
        return shapes.reduce((min, shape) => (shape.getArea() < min.getArea() ? shape : min), shapes[0]);
    }
    static sortByArea(shapes, ascending = true) {
        return [...shapes].sort((a, b) => {
            const diff = a.getArea() - b.getArea();
            return ascending ? diff : -diff;
        });
    }
    static getShapeTypeDistribution(shapes) {
        const distribution = new Map();
        for (const shape of shapes) {
            const type = shape.constructor.name;
            distribution.set(type, (distribution.get(type) || 0) + 1);
        }
        return distribution;
    }
    static generateSummaryReport(shapes) {
        const totalArea = this.calculateTotalArea(shapes);
        const largest = this.findLargestShape(shapes);
        const smallest = this.findSmallestShape(shapes);
        const dist = this.getShapeTypeDistribution(shapes);
        let report = `=== تقرير ملخص الأشكال ===\n`;
        report += `إجمالي الأشكال: ${shapes.length}\n`;
        report += `المساحة الإجمالية: ${totalArea.toFixed(2)}\n`;
        report += `الأكبر مساحة: ${largest ? largest.getDescription() : 'لا يوجد'}\n`;
        report += `الأصغر مساحة: ${smallest ? smallest.getDescription() : 'لا يوجد'}\n`;
        report += `توزيع الأشكال:\n`;
        dist.forEach((count, type) => {
            report += ` - ${type}: ${count}\n`;
        });
        return report;
    }
}
exports.ShapeUtilities = ShapeUtilities;
//# sourceMappingURL=ShapeUtilities.js.map