/**
 * Created by hameleonick on 2/21/16.
 */
import React from "react";

export default class ModeHeader extends React.Component {

    constructor() {
        super();
        this.state = {data: []};
    }

    componentDidMount() {

    }

    render(){

        return (
            <div class="mode-header">
                <span>Mode Header</span>
            </div>
        )
    }
}
