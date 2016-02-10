/**
 * Created by nkapravchuk on 2/10/16.
 */
export default class Calc {
    constructor(a, b){
        this.a = a;
        this.b = b;
    }

    getSum(){
        return this.a+this.b;
    }

    getDiff(){
        return this.a-this.b;
    }
}