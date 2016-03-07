/**
 * Created by hameleonick on 2/20/16.
 */
import React from "react";
import ModeAction from "../../actions/ModeAction";

export default class GameLayout extends React.Component {

    constructor() {
        super();
        this.state = {data: []};
    }

    componentDidMount() {

    }

    backToMode() {
        ModeAction.openOptions("MODE");
    }

    render(){
        if(this.props.currentPage !="GAME")
            return null;
        return (
            <div class="mode-layout">
                <span>GAME Layout</span>
                <div onClick={this.backToMode}>Back to MODE</div>
            </div>
        )
    }



}
