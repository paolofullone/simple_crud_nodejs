import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [attr1, setAttr1] = useState(0);
  const [attr2, setAttr2] = useState(0);
  const [attr3, setAttr3] = useState(0);
  const [chars, setChars] = useState([]);

  const addChar = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      attr1: attr1,
      attr2: attr2,
      attr3: attr3,
    }).then(() => {
      setChars([
        ...chars,
        {
          name: name,
          attr1: attr1,
          attr2: attr2,
          attr3: attr3,
        }
      ]);
    }
    ).catch(err => {
      console.log(err);
    }
    );
  }
  
  return (

    <div className='container'>
      <form>
        <label>name
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <input type='number' value={attr1} onChange={(e) => setAttr1(e.target.value)} />
        <input type='number' value={attr2} onChange={(e) => setAttr2(e.target.value)} />
        <input type='number' value={attr3} onChange={(e) => setAttr3(e.target.value)} />
        <button type="button" onClick={addChar}>Add Character</button>
      </form>
    </div>
  );
}

export default App;

