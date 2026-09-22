export interface IShape {
  readonly id: string;
  getArea(): number;
  getPerimeter(): number;
  getDescription(): string;
  scale(factor: number): void;
}

export interface IDrawable {
  getBoundingBox(): { x: number; y: number; width: number; height: number };
}

export interface ITransformable {
  rotate(degrees: number): void;
  getPosition(): { x: number; y: number };
}

export interface IComparable<T> {
  compareTo(other: T): number;
  equals(other: T): boolean;
}