/**
 * Created by hameleonick on 2/20/16.
 */
import React from "react";
import ModeHeader from "./ModeHeader";
import ModeMain from "./ModeMain";
import ModeConstants from "../../constants/ModeConstants";

export default class ModeLayout extends React.Component {

    constructor() {
        super();
        this.state = {data: []};
    }

    componentDidMount() {

    }

    render(){
        if(this.props.currentPage !="MODE")
            return null;
        return (
            <div class="mode-layout">
                <ModeHeader />
                <ModeMain />
                <span>Mode Layout</span>
            </div>
        )
    }



}
