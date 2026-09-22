"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
const Rectangle_1 = require("./Rectangle");
class Square extends Rectangle_1.Rectangle {
    constructor(size, x = 0, y = 0) {
        super(size, size, x, y);
        this.name = "Square";
    }
    getSize() {
        return this.width;
    }
    setSize(size) {
        if (size <= 0)
            throw new Error("الضلع يجب أن يكون أكبر من الصفر.");
        this.width = size;
        this.height = size;
    }
}
exports.Square = Square;
//# sourceMappingURL=Square.js.map