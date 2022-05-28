import { useState } from "react"
import Choice from "./Choice" 

const Question = ({question, correct, checkingAnswer,selected, total}) => {

    return (
        <div className="question">
            <h3>{question}</h3>
            <ul>
                {total.map(option => <Choice isCorrect = {correct === option} checkingAnswer = {checkingAnswer} text = {option} selected = {selected}  />)}
            </ul>
        </div>
    );
}
 
export default Question;