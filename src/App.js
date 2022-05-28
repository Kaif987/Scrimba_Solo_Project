import Main from "./Components/Main"
import Quiz from "./Components/Quiz";
import { useState } from "react";


function App() {

  const [toggle,setToggle] = useState(false)
  const handleToggle = () =>{
    setToggle(true)
  }

  return (
    <div className="App">
      {toggle ? 
      <Quiz /> 
      : <Main handleToggle = {handleToggle}/> 
      }
    </div>
  );
}

export default App;
