import React from "react"
import CommentList from "./CommentList/CommentList"
import CommentForm from "./CommentForm/CommentForm"
//http://www.tamas.io/react-with-es6/
export default class CommentBox extends React.Component {

	constructor() {
		super();
		this.state = {data: []};
	}

	componentDidMount() {
		//this.setState({data: this.props.data});
		this.addComments(0);
	}

	addComments(i) {
		console.log(this.state.data.length)
		if(this.state.data.length<this.props.data.length){
			setTimeout(function(){
				//this.state.data.push(this.props.data[i])
				var temp = this.state.data.slice(0);
				temp.push(this.props.data[i])
				this.setState({data:temp})
				this.addComments(i+1);
			}.bind(this),500);
		}
		else{
			setTimeout(function(){
				this.props.data[0].text = "NEW TEXT NEW TEXT NEW TEXT NEW TEXT"
				var temp = this.props.data.slice(34)

				this.setState({data:temp})
			}.bind(this),2000)
        //
		}
	}

	render() {
		return (
			<div className="commentBox">
		        <h1>Comments</h1>
		        <CommentList data={this.state.data}/>

		        <CommentForm />
	      	</div>
      	);
	}
}