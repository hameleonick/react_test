/**
 * Created by hameleonick on 2/23/16.
 */

import React from "react";
import ModeAction from "../../actions/ModeAction";
import ModeStore from "../../stores/ModeStore";

export default class ModeMain extends React.Component {

    constructor() {
        super();
        this.state = {data: []};
    }

    componentDidMount() {

    }

    handleClick(){
        ModeAction.runGame("GAME");
    }

    render(){
        return (
            <div class="mode-main">
                <span onClick={this.handleClick}>Mode Main</span>
            </div>
        )
    }
}
