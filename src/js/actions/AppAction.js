/**
 * Created by hameleonick on 2/25/16.
 */

import AppDispatcher from "../dispatcher/AppDispatcher";
import AppConstants from "../constants/AppConstants";

var AppActions = {
    addItem: function(item){
        AppDispatcher.handleViewAction({
            actionType:AppConstants.ADD_ITEM,
            item: item
        })
    }
}

module.exports = AppActions;

