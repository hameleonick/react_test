/**
 * Created by hameleonick on 2/23/16.
 */

import AppDispatcher from "../dispatcher/AppDispatcher";
import AppConstants from "../constants/AppConstants";

var ModeActions = {
    runGame: function(item){
        AppDispatcher.dispatch({
            type:AppConstants.OPEN_SCREEN,
            data: item,
            source: 'VIEW_ACTION'
        })
    },

    openOptions: function(item){
        AppDispatcher.dispatch({
            type:AppConstants.OPEN_SCREEN,
            data: item,
            source: 'VIEW_ACTION'
        })
    },

    openMode: function(item){
        AppDispatcher.dispatch({
            type:AppConstants.OPEN_SCREEN,
            data: item,
            source: 'VIEW_ACTION'
        })
    }
}

module.exports = ModeActions;

