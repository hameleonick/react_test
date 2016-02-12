/**
 * Created by nkapravchuk on 2/9/16.
 */
import React from "react"
import ReactDOM from "react-dom"

//import Layout from "./components/Layout"
import CommentBox from "./components/CommentBox/CommentBox";

const app = document.getElementById("app")
var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"},
  {id: 3, author: "New one", text: "additional comment"}
];
ReactDOM.render(<CommentBox data={data}/>,app)