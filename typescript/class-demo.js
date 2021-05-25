var Calc = /** @class */ (function () {
    function Calc() {
        this.firstName = "royal";
    }
    Calc.prototype.add = function () {
        console.log("add from calc");
        console.log(this.firstName); //this 
    };
    return Calc;
}());
var c = new Calc();
c.add();
