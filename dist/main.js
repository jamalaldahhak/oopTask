"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./shapes/Circle");
const Rectangle_1 = require("./shapes/Rectangle");
const Square_1 = require("./shapes/Square");
const Triangle_1 = require("./shapes/Triangle");
const ShapeCalculator_1 = require("./calculator/ShapeCalculator");
const ShapeUtilities_1 = require("./abstract/ShapeUtilities");

const circle = new Circle_1.Circle(5, 0, 0);
const rectangle = new Rectangle_1.Rectangle(4, 6, 2, 3);
const square = new Square_1.Square(4, 1, 1);
const triangle = new Triangle_1.Triangle(3, 4, 5);

const calculator = new ShapeCalculator_1.ShapeCalculator();
calculator.addMultipleShapes([circle, rectangle, square, triangle]);

const allShapes = calculator.findShapes(() => true);
console.log(ShapeUtilities_1.ShapeUtilities.generateSummaryReport(allShapes));


console.log("--- اختبارات إضافية ---");
console.log("متوسط المساحات:", calculator.getAverageArea().toFixed(2));
console.log("الشكل ذو المحيط الأكبر:", calculator.getLargestPerimeter()?.getDescription());
console.log("هل المثلث قائم الزاوية؟", triangle.isRightAngled());
console.log("نصف قطر المماس الخارجي للمثلث:", triangle.getCircumradius().toFixed(2));
