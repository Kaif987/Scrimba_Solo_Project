import { useState } from "react";

const Choice = ({isCorrect,checkingAnswer,text,selected}) => {

    const [isSelected,setIsSelected] = useState(false)

    function handleClick(){
        setIsSelected(true)
    }

    let classes = null
    if(isSelected){
        classes = "selected"
    }

    if(checkingAnswer){
        if(isCorrect){
            classes = "correct"
        }
        if(isSelected && !isCorrect){
            classes = "incorrect"
        }
    }


    return ( 
       <li onClick={() => {
            handleClick()
            selected(text)  
        }}
        className = {classes} >{text}</li>
     );
}
 
export default Choice;