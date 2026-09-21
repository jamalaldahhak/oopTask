interface IShape {
    readonly id: string
    getArea(): number;
    getPerimeter(): string;
    getDescription(): string;
    scale(factor: number): void;
}

interface Idrawaple{
    
};