import { IShape } from '../interfaces/Shape';
export declare class ShapeCalculator {
    private shapes;
    addShape(shape: IShape): void;
    removeShape(id: string): boolean;
    getShape(id: string): IShape | undefined;
    updateShape(id: string, updates: Partial<IShape>): boolean;
    addMultipleShapes(shapes: IShape[]): void;
    clearAll(): void;
    findShapes(predicate: (shape: IShape) => boolean): IShape[];
    getAverageArea(): number;
    getLargestPerimeter(): IShape | null;
}
//# sourceMappingURL=ShapeCalculator.d.ts.map