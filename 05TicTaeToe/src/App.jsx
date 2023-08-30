import { useState } from 'react'
import './App.css'
import Icon from './components/icons.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const itemArray = new Array(9).fill("empty");

function App() {


  // const [itemArray, setItemArray] = useState(initialItemArray);
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");


  const reloadGame = ()=>{
    setIsCross(false);
    setWinMessage("");
    itemArray.fill('empty', 0, 9);
  }

  const winIndex = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,6,8],
    [0,4,8],
    [2,4,6],
  ];

  const checkIsWinner= () =>{
    winIndex.forEach((item,index)=>{
      const [a,b,c] = item;
      if(itemArray[a]==itemArray[b] && itemArray[a]==itemArray[c] && itemArray[a]!="empty"){
        setWinMessage(`${itemArray[a]} wins`)
        return toast(`${itemArray[a]} wins`, {type:"success"})
      }
    })
  }

  const changeItem = itemNumber =>{
    

    if(winMessage){
      return  toast(winMessage, {type:"success"})
    }
    
    if(itemArray[itemNumber] === "empty"){
      // const updatedItemArray = [...itemArray];
      itemArray[itemNumber] = isCross ? "cross": "circle"
      setIsCross(!isCross)
    }else{
      return toast("Already Filled", {type:"error"})
    }
    
    checkIsWinner();
  }

  return (


    <div className='h-full w-full p-8 bg-[#0F172A] text-white flex-row' >
      <h1 className='text-center text-5xl mb-4 font-medium text-white'>
      Tic Tae Toe</h1>
      <div>
      
      <div className='text-center text-[40px] h-20 mt-5'>
        {winMessage ? (
          <div className=' text-purple-400 flex justify-center items-center flex-col gap-3'>
         {winMessage}
         <button type="button" className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
         onClick={reloadGame}
         >Reload Game</button>
          </div>
        ): (
          <h1 className='text-center text-yellow-400 '>
            {isCross? "Cross": "Circle"} turns
          </h1>
        )}
      </div>

        <div className='grid grid-cols-3 gap-3 w-[50%] mx-auto md:w-[25%] mt-20'>
         
         {itemArray.map((item, index)=>(
          <div className="border border-white w-20  h-20 hover:bg-blue-600 flex items-center justify-center material-icons-outlined text-4xl cursor-pointer" key={index}
          onClick={()=>(changeItem(index))}
          >
          <Icon name={item}/>
          </div>
         ))}
        </div>
          
        <div className='flex items-center justify-center mt-5'>Score goes here
        
        </div>
      </div>
      <ToastContainer position='top-center'  autoClose={1000} /> 
    </div>

  )
}

export default App
