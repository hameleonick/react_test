import React from "react"
import CommentList from "./CommentList/CommentList"
import CommentForm from "./CommentForm/CommentForm"
//http://www.tamas.io/react-with-es6/
export default class CommentBox extends React.Component {

	constructor() {
		super();
		this.state = {data: []};	
	}

	render() { 
		console.log(this.props)
		return (
			<div className="commentBox">
		        <h1>Comments</h1>
		        <CommentList data={this.state.data}/>
		        <CommentForm />
	      	</div>
      	);
	}
}