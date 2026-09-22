import { Rectangle } from './Rectangle';

export class Square extends Rectangle {
  constructor(size: number, x: number = 0, y: number = 0) {
    super(size, size, x, y);
    this.name = "Square";
  }

  getSize(): number {
    return this.width;
  }

  setSize(size: number): void {
    if (size <= 0) throw new Error("الضلع يجب أن يكون أكبر من الصفر.");
    this.width = size;
    this.height = size;
  }
}