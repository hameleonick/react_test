/**
 * Created by nkapravchuk on 2/10/16.
 */
import Calc from "../src/js/components/Calc";

describe("Check a Calc function", ()=> {
    var a;

    var calc = new Calc(5,4);

    it("Cacl - sum function", ()=> {
        expect(calc.getSum()).toEqual(9);
    });
});