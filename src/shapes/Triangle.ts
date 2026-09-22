import { Shape } from '../abstract/Shape';
import { IDrawable } from '../interfaces/Shape';

export class Triangle extends Shape implements IDrawable {
  private sides: [number, number, number];
  private vertices: { x: number; y: number }[];

  constructor(sideA: number, sideB: number, sideC: number) {
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

  getArea(): number {
    const s = this.getPerimeter() / 2;
    const [a, b, c] = this.sides;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }

  getPerimeter(): number {
    return this.sides[0] + this.sides[1] + this.sides[2];
  }

  scale(factor: number): void {
    if (factor <= 0) throw new Error("معامل التكبير يجب أن يكون أكبر من الصفر.");
    this.sides = [this.sides[0] * factor, this.sides[1] * factor, this.sides[2] * factor];
    this.vertices = this.vertices.map(v => ({ x: v.x * factor, y: v.y * factor }));
  }

  getAngles(): { angleA: number; angleB: number; angleC: number } {
    const [a, b, c] = this.sides;
    const toDeg = (rad: number) => (rad * 180) / Math.PI;

    const angleA = toDeg(Math.acos((b * b + c * c - a * a) / (2 * b * c)));
    const angleB = toDeg(Math.acos((a * a + c * c - b * b) / (2 * a * c)));
    const angleC = 180 - angleA - angleB;

    return { angleA, angleB, angleC };
  }

  isEquilateral(): boolean {
    const [a, b, c] = this.sides;
    return a === b && b === c;
  }

  isIsosceles(): boolean {
    const [a, b, c] = this.sides;
    return a === b || b === c || a === c;
  }

  isRightAngled(): boolean {
    const angles = Object.values(this.getAngles());
    return angles.some(angle => Math.abs(angle - 90) < 1e-5);
  }

  getCircumradius(): number {
    return (this.sides[0] * this.sides[1] * this.sides[2]) / (4 * this.getArea());
  }

  getInradius(): number {
    return this.getArea() / (this.getPerimeter() / 2);
  }

  getBoundingBox(): { x: number; y: number; width: number; height: number } {
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