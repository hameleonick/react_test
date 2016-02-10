/**
 * Created by nkapravchuk on 2/10/16.
 */
import React from "react";

export default class Title extends React.Component {

    render(){
        return (<h1>React title - {this.props.title}</h1>)
    }
}