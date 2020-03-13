import React from "react"

let userName =""

class Choosing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
                    <div className="container" id="selection">
                        <div className="row">
                            <div className="col">
                                <h4>Pick a weapon</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <input onChange={(e)=>{userName=e.target.value;console.log(userName)}} placeholder="Insert name here"></input>
                            </div>
                            <div className="col-6">
                                <input onChange={(e)=>{userName=e.target.value;console.log(userName)}} placeholder="Insert name here"></input>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-6">
                        <a className="btn btn-secondary btn-lg active" role="button"><i className="fas fa-plus fa-3x"></i></a>
                            </div>
                            <div className="col-6">
                            <a className="btn btn-secondary btn-lg active" role="button"><i class="far fa-circle fa-3x"></i></a>
                            </div>  
                        </div>
                    </div>
        )
    }
}


export default Choosing;