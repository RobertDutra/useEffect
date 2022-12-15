import { useState, useEffect } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [superDev, setSuperDev] = useState(false);
  const [heart, setHeart] = useState('❤');
  function handleCounter(){
    setCount(count+1);
  }

  document.title = `${count}`;

  
  useEffect(() => {
    if(count >= 5){
      setSuperDev(true);
      setHeart('💖');
    }  
  }, [count]);
  
  useEffect(() => {
    if(count >= 10){
      setSuperDev(true);
      setHeart('🧡');
    }  
  }, [count]);
  
  useEffect(() => {
    if(count >= 15){
      setSuperDev(true);
      setHeart('💛');
    }  
  }, [count]);
 
  useEffect(() => {
    if(count >= 20){
      setSuperDev(true);
      setHeart('💚');
    }  
  }, [count]);
  
  useEffect(() => {
    if(count >= 25){
      setSuperDev(true);
      setHeart('💙');
    }  
  }, [count]);
 
  useEffect(() => {
    if(count >= 30){
      setSuperDev(true);
      setHeart('💜');
    }  
  }, [count]);
  
  useEffect(() => {
    if(count >= 35){
      setSuperDev(true);
      setHeart('🖤');
    }  
  }, [count]);
  

 

  return (
    <div className="App">
      {superDev ? <h1>Super Dev</h1> : <h1>Micro Dev</h1>  }
      <p>{heart}{count}</p>
      <button onClick={handleCounter}>Curtidas</button>
    </div>
  )
}

export default App
