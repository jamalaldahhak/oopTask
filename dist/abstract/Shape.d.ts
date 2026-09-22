import { IShape, IComparable } from '../interfaces/Shape';
export declare abstract class Shape implements IShape, IComparable<Shape> {
    protected static totalShapes: number;
    readonly id: string;
    protected name: string;
    constructor(name: string);
    abstract getArea(): number;
    abstract getPerimeter(): number;
    abstract scale(factor: number): void;
    getDescription(): string;
    compareTo(other: Shape): number;
    equals(other: Shape): boolean;
    static getTotalShapes(): number;
}
//# sourceMappingURL=Shape.d.ts.map