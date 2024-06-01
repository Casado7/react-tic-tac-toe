import React from "react";
import { useState } from "react";
import Square from "./Square";
import "../css/Board.css";

function Board(){
    const [xIsNext, setxIsNext] = useState(true)
    const [squares, setSquares] = useState([[null, null, null], 
                                            [null, null, null], 
                                            [null, null, null]]);
    const winner = calculateWinner(squares);
    let msg;
    if (winner.winner === "X"){
        msg = <div style={{color: "#00993b"}}>X Wins!</div>;
    } 
    else if (winner.winner === "O"){
        msg = <div style={{color: "orange"}}>O Wins!</div>; 
    }
    else if (winner.Draw){
        msg = <div>Draw</div>        
    }
    else if(xIsNext) {
        msg = <div style={{color: "#00993b"}}>X’sTurn</div>;
    }
    else if(!xIsNext) {
        msg = <div style={{color: "orange"}}>O’s Turn</div>;
    }

    function handleClick(i,j) {
        if(squares[i][j] || winner.winner){
            return
        }
        
        const nextSquares = squares.slice();
        if(xIsNext){
            nextSquares[i][j] = "X";
        } else {
            nextSquares[i][j] = "O";
        }
        
        setSquares(nextSquares);
        setxIsNext(!xIsNext);
        }
    function reset(){
        setxIsNext(true) 
        setSquares([[null, null, null], [null, null, null], [null, null, null]])
        return
    }
    function calculateWinner(squares) {
        const lines = [
            [[0,0],[0,1],[0,2]],
            [[1,0],[1,1],[1,2]],
            [[2,0],[2,1],[2,2]],
            [[0,0],[1,0],[2,0]],
            [[0,1],[1,1],[2,1]],
            [[0,2],[1,2],[2,2]],
            [[0,2],[1,1],[2,0]],
            [[0,0],[1,1],[2,2]]        
        ];

        for (let i = 0; i < lines.length; i++) {
            const [[a1,a2], [b1,b2], [c1,c2]] = lines[i]; 
            if (squares[a1][a2] && squares[a1][a2] === squares[b1][b2] && squares[a1][a2] === squares[c1][c2]) {
                return {
                    winner: squares[a1][a2],
                    Draw: false,
                  };
                }
            }
        let Draw = true;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++)
                if (squares[i][j] === null) {
                    Draw = false;
                    break;
                }
            }
        return {
            winner: false,
            Draw: Draw,
          };
        }

    return (
        <div className="game">
            <div className="msg-box">{msg}</div>
            <div className='board'>
                
                <div className='row'>
                <Square value={squares[0][0]} onClickSquare={() => handleClick(0,0)}/>
                <Square value={squares[0][1]} onClickSquare={() => handleClick(0,1)}/>
                <Square value={squares[0][2]} onClickSquare={() => handleClick(0,2)}/>
                </div>
                <div className='row'>
                <Square value={squares[1][0]} onClickSquare={() => handleClick(1,0)}/>
                <Square value={squares[1][1]} onClickSquare={() => handleClick(1,1)}/>
                <Square value={squares[1][2]} onClickSquare={() => handleClick(1,2)}/>
                </div>
                <div className='row'>
                <Square value={squares[2][0]} onClickSquare={() => handleClick(2,0)}/>
                <Square value={squares[2][1]} onClickSquare={() => handleClick(2,1)}/>
                <Square value={squares[2][2]} onClickSquare={() => handleClick(2,2)}/>
                </div>
            </div>
            <div className="reset-button" onClick={() => reset()}>Reset</div>
            
        </div>
    )
}


export default Board