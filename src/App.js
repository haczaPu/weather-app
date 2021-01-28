import './App.css';
import React,  { useState } from 'react';

import Form from './components/Form';
import Result from './components/Result';

const App = () => {


  const [inputCity, setInputCity] = useState('');
  const [findCity, setFindCity] = useState('');


  return (
    <div className="App">
      <h1>Weather App</h1>
      <Form
        inputCity={inputCity}
        setInputCity={setInputCity}
        findCity={findCity}
        setFindCity={setFindCity}
      />
      <Result
        findCity={findCity}
      />
    </div>
  );
}

export default App;
