/**
 * Created by hameleonick on 2/23/16.
 */

import {Dispatcher} from "flux";
import assign from "object-assign"

var AppDispatcher = assign(new Dispatcher(), {
    handleViewAction: function(action){
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }
});

module.exports = AppDispatcher;

