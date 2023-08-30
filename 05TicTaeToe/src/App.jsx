import { useState } from 'react'
import './App.css'
import Icon from './components/icons.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  const itemArray = new Array(9).fill('empty')

  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");
  const [gameState, setGameState] = useState(itemArray);

  const reloadGame = ()=>{
    setIsCross(false);
    setWinMessage("");
    itemArray.fill('empty', 0, 9);
  }

  const checkIsWinner= () =>{
    //
  }

  const changeItem = itemNumber =>{
    if(winMessage){
      return toast(winMessage, {type:"success"})
    }

    if(itemArray[itemNumber] === "empty"){
      itemArray[itemNumber] = isCross ? "cross": "circle"
      setIsCross(!isCross)
    }else{
      return toast("Already Filled", {type: "error"})
    }

    checkIsWinner()

  }

  return (


    <div className='h-full w-full p-8 bg-[#0F172A] text-white'>
      <h1 className='text-center text-5xl mb-4 font-medium text-white'>
      Tic Tae Toe</h1>
      <div>
      
      <h1 className='text-center text-purple-400 text-uppercase text-[40px] h-4'>
        {winMessage ? (winMessage): ("")}
      </h1>
        <div className='grid grid-cols-3 gap-3 w-[50%] mx-auto md:w-[25%] mt-20'>
         
         {itemArray.map((item, index)=>(
          <div className="border border-white w-20 h-20 hover:bg-gray-700 flex items-center justify-center material-icons-outlined text-4xl cursor-pointer" key={index}>
          <Icon name={item}/></div>
         ))}
        </div>
          
        <div className='flex items-center justify-center mt-5'>Score goes here
        
        </div>
      </div>
    </div>

  )
}

export default App
