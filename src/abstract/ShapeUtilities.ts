import { IShape } from '../interfaces/Shape';

export class ShapeUtilities {
  static calculateTotalArea(shapes: IShape[]): number {
    return shapes.reduce((sum, shape) => sum + shape.getArea(), 0);
  }

  static findLargestShape(shapes: IShape[]): IShape | null {
    if (shapes.length === 0) return null;
    return shapes.reduce((max, shape) => (shape.getArea() > max.getArea() ? shape : max), shapes[0]);
  }

  static findSmallestShape(shapes: IShape[]): IShape | null {
    if (shapes.length === 0) return null;
    return shapes.reduce((min, shape) => (shape.getArea() < min.getArea() ? shape : min), shapes[0]);
  }

  static sortByArea(shapes: IShape[], ascending: boolean = true): IShape[] {
    return [...shapes].sort((a, b) => {
      const diff = a.getArea() - b.getArea();
      return ascending ? diff : -diff;
    });
  }

  static getShapeTypeDistribution(shapes: IShape[]): Map<string, number> {
    const distribution = new Map<string, number>();
    for (const shape of shapes) {
      const type = shape.constructor.name;
      distribution.set(type, (distribution.get(type) || 0) + 1);
    }
    return distribution;
  }

  static generateSummaryReport(shapes: IShape[]): string {
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