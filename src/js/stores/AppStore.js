/**
 * Created by hameleonick on 2/24/16.
 */
/**
 * Created by hameleonick on 2/24/16.
 */
import AppDispatcher from "../dispatcher/AppDispatcher";
import AppConstants from  "../constants/AppConstants";
import {EventEmitter} from "events";
import assign from "object-assign";

var CHANGE_EVENT = 'change';

var _gameData = {
    currentPage: "MODE"
};

function changePage(page){
    _gameData.currentPage = page;
}


var AppStore = assign({},EventEmitter.prototype, {
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    getCurrentPage: function(){
        return _gameData.currentPage;
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

});

AppDispatcher.register(function(payload){
    console.log("+++++++++++++++++++++")
    console.log(payload);
    var action = payload.action;
    switch (action.actionType){
        case AppConstants.OPEN_GAME_SCREEN:
            changePage(action.item);
            AppStore.emitChange();
            break;
    }
    return true;
});

module.exports = AppStore;