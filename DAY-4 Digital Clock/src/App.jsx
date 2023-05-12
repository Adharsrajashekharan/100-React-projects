
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'

function App() {


  const [hour, sethour] = useState(0)
  const [minute, setminute] = useState(0)
  const [second, setsecond] = useState(0)


useEffect(()=>{
const interval=setInterval(()=>{
  let hours=new Date().getHours()
  let min=new Date().getMinutes()
  let sec=new Date().getSeconds()
  sethour(hours)
  setminute(min)
  setsecond(sec)
},1000);
return ()=>clearInterval(interval)
},[])


  return (
    <>
    <div className='bg-red-500'>

    <h1 className='text-5xl text-white'>Digital Clock</h1>

    <div className='flex gap-6 p-28 '>
      <div className='border  text-white p-10 text-5xl'>{hour}</div>
      <div className='border  p-10 text-white text-5xl'>{minute}</div>
      <div className='border  p-10 text-white text-5xl'>{second}</div>

  
    </div>
    </div>

    </>
  )
}

export default App
