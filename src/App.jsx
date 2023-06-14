import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'
import mobileSVG from "./images/pattern-divider-mobile.svg";
import desktopSVG from "./images/pattern-divider-desktop.svg";

function App() {
const [response, setResponse] = useState({slip: {} });
  
  const getData = async () =>{
    try{
      const response = await axios.get("https://api.adviceslip.com/advice");
      setResponse(response.data);
    } catch (error){
      console.log(error.response);
    }
  }
useEffect(() => {
    getData();
  }, []);
  return (
    <>
    <div className='box'>
      <p>ADVICE #{response.slip.id}</p>
      <h1>"{response.slip.advice}"</h1>
      <img className='mobileSVG' src={mobileSVG} alt="" />
      <img className='desktopSVG' src={desktopSVG} alt="" />
      
    </div>
    <div className="circle" onClick={getData}>
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
    </div>
    </>
  )
}

export default App
