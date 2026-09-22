import { Circle } from './shapes/Circle';
import { Rectangle } from './shapes/Rectangle';
import { Square } from './shapes/Square';
import { Triangle } from './shapes/Triangle';
import { ShapeCalculator } from './calculator/ShapeCalculator';
import { ShapeUtilities } from './abstract/ShapeUtilities';


const circle = new Circle(5, 0, 0);
const rectangle = new Rectangle(4, 6, 2, 3);
const square = new Square(4, 1, 1);
const triangle = new Triangle(3, 4, 5);


const calculator = new ShapeCalculator();
calculator.addMultipleShapes([circle, rectangle, square, triangle]);


const allShapes = calculator.findShapes(() => true);
console.log(ShapeUtilities.generateSummaryReport(allShapes));


console.log("--- اختبارات إضافية ---");
console.log("متوسط المساحات:", calculator.getAverageArea().toFixed(2));
console.log("الشكل ذو المحيط الأكبر:", calculator.getLargestPerimeter()?.getDescription());
console.log("هل المثلث قائم الزاوية؟", triangle.isRightAngled());
console.log("نصف قطر المماس الخارجي للمثلث:", triangle.getCircumradius().toFixed(2));