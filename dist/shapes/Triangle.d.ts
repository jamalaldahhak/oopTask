import { Shape } from '../abstract/Shape';
import { IDrawable } from '../interfaces/Shape';
export declare class Triangle extends Shape implements IDrawable {
    private sides;
    private vertices;
    constructor(sideA: number, sideB: number, sideC: number);
    getArea(): number;
    getPerimeter(): number;
    scale(factor: number): void;
    getAngles(): {
        angleA: number;
        angleB: number;
        angleC: number;
    };
    isEquilateral(): boolean;
    isIsosceles(): boolean;
    isRightAngled(): boolean;
    getCircumradius(): number;
    getInradius(): number;
    getBoundingBox(): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
}
//# sourceMappingURL=Triangle.d.ts.map