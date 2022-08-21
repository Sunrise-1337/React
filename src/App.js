import './App.css';
import List from './components/List/List';
import TaskWrap from './components/TaskWrap/TaskWrap';
import React, {useState} from 'react';

function App() {
  const [name, setName] = useState(''),

  [list, setList] = useState([]),

  checkName = (name) => {
    if (typeof(localStorage.getItem(name)) != 'string') {
      localStorage.setItem(name, "[]")
      setList([]);
    } else {
      setList(JSON.parse(localStorage.getItem(name)));
    }
    document.querySelector('.TaskWrap').hidden = false
  },

  buttonClick = (name) =>{
    name.length > 2 ? checkName(name) : alert('Your name is too short')
  };

  return (
    <div className="App">
      <div className="Input">
        <input onChange={(e) => setName(e.target.value)} value={name} type="text" name="name" placeholder="Your name"/>
        <button onClick={() => {buttonClick(name)}}>Check</button>
      </div>
      <TaskWrap func={setList} name={name} list={list}/>
      <List list={list}/>
    </div>
  );
}

export default App;
