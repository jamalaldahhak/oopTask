import { Shape } from '../abstract/Shape';
import { IDrawable, ITransformable } from '../interfaces/Shape';

export class Rectangle extends Shape implements IDrawable, ITransformable {
  protected width: number;
  protected height: number;
  private position: { x: number; y: number };

  constructor(width: number, height: number, x: number = 0, y: number = 0) {
    if (width <= 0 || height <= 0) throw new Error("الأبعاد يجب أن تكون أكبر من الصفر.");
    super("Rectangle");
    this.width = width;
    this.height = height;
    this.position = { x, y };
  }

  getWidth(): number { return this.width; }
  getHeight(): number { return this.height; }
  getPosition(): { x: number; y: number } { return { ...this.position }; }

  getArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }

  scale(factor: number): void {
    if (factor <= 0) throw new Error("معامل التكبير يجب أن يكون أكبر من الصفر.");
    this.width *= factor;
    this.height *= factor;
  }

  isSquare(): boolean {
    return this.width === this.height;
  }

  getDiagonal(): number {
    return Math.hypot(this.width, this.height);
  }

  getAspectRatio(): number {
    return this.width / this.height;
  }

  getBoundingBox(): { x: number; y: number; width: number; height: number } {
    return {
      x: this.position.x,
      y: this.position.y,
      width: this.width,
      height: this.height
    };
  }

  rotate(degrees: number): void {
    if (degrees % 180 !== 0) {
      const temp = this.width;
      this.width = this.height;
      this.height = temp;
    }
  }
}