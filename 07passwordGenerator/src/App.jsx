import { useCallback, useState, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharacters, setSpecialCharacters] = useState(false);
  const [password, setPassword] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);


  //useRef hook

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (specialCharacters) str += "!@#$%^&*()+_{}:;'|~.,[]`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [numberAllowed, length, specialCharacters, setPassword])


  const copyPasswordToClipBoard  = useCallback(()=>{

    setIsButtonClicked(!isButtonClicked)
    
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,99)
    console.log(passwordRef)
    window.navigator.clipboard.writeText(password)
  },[password,isButtonClicked])
 

  useEffect(()=>{
    passwordGenerator()
    setIsButtonClicked(false)
  }, [length,numberAllowed,specialCharacters, passwordGenerator])

  
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipBoard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >{isButtonClicked?"Copied":"Copy"}</button>
        
    </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center mb-4 gap-x-1">
            <input type="range" name="" id="" min={8} max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1 mb-4'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1 mb-4'>
            <input
              type="checkbox"
              defaultChecked={specialCharacters}
              id='characterInput'
              onChange={() => {
                setSpecialCharacters((prev) => !prev)
              }} />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
