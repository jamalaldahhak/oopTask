import { Shape } from '../abstract/Shape';
import { IDrawable, ITransformable } from '../interfaces/Shape';
export declare class Rectangle extends Shape implements IDrawable, ITransformable {
    protected width: number;
    protected height: number;
    private position;
    constructor(width: number, height: number, x?: number, y?: number);
    getWidth(): number;
    getHeight(): number;
    getPosition(): {
        x: number;
        y: number;
    };
    getArea(): number;
    getPerimeter(): number;
    scale(factor: number): void;
    isSquare(): boolean;
    getDiagonal(): number;
    getAspectRatio(): number;
    getBoundingBox(): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    rotate(degrees: number): void;
}
//# sourceMappingURL=Rectangle.d.ts.map