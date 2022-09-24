import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [userCity, setUserCity] = useState("");

  useEffect( ()=>{
    axios.get()
  }
  )

  function handleForm(e) {
    e.preventDefault();
    console.log("inputValue : ", inputValue);

    if(!inputValue){
      console.log("Filled is empty...");
      return;
    }
  }
  return (
    <div className="weather-app">
      <form onSubmit={handleForm}>
      <input type="text" placeholder='Enter City Name...' value={inputValue}
      onChange={(e)=> {setInputValue(e.target.value)}} 
      />
      </form>
    </div>
  );
}

export default App;
