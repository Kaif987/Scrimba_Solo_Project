import { useEffect, useState } from "react";
import Question from "./Question";

const Quiz = () => {

    const [questions,setQuestions] = useState([])
    const [checkingAnswer,setCheckingAnswer] = useState(false)
    const [score,setScore] = useState(0)
    const [response,setResponse] = useState(0)


    const computeAnswer = (correct,answer) => {
        if(correct === answer){
            setScore(prev => (prev + 1))
        }
            setResponse(prev => (prev + 1))
    }

    function shuffle(incorrect,correct){
        const array = [...incorrect,correct]

    for(let i = 0; i < array.length; i++){
        let j = Math.floor(Math.random() * array.length)
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
        }
        return array
    }

    useEffect(() =>{
        getQuestions()
    },[])
    
    const getQuestions = () => {
        if(!questions) { return };
        fetch("https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple")
            .then(response => (response.json()))
            .then(data => setQuestions(data.results))
            .catch(error => console.log(error))
    }
        
    console.log(questions)
        
    const questionItems = questions.map((question,index) =>{
        return <Question key = {index}
        question = {question.question}
        correct = {question.correct_answer}
        total = {shuffle(question.incorrect_answers,question.correct_answer)}
        checkingAnswer = {checkingAnswer}
        selected = {select => computeAnswer(select,question.correct_answer)}
        />
    })

    function checkAnswer(){
        setCheckingAnswer(true)
    }

    return ( 
    <div className="questionContainer">
        <div className="questionPage">
            {questionItems}
            <button className="btn check" onClick = {checkAnswer}>{checkingAnswer ? "Play Again" :  "Check Answers"}</button>
        </div>
        {checkingAnswer && <p>You scored {score} out of 10</p>}
    </div>
    );
}
 
export default Quiz;
