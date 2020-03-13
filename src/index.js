import React from 'react';
import ReactDOM from 'react-dom';

// Add css files
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'font-awesome/css/font-awesome.min.css'; // 4.x
import '@fortawesome/fontawesome-free/css/all.css'; // 5.x

//custom CSS
import "./index.css"

// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';

//importing elements into index.js

import Choosing from "./choosing";
import Game from "./game";

var game_state_var = [[0, 0, 0],
[0, 0, 0],
[0, 0, 0]]

ReactDOM.render(<Game/>, document.querySelector("#root"));