import { useState, useCallback, useEffect } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numbers) str += "0123456789"
    if (symbols) str += "!@#$%^&*()_+[]{}|;:,.<>?`~"  
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length+1)
      pass += str.charAt(char) 
    }
    setPassword(pass)


  }, [length, numbers, symbols, setPassword])

useEffect(() => {
  passwordGenerator()
}, [length, numbers, symbols, passwordGenerator]) 


  return (
    <>
     
      <div className="bg-color w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-white p-5">

        <h1 className='text-center mb-3'>Password Generator</h1>


        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3 bg-amber-50 text-gray-900'
          placeholder='Generated Password'
          readOnly
          />
          <button  className='px-2 btn shrink-0'>Copy</button>

        </div>

        <div className="flex text-sm-gap-x-2">
          <div className="flex items-center gap-x-1 mr-3">
            <input 
            type="range"
            min={6}
            max={30}
            value={length}
            id='lengthInput'
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label htmlFor='lengthInput' >Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1 mr-3">
            <input 
            type="checkbox"
            defaultChecked={numbers}
            id="numbersInput"
            onChange={() => {
              setNumbers((prev) => !prev);
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={symbols}
            id="symbolsInput"
            onChange={() => {
              setSymbols((prev) => !prev);
            }}
            />
            <label htmlFor="symbolsInput">Symbols</label>
          </div>
        </div>

      </div>

      
    </>
  )
}

export default App
