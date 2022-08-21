// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState(null);
  // const path = 'authors';
  const path = 'books';
  useEffect(() => {
    fetch(`https://localhost:44375/${path}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <p style={{wordBreak: 'break-all'}}>{JSON.stringify(data)}</p>
    </div>
  );
}

export default App;