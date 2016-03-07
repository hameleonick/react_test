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

    runGame(){
        ModeAction.runGame("GAME");
    }

    openOptions(){
        ModeAction.openOptions("OPTIONS")
    }

    render(){
        return (
            <div class="mode-main">
                <div onClick={this.runGame}>Run Game</div>
                <div onClick={this.openOptions}>Open Options</div>
            </div>
        )
    }
}
