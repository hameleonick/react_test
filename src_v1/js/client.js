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
  {id: 3, author: "New one", text: "additional comment"},
  {id: 4, author: "Pete Hunt", text: "This is one comment"},
  {id: 5, author: "Jordan Walke", text: "This is *another* comment"},
  {id: 6, author: "New one", text: "additional comment"},
  {id: 7, author: "Pete Hunt", text: "This is one comment"},
  {id: 8, author: "Jordan Walke", text: "This is *another* comment"},
  {id: 9, author: "New one", text: "additional comment"},
  {id: 10, author: "Pete Hunt", text: "This is one comment"},
  {id: 11, author: "Jordan Walke", text: "This is *another* comment"},
  {id: 12, author: "New one", text: "additional comment"},
  {id: 13, author: "Pete Hunt", text: "This is one comment"},
  {id: 14, author: "Jordan Walke", text: "This is *another* comment"},
  {id: 15, author: "New one", text: "additional comment"},
  {id: 16, author: "Jordan Walke", text: "This is *another* comment"},
  {id: 17, author: "New one", text: "additional comment"},
  {id: 18, author: "Jordan Walke", text: "This is *another* comment"},
  {id: 19, author: "New one", text: "additional comment"},
  {id: 20, author: "Jordan Walke", text: "This is *another* comment"},
  {id: 21, author: "New one", text: "additional comment"},
  {id: 22, author: "Pete Hunt", text: "This is one comment"},
  {id: 23, author: "Jordan Walke", text: "This is *another* comment"},
  {id: 24, author: "New one", text: "additional comment"},
  {id: 25, author: "Pete Hunt", text: "This is one comment"},
  {id: 26, author: "Jordan Walke", text: "This is *another* comment"},
  {id: 27, author: "New one", text: "additional comment"},
  {id: 28, author: "Pete Hunt", text: "This is one comment"},
  {id: 29, author: "Jordan Walke", text: "This is *another* comment"},
  {id: 30, author: "New one", text: "additional comment"},
  {id: 31, author: "Pete Hunt", text: "This is one comment"},
  {id: 32, author: "Jordan Walke", text: "This is *another* comment"},
  {id: 33, author: "New one", text: "additional comment"},
  {id: 34, author: "Jordan Walke", text: "This is *another* comment"},
  {id: 35, author: "New one", text: "additional comment"},
  {id: 36, author: "Pete Hunt", text: "This is one comment"},
  {id: 37, author: "Jordan Walke", text: "This is *another* comment"},
  {id: 38, author: "New one", text: "additional comment"}




];
ReactDOM.render(<CommentBox data={data}/>,app)