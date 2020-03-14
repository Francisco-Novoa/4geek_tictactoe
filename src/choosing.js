import React from "react"

class Choosing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <div>
                <div className="container" id="selection">
                    <div className="row">
                        <div className="col">
                            <h3>Pick a weapon</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <input  onChange={this.props.name1} name="userName1" placeholder="Insert name here"></input>
                        </div>
                        <div className="col-6">
                            <input  onChange={this.props.name2} name="userName2" placeholder="Insert name here"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <a className="btn btn-secondary btn-lg" role="button"  onClick={(e)=>this.props.weapon(1)}><i className="fas fa-plus fa-4x"></i></a>
                        </div>
                        <div className="col-6">
                            <a className="btn btn-secondary btn-lg" role="button"  onClick={(e)=>this.props.weapon(2)}><i className="far fa-circle fa-4x"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Choosing;