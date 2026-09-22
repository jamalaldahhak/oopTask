import { Shape } from '../abstract/Shape';
import { IDrawable, ITransformable } from '../interfaces/Shape';
export declare class Circle extends Shape implements IDrawable, ITransformable {
    private radius;
    private center;
    constructor(radius: number, x?: number, y?: number);
    getRadius(): number;
    getCenter(): {
        x: number;
        y: number;
    };
    getArea(): number;
    getPerimeter(): number;
    scale(factor: number): void;
    getDiameter(): number;
    getCircumference(): number;
    isPointInside(px: number, py: number): boolean;
    getBoundingBox(): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    rotate(degrees: number): void;
    getPosition(): {
        x: number;
        y: number;
    };
}
//# sourceMappingURL=Circle.d.ts.map