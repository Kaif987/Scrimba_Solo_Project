import { useEffect, useState } from "react";
import Question from "./Question";

const Quiz = () => {

    const [questions,setQuestions] = useState([])
    const [score,setScore] = useState(0)
    const [response,setResponse] = useState(0)
    const [answers,setAnswers] = useState(Array(10).fill(0))
    const [allanswered,setAllAnswered] = useState(false)
    const [checkingAnswer,setCheckingAnswer] = useState(false)

    const userResponded = () => {
        setResponse(prev => (prev + 1))
        console.log(response)
    }

    const updateSelection = (index,selection) =>{
        setAnswers(prev =>{
            prev[index] = selection
            console.log(prev)
            return prev
        })
    }

    useEffect(() =>{
        const allSelected = answers.every((answer) =>{
            return answer !== 0
        })

        if(allSelected){
            setAllAnswered(true)
        }
        console.log(allanswered)

    },[response])


    useEffect(() =>{
        getQuestions()
    },[])
    
    const getQuestions = () => {
        fetch("https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple")
            .then(response => (response.json()))
            .then(data => setQuestions(data.results))
            .catch(error => console.log(error))
    }
        
    const questionItems = questions && questions.map(({question,correct_answer,incorrect_answers},index) =>{
        return <Question key = {index}
        question = {question}
        correct = {correct_answer}
        incorrect = {incorrect_answers}
        updateSelection = {(selection) => {updateSelection(index,selection)}}
        selectedValue = {answers[index]}
        userResponded = {userResponded}
        checkingAnswer = {checkingAnswer}
        />
    })

    const checkAnswer = () =>{
        setCheckingAnswer(true)
        questions.forEach(({correct_answer},index) =>{
            if(answers[index] === correct_answer){
                setScore(prev => (prev + 1))
            }
        })
    }

    return ( 
    <div className="questionContainer">
        <div className="questionPage">
            {questionItems}
            {allanswered && <button className="btn check" onClick={checkAnswer}>Check Answers</button>}
            {checkingAnswer && <h2 className="score">You Scored {score} out of 10</h2>}
        </div>
    </div>
    );
}
 
export default Quiz;
