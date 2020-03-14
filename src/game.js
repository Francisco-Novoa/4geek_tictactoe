import React from "react"

var gameState_var = [[0, 0, 0],
                     [0, 0, 0],
                     [0, 0, 0]]


class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.weapon,
            userName1:this.props.name1,
            userName2:this.props.name2,
            gameState: [[0, 0, 0],
                        [0, 0, 0],
                        [0, 0, 0]]
        }
    }

    gameHandler = (e) => {

        const aux = e.target.id.split(",")
        const ASDF = [parseInt(aux[0]), parseInt(aux[1])]
        var usuario;

        console.log(this.props)

        if (gameState_var[ASDF[0]][ASDF[1]] === 0) {

            if (this.state.user === 1) {
                usuario = 2
                gameState_var[ASDF[0]][ASDF[1]] = 1;

                this.setState({
                    user: usuario,
                    gameState: gameState_var
                })
            }

            if (this.state.user === 2) {
                usuario = 1
                gameState_var[ASDF[0]][ASDF[1]] = 2;

                this.setState({
                    user: usuario,
                    gameState: gameState_var
                })
            }
        }
        this.winCondition();
    }

    winCondition() {
            if ((gameState_var[0][0] == 1 && gameState_var[1][0] == 1 && gameState_var[2][0]== 1)||(gameState_var[0][0] == 2 && gameState_var[1][0] == 2 && gameState_var[2][0]== 2) ) {  this.victoryAnimation("0,0,1,0,2,0") }
       else if ((gameState_var[0][1] == 1 && gameState_var[1][1] == 1 && gameState_var[2][1]== 1)||(gameState_var[0][1] == 2 && gameState_var[1][1] == 2 && gameState_var[2][1]== 2) ) {  this.victoryAnimation("0,1,1,1,2,1") }
       else if ((gameState_var[0][2] == 1 && gameState_var[1][2] == 1 && gameState_var[2][2]== 1)||(gameState_var[0][2] == 2 && gameState_var[1][2] == 2 && gameState_var[2][2]== 2) ) {  this.victoryAnimation("0,2,1,2,2,2") }
       else if ((gameState_var[0][0] == 1 && gameState_var[0][1] == 1 && gameState_var[0][2]== 1)||(gameState_var[0][0] == 2 && gameState_var[0][1] == 2 && gameState_var[0][2]== 2) ) {  this.victoryAnimation("0,0,0,1,0,2") }
       else if ((gameState_var[1][0] == 1 && gameState_var[1][1] == 1 && gameState_var[1][2]== 1)||(gameState_var[1][0] == 2 && gameState_var[1][1] == 2 && gameState_var[1][2]== 2) ) {  this.victoryAnimation("1,0,1,1,1,2") }
       else if ((gameState_var[2][0] == 1 && gameState_var[2][1] == 1 && gameState_var[2][2]== 1)||(gameState_var[2][0] == 2 && gameState_var[2][1] == 2 && gameState_var[2][2]== 2) ) {  this.victoryAnimation("2,0,2,1,2,2") }
       else if ((gameState_var[0][0] == 1 && gameState_var[1][1] == 1 && gameState_var[2][2]== 1)||(gameState_var[0][0] == 2 && gameState_var[1][1] == 2 && gameState_var[2][2]== 2) ) {  this.victoryAnimation("0,0,1,1,2,2") }
       else if ((gameState_var[0][2] == 1 && gameState_var[1][1] == 1 && gameState_var[2][0]== 1)||(gameState_var[0][2] == 2 && gameState_var[1][1] == 2 && gameState_var[2][0]== 2) ) {  this.victoryAnimation("0,2,1,1,2,0") }
       else {console.log("juego sin ganador todavia")}
}

    victoryAnimation=(ops)=>{
        console.log("juego Ganado!!")
       if (ops=="0,0,1,0,2,0"){
        document.querySelector("#game > :nth-child(2) > :nth-child(1)").classList.remove("bg-secondary")
        document.querySelector("#game > :nth-child(2) > :nth-child(1)").classList.add("bg-danger")
        document.querySelector("#game > :nth-child(3) > :nth-child(1)").classList.remove("bg-secondary")
        document.querySelector("#game > :nth-child(3) > :nth-child(1)").classList.add("bg-danger")
        document.querySelector("#game > :nth-child(4) > :nth-child(1)").classList.remove("bg-secondary")
        document.querySelector("#game > :nth-child(4) > :nth-child(1)").classList.add("bg-danger")
       }
       if (ops=="0,1,1,1,2,1"){
        document.querySelector("#game > :nth-child(2) > :nth-child(2)").classList.remove("bg-secondary")
        document.querySelector("#game > :nth-child(2) > :nth-child(2)").classList.add("bg-danger")
        document.querySelector("#game > :nth-child(3) > :nth-child(2)").classList.remove("bg-secondary")
        document.querySelector("#game > :nth-child(3) > :nth-child(2)").classList.add("bg-danger")
        document.querySelector("#game > :nth-child(4) > :nth-child(2)").classList.remove("bg-secondary")
        document.querySelector("#game > :nth-child(4) > :nth-child(2)").classList.add("bg-danger")
       }
       if (ops=="0,2,1,2,2,2"){
        document.querySelector("#game > :nth-child(2) > :nth-child(3)").classList.remove("bg-secondary")
        document.querySelector("#game > :nth-child(2) > :nth-child(3)").classList.add("bg-danger")
        document.querySelector("#game > :nth-child(3) > :nth-child(3)").classList.remove("bg-secondary")
        document.querySelector("#game > :nth-child(3) > :nth-child(3)").classList.add("bg-danger")
        document.querySelector("#game > :nth-child(4) > :nth-child(3)").classList.remove("bg-secondary")
        document.querySelector("#game > :nth-child(4) > :nth-child(3)").classList.add("bg-danger")
       }
       if (ops=="0,0,0,1,0,2"){
        document.querySelector("#game > :nth-child(2) > :nth-child(1)").classList.remove("bg-secondary")
        document.querySelector("#game > :nth-child(2) > :nth-child(1)").classList.add("bg-danger")
        document.querySelector("#game > :nth-child(2) > :nth-child(2)").classList.remove("bg-secondary")
        document.querySelector("#game > :nth-child(2) > :nth-child(2)").classList.add("bg-danger")
        document.querySelector("#game > :nth-child(2) > :nth-child(3)").classList.remove("bg-secondary")
        document.querySelector("#game > :nth-child(2) > :nth-child(3)").classList.add("bg-danger")
       }
       if (ops=="1,0,1,1,1,2"){
        document.querySelector("#game > :nth-child(3) > :nth-child(1)").classList.remove("bg-secondary")
        document.querySelector("#game > :nth-child(3) > :nth-child(1)").classList.add("bg-danger")
        document.querySelector("#game > :nth-child(3) > :nth-child(2)").classList.remove("bg-secondary")
        document.querySelector("#game > :nth-child(3) > :nth-child(2)").classList.add("bg-danger")
        document.querySelector("#game > :nth-child(3) > :nth-child(3)").classList.remove("bg-secondary")
        document.querySelector("#game > :nth-child(3) > :nth-child(3)").classList.add("bg-danger")
       }
       if (ops=="2,0,2,1,2,2"){
        document.querySelector("#game > :nth-child(4) > :nth-child(1)").classList.remove("bg-secondary")
        document.querySelector("#game > :nth-child(4) > :nth-child(1)").classList.add("bg-danger")
        document.querySelector("#game > :nth-child(4) > :nth-child(2)").classList.remove("bg-secondary")
        document.querySelector("#game > :nth-child(4) > :nth-child(2)").classList.add("bg-danger")
        document.querySelector("#game > :nth-child(4) > :nth-child(3)").classList.remove("bg-secondary")
        document.querySelector("#game > :nth-child(4) > :nth-child(3)").classList.add("bg-danger")
       }
       if (ops=="0,0,1,1,2,2"){
        document.querySelector("#game > :nth-child(2) > :nth-child(1)").classList.remove("bg-secondary")
        document.querySelector("#game > :nth-child(2) > :nth-child(1)").classList.add("bg-danger")
        document.querySelector("#game > :nth-child(3) > :nth-child(2)").classList.remove("bg-secondary")
        document.querySelector("#game > :nth-child(3) > :nth-child(2)").classList.add("bg-danger")
        document.querySelector("#game > :nth-child(4) > :nth-child(3)").classList.remove("bg-secondary")
        document.querySelector("#game > :nth-child(4) > :nth-child(3)").classList.add("bg-danger")
       }
       if (ops=="0,2,1,1,2,0"){
        document.querySelector("#game > :nth-child(2) > :nth-child(3)").classList.remove("bg-secondary")
        document.querySelector("#game > :nth-child(2) > :nth-child(3)").classList.add("bg-danger")
        document.querySelector("#game > :nth-child(3) > :nth-child(2)").classList.remove("bg-secondary")
        document.querySelector("#game > :nth-child(3) > :nth-child(2)").classList.add("bg-danger")
        document.querySelector("#game > :nth-child(4) > :nth-child(1)").classList.remove("bg-secondary")
        document.querySelector("#game > :nth-child(4) > :nth-child(1)").classList.add("bg-danger")
       }
    }

    reset=()=>{

        gameState_var = [[0, 0, 0],
                         [0, 0, 0],
                         [0, 0, 0]]

        this.setState({
             user: this.props.weapon,
             gameState: gameState_var
         })
         document.querySelector("#game > :nth-child(2) > :nth-child(1)").classList.remove("bg-danger")
         document.querySelector("#game > :nth-child(2) > :nth-child(1)").classList.add("bg-secondary")
         document.querySelector("#game > :nth-child(2) > :nth-child(2)").classList.remove("bg-danger")
         document.querySelector("#game > :nth-child(2) > :nth-child(2)").classList.add("bg-secondary")
         document.querySelector("#game > :nth-child(2) > :nth-child(3)").classList.remove("bg-danger")
         document.querySelector("#game > :nth-child(2) > :nth-child(3)").classList.add("bg-secondary")
         document.querySelector("#game > :nth-child(3) > :nth-child(1)").classList.remove("bg-danger")
         document.querySelector("#game > :nth-child(3) > :nth-child(1)").classList.add("bg-secondary")
         document.querySelector("#game > :nth-child(3) > :nth-child(2)").classList.remove("bg-danger")
         document.querySelector("#game > :nth-child(3) > :nth-child(2)").classList.add("bg-secondary")
         document.querySelector("#game > :nth-child(3) > :nth-child(3)").classList.remove("bg-danger")
         document.querySelector("#game > :nth-child(3) > :nth-child(3)").classList.add("bg-secondary")
         document.querySelector("#game > :nth-child(4) > :nth-child(1)").classList.remove("bg-danger")
         document.querySelector("#game > :nth-child(4) > :nth-child(1)").classList.add("bg-secondary")
         document.querySelector("#game > :nth-child(4) > :nth-child(2)").classList.remove("bg-danger")
         document.querySelector("#game > :nth-child(4) > :nth-child(2)").classList.add("bg-secondary")
         document.querySelector("#game > :nth-child(4) > :nth-child(3)").classList.remove("bg-danger")
         document.querySelector("#game > :nth-child(4) > :nth-child(3)").classList.add("bg-secondary")
    }

    render() {
        return (
            <div className="container bg-dark p-5" id="game">
                <div className="row d-flex justify-content-center p-2">
                <button type="button" className="btn btn-light" onClick={this.reset}>Reset Game</button>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-3 border-right border-bottom px-5 d-flex justify-content-center bg-secondary" id="0,0" onClick={this.gameHandler}>
                        {this.state.gameState[0][0] === 1 ? <i className="fas fa-plus fa-4x"></i>
                            : this.state.gameState[0][0] === 2 ? <i className="far fa-circle fa-4x"></i>
                                : <i className="far fa-circle fa-4x invisible"></i>}
                    </div>
                    <div className="col-3 border-right border-bottom d-flex justify-content-center bg-secondary" id="0,1" onClick={this.gameHandler}>
                        {this.state.gameState[0][1] === 1 ? <i className="fas fa-plus fa-4x"></i>
                            : this.state.gameState[0][1] === 2 ? <i className="far fa-circle fa-4x"></i>
                                : <i className="far fa-circle fa-4x invisible"></i>}
                    </div>
                    <div className="col-3 d-flex border-bottom justify-content-center bg-secondary" id="0,2" onClick={this.gameHandler}>
                        {this.state.gameState[0][2] === 1 ? <i className="fas fa-plus fa-4x"></i>
                            : this.state.gameState[0][2] === 2 ? <i className="far fa-circle fa-4x"></i>
                                : <i className="far fa-circle fa-4x invisible"></i>}
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-3 border-right border-bottom d-flex justify-content-center bg-secondary" id="1,0" onClick={this.gameHandler}>
                        {this.state.gameState[1][0] === 1 ? <i className="fas fa-plus fa-4x"></i>
                            : this.state.gameState[1][0] === 2 ? <i className="far fa-circle fa-4x"></i>
                                : <i className="far fa-circle fa-4x invisible"></i>}
                    </div>
                    <div className="col-3 border-right border-bottom d-flex justify-content-center bg-secondary" id="1,1" onClick={this.gameHandler}>
                        {this.state.gameState[1][1] === 1 ? <i className="fas fa-plus fa-4x"></i>
                            : this.state.gameState[1][1] === 2 ? <i className="far fa-circle fa-4x"></i>
                                : <i className="far fa-circle fa-4x invisible"></i>}
                    </div>
                    <div className="col-3 d-flex border-bottom justify-content-center bg-secondary" id="1,2" onClick={this.gameHandler}>
                        {this.state.gameState[1][2] === 1 ? <i className="fas fa-plus fa-4x"></i>
                            : this.state.gameState[1][2] === 2 ? <i className="far fa-circle fa-4x"></i>
                                : <i className="far fa-circle fa-4x invisible"></i>}
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-3 border-right d-flex justify-content-center bg-secondary" id="2,0" onClick={this.gameHandler}>
                        {this.state.gameState[2][0] === 1 ? <i className="fas fa-plus fa-4x"></i>
                            : this.state.gameState[2][0] === 2 ? <i className="far fa-circle fa-4x"></i>
                                : <i className="far fa-circle fa-4x invisible"></i>}
                    </div>
                    <div className="col-3 border-right d-flex justify-content-center bg-secondary" id="2,1" onClick={this.gameHandler}>
                        {this.state.gameState[2][1] === 1 ? <i className="fas fa-plus fa-4x"></i>
                            : this.state.gameState[2][1] === 2 ? <i className="far fa-circle fa-4x"></i>
                                : <i className="far fa-circle fa-4x invisible"></i>}
                    </div>
                    <div className="col-3 d-flex justify-content-center bg-secondary" id="2,2" onClick={this.gameHandler}>
                        {this.state.gameState[2][2] === 1 ? <i className="fas fa-plus fa-4x"></i>
                            : this.state.gameState[2][2] === 2 ? <i className="far fa-circle fa-4x"></i>
                                : <i className="far fa-circle fa-4x invisible"></i>}
                    </div>
                </div>
            </div>
        )
    }
}


export default Game;