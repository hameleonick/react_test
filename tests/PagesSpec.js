/**
 * Created by hameleonick on 2/27/16.
 */

import AppStore from "../src/js/stores/AppStore";
import ModeAction from "../src/js/actions/ModeAction";

describe("Different pages in app", ()=> {
//User should have possibility to open different pages in app

    it("Default page in store should be MODE", ()=> {
        expect(AppStore.getCurrentPage()).toBe("MODE");
    });

    it("Set current page as GAME", ()=>{
        ModeAction.runGame("GAME");
        expect(AppStore.getCurrentPage()).toBe("GAME");
    })

    it("Set current page as Options", ()=>{
        ModeAction.openOptions("OPTIONS");
        expect(AppStore.getCurrentPage()).toBe("OPTIONS");
    });


});