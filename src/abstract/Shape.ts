import { IShape, IComparable } from '../interfaces/Shape';

export abstract class Shape implements IShape, IComparable<Shape> {
  protected static totalShapes: number = 0;
  public readonly id: string;
  protected name: string;

  constructor(name: string) {
    Shape.totalShapes++;
    this.id = `SHAPE_${Shape.totalShapes}_${Math.random().toString(36).substring(2, 9)}`;
    this.name = name;
  }

  abstract getArea(): number;
  abstract getPerimeter(): number;
  abstract scale(factor: number): void;

  getDescription(): string {
    return `${this.name} [ID: ${this.id}] - المساحة: ${this.getArea().toFixed(2)}, المحيط: ${this.getPerimeter().toFixed(2)}`;
  }

  compareTo(other: Shape): number {
    const areaDiff = this.getArea() - other.getArea();
    if (areaDiff > 0) return 1;
    if (areaDiff < 0) return -1;
    return 0;
  }

  equals(other: Shape): boolean {
    return this.getArea() === other.getArea() && this.getPerimeter() === other.getPerimeter();
  }

  static getTotalShapes(): number {
    return Shape.totalShapes;
  }
}