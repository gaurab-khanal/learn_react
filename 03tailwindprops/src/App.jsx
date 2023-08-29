import { useState } from 'react'

import './App.css'
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Gaurab",
    age: 16
  }

  let newArr = [1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 mb-4 rounded-xl'>Tailwind test</h1>
      <Card username="Chiya aur code" btnText="CLick Me"/>     
      <Card username="Chiya" />     
    </>
  )
}

export default App
