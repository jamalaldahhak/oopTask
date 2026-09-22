import { Shape } from '../abstract/Shape';
import { IDrawable, ITransformable } from '../interfaces/Shape';

export class Circle extends Shape implements IDrawable, ITransformable {
  private radius: number;
  private center: { x: number; y: number };

  constructor(radius: number, x: number = 0, y: number = 0) {
    if (radius <= 0) throw new Error("نصف القطر يجب أن يكون أكبر من الصفر.");
    super("Circle");
    this.radius = radius;
    this.center = { x, y };
  }

  getRadius(): number { return this.radius; }
  getCenter(): { x: number; y: number } { return { ...this.center }; }

  getArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  getPerimeter(): number {
    return this.getCircumference();
  }

  scale(factor: number): void {
    if (factor <= 0) throw new Error("معامل التكبير يجب أن يكون أكبر من الصفر.");
    this.radius *= factor;
  }

  getDiameter(): number {
    return this.radius * 2;
  }

  getCircumference(): number {
    return 2 * Math.PI * this.radius;
  }

  isPointInside(px: number, py: number): boolean {
    const distance = Math.hypot(px - this.center.x, py - this.center.y);
    return distance <= this.radius;
  }

  getBoundingBox(): { x: number; y: number; width: number; height: number } {
    return {
      x: this.center.x - this.radius,
      y: this.center.y - this.radius,
      width: this.radius * 2,
      height: this.radius * 2
    };
  }

  rotate(degrees: number): void {
    // التدوير لا يغير خصائص الدائرة
  }

  getPosition(): { x: number; y: number } {
    return { ...this.center };
  }
}