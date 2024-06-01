import React from "react";
import "../css/Header.css";

function Header(props){


    return (
        <div>
            <div className='header'>
                {props.children}
            </div>
      </div>
    )
}

export default Header
