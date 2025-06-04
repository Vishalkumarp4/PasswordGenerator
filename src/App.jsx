import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LC, NC, SC, UC } from './Data/PassChar'

function App() {
  const [uppercase, setUppercase] = useState(false)
  const [lowercase, setLowercase] = useState(false)
  const [number, setNumber] = useState(false)
  const [symbol, setSymbol] = useState(false)
  const [passlen, SetPasslen]= useState(10)
  const [fpass , setPass]= useState('')

  

  let createPasword=()=>{
    let finalPass=""
    let charSet=""
    if(uppercase || lowercase || number || symbol ){
       if (uppercase) charSet+=UC;
       if(lowercase)  charSet+=LC;
       if(number)     charSet+=NC;
       if(symbol)     charSet+=SC;

       for ( let i=0; i<passlen; i++){
          finalPass += charSet.charAt(Math.floor(Math.random()*charSet.length)) 
       }
      
          setPass(finalPass)

    }
    else{
      alert("please select atleast one cheakbox")
    }
  }

  let copyPass=()=>{
    navigator.clipboard.writeText(fpass)
  }





  return (
    <>
      <div className='passbox'>
        <h2>Password generator</h2>
        
        <div className='passwordboxin'>
          <input type='text' value={fpass} readOnly /> <button onClick={copyPass}>copy</button>
        </div>
        <div className='passlenth'>
             <lebel>Password length</lebel>
             <input type='number' min={8} max={20} value={passlen}  onChange={(event)=>SetPasslen(event.target.value)} /> 
        </div>

        <div className='passlenth'>
             <lebel>Include Uppercase letter </lebel>
             <input type='checkbox' checked={uppercase} onChange={()=>setUppercase(!uppercase)}/> 
        </div>

         <div className='passlenth'>
             <lebel>Include lowercase letter </lebel>
             <input type='checkbox' checked={lowercase} onChange={()=>setLowercase(!lowercase)} /> 
        </div>

         <div className='passlenth'>
             <lebel>Include numbers </lebel>
             <input type='checkbox' checked={number} onChange={()=>setNumber(!number)} /> 
        </div>

         <div className='passlenth'>
             <lebel>Include symbols </lebel>
             <input type='checkbox' checked={symbol} onChange={()=>setSymbol(!symbol)} /> 
        </div>
        <div className='btn'>
          <button onClick={createPasword}> Generate password</button>
          
        </div>
      </div>
      
    </>
  )
}

export default App
