import { useState } from 'react'
import axios from 'axios';
import './App.css'


function App() {
  const [data, setData] = useState('');
  const [id, setID] = useState('');
  
  const getData = async () =>{
    try{
      const response = await axios.get("https://api.adviceslip.com/advice");
      setData(response.data.slip.advice);
      setID(response.data.slip.id);
    } catch (error){
      console.log(error.response);
    }
  }

getData();
  return (
    <>
    <div className='box'>
      <p>ADVICE #{id}</p>
      <h1>"{data}"</h1>
    </div>
    </>
  )
}

export default App
