/**
 * Created by hameleonick on 2/28/16.
 */
import React from "react";
import OptionsMain from "./OptionsMain"

export default class OptionsLayout extends React.Component {

    constructor() {
        super();
        this.state = {data: []};
    }

    componentDidMount() {

    }

    render(){
        if(this.props.currentPage !="OPTIONS")
            return null;
        return (
            <div class="options-layout">
                <OptionsMain />
                <span>Options layout</span>
            </div>
        )
    }



}
