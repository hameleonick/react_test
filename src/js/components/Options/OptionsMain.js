/**
 * Created by hameleonick on 2/28/16.
 */
import React from "react";
import ModeAction from "../../actions/ModeAction";

export default class OptionsMain extends React.Component {

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
        return (
            <div class="options-main">
                <div onClick={this.backToMode}>BACK</div>
                <span>Options main</span>
            </div>
        )
    }

}