"use strict";
// type MessageType = "image" | "audio" | string;
// type Message = {
//   id: number;
//   type: MessageType;
//   sendmessage: string;
// };
var Square = /** @class */ (function () {
    function Square(paramObjOrWidth_, height_) {
        if (height_ === void 0) { height_ = 0; }
        // 实现签名
        if (typeof paramObjOrWidth_ === "object") {
            this.width = paramObjOrWidth_.width;
            this.height = paramObjOrWidth_.height;
        }
        else {
            this.width = paramObjOrWidth_;
            this.height = height_;
        }
    }
    Square.prototype.getArea = function () {
        return this.height * this.width;
    };
    return Square;
}());
// let square = new Square(40, 50);
// console.log(square.getArea()); // 2000
var chartParamObj = { width: 50, height: 90 };
var square = new Square(chartParamObj);
console.log(square.getArea()); // 4500
