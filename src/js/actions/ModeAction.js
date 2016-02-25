/**
 * Created by hameleonick on 2/23/16.
 */

import AppDispatcher from "../dispatcher/AppDispatcher";
import AppConstants from "../constants/AppConstants";

var ModeActions = {
    runGame: function(item){
        AppDispatcher.handleViewAction({
            actionType:AppConstants.OPEN_GAME_SCREEN,
            item: item
        })
    }
}

module.exports = ModeActions;

