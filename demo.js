//Firstly Hello World!!
alert("Hello World!!");
//Arthematic Class
var arthmatic = (function () {
    function arthmatic() {
    }
    ///Methods
    arthmatic.prototype.add = function (num1, num2) {
        console.log(num1 + num2);
    };
    arthmatic.prototype.sub = function (num1, num2) {
        console.log(num1 - num2);
    };
    arthmatic.prototype.mul = function (num1, num2) {
        console.log(num1 * num2);
    };
    arthmatic.prototype.div = function (num1, num2) {
        console.log(num1 / num2);
    };
    return arthmatic;
})();
////Objects of Class Arthematic
var a1 = new arthmatic(); /// Addition
a1.add(12, 12.2);
var a2 = new arthmatic(); ///Subtraction
a2.sub(12, 12.2);
var a3 = new arthmatic(); ///Multiplication
a3.mul(12, 12.2);
var a4 = new arthmatic(); ///Divison
a4.div(12, 12.2);
