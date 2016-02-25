/**
 * Created by hameleonick on 2/20/16.
 */
import React from "react";

export default class GameLayout extends React.Component {

    constructor() {
        super();
        this.state = {data: []};
    }

    componentDidMount() {

    }

    render(){
        if(this.props.currentPage !="GAME")
            return null;
        return (
            <div class="mode-layout">
                <span>GAME Layout</span>
            </div>
        )
    }



}
