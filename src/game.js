import React from "react"

var game_state_var = [[0, 0, 0],
[0, 0, 0],
[0, 0, 0]]



class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: 1,
            game_state: [[0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]]
        }
    }

    gameHandler = (e) => {

        const juanito = e.target.id.split(",")
        const ASDF = [parseInt(juanito[0]), parseInt(juanito[1])]
        var usuario;

        if (game_state_var[ASDF[0]][ASDF[1]] === 0) {

            if (this.state.user === 1) {
                usuario = 2
                game_state_var[ASDF[0]][ASDF[1]] = 1;

                this.setState({
                    user: usuario,
                    game_state: game_state_var
                })
            }

            if (this.state.user === 2) {
                usuario = 1
                game_state_var[ASDF[0]][ASDF[1]] = 2;

                this.setState({
                    user: usuario,
                    game_state: game_state_var
                })
            }
        }
    }

    winCondition() {
        if (game_state_var[0][0] == game_state_var[1][0] == game_state_var[2][0] && game_state_var[2][0] !== 0) { return this.victoryAnimation([0, 0], [1, 0], [2, 0]) }
        if (game_state_var[0][1] == game_state_var[1][1] == game_state_var[2][1] && game_state_var[2][1] !== 0) { return this.victoryAnimation([0, 1], [1, 1], [2, 1]) }
        if (game_state_var[0][2] == game_state_var[1][2] == game_state_var[2][2] && game_state_var[2][2] !== 0) { return this.victoryAnimation([0, 2], [1, 2], [2, 2]) }
        if (game_state_var[0][0] == game_state_var[0][1] == game_state_var[0][2] && game_state_var[0][2] !== 0) { return this.victoryAnimation([0, 0], [0, 1], [0, 2]) }
        if (game_state_var[1][0] == game_state_var[1][1] == game_state_var[1][2] && game_state_var[1][2] !== 0) { return this.victoryAnimation([1, 0], [1, 1], [1, 2]) }
        if (game_state_var[2][0] == game_state_var[2][1] == game_state_var[2][2] && game_state_var[2][2] !== 0) { return this.victoryAnimation([2, 0], [2, 1], [2, 2]) }
        if (game_state_var[0][0] == game_state_var[1][1] == game_state_var[2][2] && game_state_var[2][2] !== 0) { return this.victoryAnimation([0, 0], [1, 1], [2, 2]) }
        if (game_state_var[0][2] == game_state_var[1][1] == game_state_var[2][0] && game_state_var[2][0] !== 0) { return this.victoryAnimation([0, 2], [1, 1], [2, 0]) }

        return console.log("juego sin ganador todavia")
    }

    victoryAnimation(ops) {
        console.log(ops[2])
        console.log("juego Ganado!!")
        console.log(this.state.game_state)
        clearInterval(this.timerID);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.winCondition(),
            1000);
    }



    render() {
        return (
            <div className="container" id="game">
                <div className="row">
                    <div className="col-3 border-right border-bottom d-flex justify-content-center bg-secondary" id="0,0" onClick={this.gameHandler}>
                        {this.state.game_state[0][0] === 1 ? <i className="fas fa-plus fa-4x"></i>
                            : this.state.game_state[0][0] === 2 ? <i className="far fa-circle fa-4x"></i>
                                : <i className="far fa-circle fa-4x invisible"></i>}
                    </div>
                    <div className="col-3 border-right border-bottom d-flex justify-content-center bg-secondary" id="0,1" onClick={this.gameHandler}>
                        {this.state.game_state[0][1] === 1 ? <i className="fas fa-plus fa-4x"></i>
                            : this.state.game_state[0][1] === 2 ? <i className="far fa-circle fa-4x"></i>
                                : <i className="far fa-circle fa-4x invisible"></i>}
                    </div>
                    <div className="col-3 d-flex border-bottom justify-content-center bg-secondary" id="0,2" onClick={this.gameHandler}>
                        {this.state.game_state[0][2] === 1 ? <i className="fas fa-plus fa-4x"></i>
                            : this.state.game_state[0][2] === 2 ? <i className="far fa-circle fa-4x"></i>
                                : <i className="far fa-circle fa-4x invisible"></i>}
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 border-right border-bottom d-flex justify-content-center bg-secondary" id="1,0" onClick={this.gameHandler}>
                        {this.state.game_state[1][0] === 1 ? <i className="fas fa-plus fa-4x"></i>
                            : this.state.game_state[1][0] === 2 ? <i className="far fa-circle fa-4x"></i>
                                : <i className="far fa-circle fa-4x invisible"></i>}
                    </div>
                    <div className="col-3 border-right border-bottom d-flex justify-content-center bg-secondary" id="1,1" onClick={this.gameHandler}>
                        {this.state.game_state[1][1] === 1 ? <i className="fas fa-plus fa-4x"></i>
                            : this.state.game_state[1][1] === 2 ? <i className="far fa-circle fa-4x"></i>
                                : <i className="far fa-circle fa-4x invisible"></i>}
                    </div>
                    <div className="col-3 d-flex border-bottom justify-content-center bg-secondary" id="1,2" onClick={this.gameHandler}>
                        {this.state.game_state[1][2] === 1 ? <i className="fas fa-plus fa-4x"></i>
                            : this.state.game_state[1][2] === 2 ? <i className="far fa-circle fa-4x"></i>
                                : <i className="far fa-circle fa-4x invisible"></i>}
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 border-right d-flex justify-content-center bg-secondary" id="2,0" onClick={this.gameHandler}>
                        {this.state.game_state[2][0] === 1 ? <i className="fas fa-plus fa-4x"></i>
                            : this.state.game_state[2][0] === 2 ? <i className="far fa-circle fa-4x"></i>
                                : <i className="far fa-circle fa-4x invisible"></i>}
                    </div>
                    <div className="col-3 border-right d-flex justify-content-center bg-secondary" id="2,1" onClick={this.gameHandler}>
                        {this.state.game_state[2][1] === 1 ? <i className="fas fa-plus fa-4x"></i>
                            : this.state.game_state[2][1] === 2 ? <i className="far fa-circle fa-4x"></i>
                                : <i className="far fa-circle fa-4x invisible"></i>}
                    </div>
                    <div className="col-3 d-flex justify-content-center bg-secondary" id="2,2" onClick={this.gameHandler}>
                        {this.state.game_state[2][2] === 1 ? <i className="fas fa-plus fa-4x"></i>
                            : this.state.game_state[2][2] === 2 ? <i className="far fa-circle fa-4x"></i>
                                : <i className="far fa-circle fa-4x invisible"></i>}
                    </div>
                </div>
            </div>
        )
    }
}


export default Game;