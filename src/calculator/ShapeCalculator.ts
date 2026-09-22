import { IShape } from '../interfaces/Shape';
import { ShapeUtilities } from '../abstract/ShapeUtilities';

export class ShapeCalculator {
  private shapes: IShape[] = [];

  addShape(shape: IShape): void {
    this.shapes.push(shape);
  }

  removeShape(id: string): boolean {
    const index = this.shapes.findIndex(s => s.id === id);
    if (index !== -1) {
      this.shapes.splice(index, 1);
      return true;
    }
    return false;
  }

  getShape(id: string): IShape | undefined {
    return this.shapes.find(s => s.id === id);
  }

  updateShape(id: string, updates: Partial<IShape>): boolean {
    const shape = this.getShape(id);
    if (!shape) return false;
    Object.assign(shape, updates);
    return true;
  }

  addMultipleShapes(shapes: IShape[]): void {
    this.shapes.push(...shapes);
  }

  clearAll(): void {
    this.shapes = [];
  }

  findShapes(predicate: (shape: IShape) => boolean): IShape[] {
    return this.shapes.filter(predicate);
  }

  getAverageArea(): number {
    if (this.shapes.length === 0) return 0;
    return ShapeUtilities.calculateTotalArea(this.shapes) / this.shapes.length;
  }

  getLargestPerimeter(): IShape | null {
    if (this.shapes.length === 0) return null;
    return this.shapes.reduce((max, shape) => (shape.getPerimeter() > max.getPerimeter() ? shape : max), this.shapes[0]);
  }
}