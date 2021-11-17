import React ,{useState} from 'react';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState{
  people:{
    age: number,
    name: string,
    url: string,
    note?: string
  }[]
}
 
function App() {
  const [people, setPeople]= useState <IState["people"]>([])
  return (
    <div className="App">
      <h1>People invited to my Party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
