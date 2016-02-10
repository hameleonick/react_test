/**
 * Created by nkapravchuk on 2/9/16.
 */
import React from "react";


export default class Title extends React.Component {
    render() {
        return (
            <h1>{this.props.title}</h1>
    );
    }
}