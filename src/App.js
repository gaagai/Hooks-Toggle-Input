import React from 'react';
import Form from './Form';
import FormInputHook from './FormInputHook';
import './App.css';
import Toggler from './Toggler';

function App() {
  return (
    <div className="App">
      <Form />
      <FormInputHook />
      <Toggler />
    </div>
  );
}

export default App;
