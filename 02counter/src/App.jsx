import { useState } from "react";


function App() {
  
  let [counter, setCounter] = useState(15)

  



  const addvalue =()=>{

    counter <20? setCounter(counter+1): ""
    
  }
  const decreseValue =()=>{
   
    counter >0? setCounter(counter-1): ""
    
  }

  return (
    <>
      <div className="container">
      <h1>Hello coders!!</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addvalue}
      >Increment {counter}</button>
      <button
      onClick={decreseValue}
      >Decrement {counter}</button>
      footer: {counter}
      </div>
    </>
  )
}

export default App
