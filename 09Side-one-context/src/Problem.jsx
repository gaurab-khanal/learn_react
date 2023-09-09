import { useState } from "react"


const GrandChild = (props)=>{
    return(
      <>
        <h1>GrandChild: </h1>
        <Child brand={props.brand}/>
      </>
    )
}

const Child = (props) =>{

  return(
    <>
      <h2>Child: {props.brand} </h2>
    </>
  )

}

function App() {

  const [brandname] = useState("Ishan");

  return (
    <> 
      <h1>Hello</h1>    
      <GrandChild brand={brandname}/>
    </>
  )
}

export default App
