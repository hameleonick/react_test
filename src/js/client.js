/**
 * Created by hameleonick on 2/20/16.
 */
import React from "react"
import ReactDOM from "react-dom"

import AppLayout from "./components/App/AppLayout";

var data = {};
const app = document.getElementById("app");

ReactDOM.render(<AppLayout data={data}/>,app)