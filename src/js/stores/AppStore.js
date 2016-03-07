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
    currentPage: "MODE",
    options:{
        sound: true,
        languages:{
            "en":true,
            "ru":false
        },
        fastgame:false
    }
};

function changePage(page){
    _gameData.currentPage = page;
}

function changeSound(flag){
    _gameData.options.sound = flag;
}

var AppStore = assign({},EventEmitter.prototype, {
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    getCurrentPage: function(){
        return _gameData.currentPage;
    },

    getAllOptions: function(){

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
    var data = payload.data;
    var type = payload.type;
    switch (type){
        case AppConstants.OPEN_SCREEN:
            changePage(data);
            AppStore.emitChange();
            break;
    }
    return true;
});

module.exports = AppStore;