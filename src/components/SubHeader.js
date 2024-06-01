import React from "react";
import "../css/SubHeader.css";

function SubHeader(props){


    return (
        <div>
            <div className='subheader'>
                {props.children}
            </div>
      </div>
    )
}

export default SubHeader
