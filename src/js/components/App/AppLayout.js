/**
 * Created by hameleonick on 2/25/16.
 */

import React from "react";
import AppAction from "../../actions/AppAction";
import AppStore from "../../stores/AppStore";
import ModeLayout from "../Mode/ModeLayout";
import GameLayout from "../Game/GameLayout";


function GetAppState(){
    return {
        currentPage: AppStore.getCurrentPage()
    }
}

export default class AppLayout extends React.Component {

    constructor() {
        super();
        this.state = GetAppState();
        this._onChange = this._onChange.bind(this)
    }

    componentDidMount() {
        AppStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        AppStore.removeChangeListener(this._onChange);
    }

    _onChange(){
        this.setState(GetAppState());
        //this.state = GetAppState();
    }

    render(){

        return (
            <div class="app-main">
                <ModeLayout currentPage={this.state.currentPage}/>
                <GameLayout currentPage={this.state.currentPage} />
            </div>
        )
    }
}
