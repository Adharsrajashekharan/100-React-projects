
import { useState } from 'react'
import './App.css'

function App() {
  const[input,setInput]=useState("")
  const [newly,setNewly]=useState([])
  const [count,setCount]=useState(0)
  const [random,setRandom]=useState(0)
const [text,setText]=useState('')
  function getRandomNumber() {
    return Math.floor(Math.random() * 101); // Returns a random integer between 0 and 100
  }

const setme=()=>{
setRandom(getRandomNumber())
  
if(random ==input){
setText("yay you found it")
}

  setCount(count+1)
  const obj={
    value:input
  }
  setNewly([...newly,obj])
  setInput("")



}
  return (
    <>
  {text?"yay you found it":<>
  <h1 className='p-2  bg-red-500'>Guess any number between 1 and 100</h1>
    <br />
    <input type="number" value={input} onChange={(e)=>setInput(e.target.value)}  />
    <button className='p-2' onClick={()=>setme()}>Guess</button>
   <h1 className="">Guessed Value</h1> 
   {newly.map((m)=>(
    <div className=''>
      <h1>{m.value}</h1>

    </div>
   ))}
   <h1>No of Guesses{count}</h1>
   This is the next random value
<h1>{random}</h1>

  </>}

    </>
  )
}

export default App
