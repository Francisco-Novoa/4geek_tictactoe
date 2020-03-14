import React from "react";

import Choosing from "./choosing";
import Game from "./game";


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName1:"",
            userName2:"",
            weapon: 0,
        }
    }

    callback_userName1 = (childData) => {
        this.setState({userName1: childData.target.value})
        console.log(this.state.userName1)
    }

    callback_userName2 = (childData) => {
        this.setState({userName2: childData.target.value})
        console.log(this.state.userName2)
    }

    callback_weapon = (childData) => {
        this.setState({weapon: childData})
        console.log(this.state.userName1,this.state.userName2,this.state.weapon)
    }

    render() {
        return (
            <div className="container">
                <div className="row mt-5" >
                    <div className="col">
                        <h1 >
                            TIC-TAC-TOE in React
                        </h1>
                    </div>
                </div>

               {(this.state.userName1!=""&&this.state.userName2!=""&&this.state.weapon!=0) 
                    ?<Game weapon={this.state.weapon} name1={this.state.userName1} name2={this.state.userName2} /> 
                        :<Choosing name1={this.callback_userName1} name2={this.callback_userName2} weapon={this.callback_weapon}/>}
            </div>
        )
    }
}
    

export default Main