/**
 * Created by hameleonick on 2/24/16.
 */
import AppDispatcher from "../dispatcher/AppDispatcher";
import {EventEmitter} from "events";
import assign from "object-assign";

var CHANGE_EVENT = 'change';

var ModeStore = assign({},EventEmitter.prototype, {
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    }
});

AppDispatcher.register(function(payload){
    console.log("-------------------")
    console.log(payload);

    return true;
});

module.exports = ModeStore;