import React, { useState } from 'react';
import TeamForm from './components/TeamForm';
import Member from './components/Member';
import './App.css';


const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

function App() {
  


  

  const [team, setTeam] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  

  
  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    });
  }
  
  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    setTeam([newMember, ...team]);
    console.log(newMember);
    console.log(team);
    
  }

  console.log(team);

  

  return (
    <div className="App">
      <h1>Work In Progress</h1>
      <div>
        <TeamForm 
          values={formValues}
          update={updateForm}
          submit={submitForm}/>
          <Member />
        </div>
    </div>
  );
}

export default App;
