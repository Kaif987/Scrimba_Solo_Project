import { useEffect } from "react"

const Question = ({question, correct,incorrect, checkingAnswer,updateSelection,selectedValue,userResponded}) => {
    
    const correctAnswerClassName = `${checkingAnswer ?  "correct" : selectedValue === correct && "selected"}`


    const correctElement = 
        <li key={99}
            className = {correctAnswerClassName}
            onClick={() =>{
                updateSelection(correct)
                userResponded()
            }}>
            {correct}
        </li>

    const incorrectElements = 
        incorrect.map((answer,index) =>{

        const incorrectAnswerClassName =  `${checkingAnswer ? selectedValue === answer && "incorrect" : selectedValue === answer && "selected"}`

        return <li 
            key={index}
            className = {incorrectAnswerClassName}
            onClick = {() =>{
                updateSelection(answer)
                userResponded()
            }}
            >
                {answer}
        </li>
    })

    incorrectElements.push(correctElement)

    const sortedAnswerElements = incorrectElements.sort((a, b) => (
		a.props.children.localeCompare(b.props.children))
	)


    useEffect(() =>{
        console.log("triggered")
    },[])

    return (
        <div className="question">
            <h3>{question}</h3>
            <ul>
                {sortedAnswerElements}
            </ul>        
        </div>
    );
}
 
export default Question;