// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

    function callAPI(path) {
      {/*let request = new XMLHttpRequest();
      request.open("GET", `https://localhost:44375/${path}`);
      request.send();
      request.onload = () => {
        if (request.status === 200) {
            alert(request.response);
        } else {
            alert(`Error: ${request.status} ${request.statusText}`);
        }
      }
    }*/}

    {/*fetch(`https://localhost:44375/${path}`)
      .then(response => response.json())
      .then(setData)
  .catch(error => (console.log(error)));*/}
    
    useEffect(() => {
      fetch(`https://localhost:44375/${path}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
    }, []);
  }

  return (
    <div className="App">
      <button onClick={callAPI('books')}>Get Books</button>
      <button onClick={callAPI('authors')}>Get Authors</button>
      {/*<p style={{wordBreak: 'break-all'}}>{JSON.stringify(data)}</p>*/}
    </div>
  );
}

export default App;