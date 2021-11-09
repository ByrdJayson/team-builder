import React, { useState } from 'react'
import TeamForm from './components/TeamForm'
import './App.css';

function App() {
  const [team, setTeam] = useState('');

  function onSubmit(evt){
    evt.preventDefault();

  }

  return (
    <div className="App">
      <h1>Work In Progress</h1>
      <TeamForm onSubmit={onSubmit}/>
    </div>
  );
}

export default App;
