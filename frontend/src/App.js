// styles
import '../src/styles/home.scss';
import '../src/styles/header.scss';
import '../src/styles/task.scss';
import '../src/styles/addtasks.scss';

// pages and components
import Home from './pages/Home'
import { useState } from 'react';

function App() {

  const [input , setInput] = useState('');
  const [todoArray, setToDoArray] = useState([]);

  return (
    <div className="App">

      <Home todoArray={todoArray} setToDoArray={setToDoArray} input={input} setInput={setInput}/>

    </div>
  );
}

export default App;
