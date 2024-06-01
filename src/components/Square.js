import React from "react";
import "../css/Square.css";

function Square(props){

    const isX = v => {
        if (v === "X")
            return "X-square"
        if (v === "O")
            return "O-square"
        else
            return "empty-square"
    };

    return (
        <div className={`square-container ${isX(props.value)}`}
            onClick={props.onClickSquare}
        >
            {props.value}
        </div>
    )
}

export default Square
