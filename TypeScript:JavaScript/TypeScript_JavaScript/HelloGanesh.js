/**
* Created by ShivTej on 8/14/14.
*/
var Car = (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.start = function () {
        alert('Engine Started Ganesha ' + this.engine);
    };

    Car.prototype.stop = function () {
        alert('Engine Stopped Ganesha ' + this.engine);
    };
    return Car;
})();

window.onload = function () {
    var num = 2;
    var num2 = 3;
    var num3 = num + num2 + '';
    var car = new Car(num.toString() + num2);
    car.start();
    car.stop();
};
//# sourceMappingURL=HelloGanesh.js.map
