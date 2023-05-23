import './App.css';
import { useState } from 'react';
import Form from './Components/Form';
import Display from './Components/Display';

function App() {
  const [data, setData] = useState([]);
  
  const addData = (newData) => {
    setData((prevData) => [...prevData, newData]);
  }

  return (
    <div className="App">
      <Form addData={addData} />
      <Display data={data} />
    </div>
  );
}

export default App;
