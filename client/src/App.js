import logo from './logo.svg';
import axios from 'axios';
import './App.css';

const URL = 'http://localhost:8080';

const apiCall = () => {
  axios.get(URL).then((data)=>{
    console.log(data);
  })
}

const apiAdvanceCall = () => {
    axios.get(URL+'/ingredientCategory').then((data)=>{
        console.log(data);
    })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={apiCall}>Make API Call</button>
        <button onClick={apiAdvanceCall}>Log all Ingredient Categories</button>
      </header>
    </div>
  );
}

export default App;
