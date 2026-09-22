import { IShape } from '../interfaces/Shape';
export declare class ShapeUtilities {
    static calculateTotalArea(shapes: IShape[]): number;
    static findLargestShape(shapes: IShape[]): IShape | null;
    static findSmallestShape(shapes: IShape[]): IShape | null;
    static sortByArea(shapes: IShape[], ascending?: boolean): IShape[];
    static getShapeTypeDistribution(shapes: IShape[]): Map<string, number>;
    static generateSummaryReport(shapes: IShape[]): string;
}
//# sourceMappingURL=ShapeUtilities.d.ts.map