/**
 * Created by ShivTej on 8/14/14.
 */

class Car{
    engine : string;

    constructor (engine : string){
        this.engine = engine;
    }

    start(){
        alert('Engine Started Ganesha ' + this.engine);
    }

    stop(){
        alert('Engine Stopped Ganesha ' + this.engine);
    }
}

window.onload = function() {
    var num : number = 2;
    var num2 : number = 3;
    var num3: number= num + num2 + '';
    var car = new Car(num.toString() + num2);
    car.start();
    car.stop();
}
