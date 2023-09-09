import Provider from "./Provider";
import { LevelContext } from "./Context";
import { useContext } from "react";


const Agents = ()=>{
  return <AgentOne/>
}

const AgentOne = ()=>{
  return <AgentTwo/>
}

const AgentTwo = ()=>{
  return <AgentBond/>
}

const AgentBond = ()=>{
  const theme = useContext(LevelContext);
  return (
    <>
      <h3>Agent Information</h3>
      <p>Misson Name: {theme.data.mname}</p>
      <h2>Mission Status: {theme.data.accept}</h2>
      <button onClick={theme.isMissionAccepted}>Choose to accept</button>
    </>
  )

}


const App = ()=>{
  return(
    <div>
      <h1>Context API</h1>
      <Provider>

        <Agents/>

      </Provider>
    </div>
  )
}

export default App;