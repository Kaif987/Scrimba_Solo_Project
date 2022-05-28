import React from "react";

const Main = (props) => {
    return (
    <div className='main'>
        <div className="description">
            <h1>Quizzical</h1>
            <p>Test your knowledge about the whole world</p>
            <button onClick={props.handleToggle} className = "btn" >Start Quiz</button>
        </div>
    </div>
    );
}
 
export default Main
