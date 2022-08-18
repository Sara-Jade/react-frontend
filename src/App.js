// import logo from './logo.svg';
import './App.css';

function App() {
  function callAPI(path) {
    let request = new XMLHttpRequest();
    request.open("GET", `https://localhost:44375/${path}`);
    request.send();
    request.onload = () => {
      if (request.status === 200) {
          alert(request.response);
      } else {
          alert(`Error: ${request.status} ${request.statusText}`);
      }
    }
  }

  return (
    <div className="App">
      <button onclick={callAPI('books')}>Get Books</button>
      <button onclick={callAPI('authors')}>Get Authors</button>
    </div>
  );
}

export default App;
