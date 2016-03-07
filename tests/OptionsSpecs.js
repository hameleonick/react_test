/**
 * Created by hameleonick on 2/28/16.
 */

import AppStore from "../src/js/stores/AppStore";
import OptionsMain from "../src/js/components/Options/OptionsMain";

describe("Options functionality(sound, language, game-speed)", ()=>{

    it("Default options should be defined", ()=>{
        var options = AppStore.getAllOptions();
        expect(AppStore.getAllOptions).toBeDefined();
        //expect(options).toBeDefined();
    })

    it("Set sound value", ()=>{

        OptionMain.changeSoundValue(false);
        var options = AppStore.getAllOptions();
        expect(options.sound).toBeFalsy();
        OptionMain.changeSoundValue(true);
        expect(options.sound).toBe(true);
    });

});