import axios from 'axios';
import { useState } from 'react';
import DisplaySimpson from './components/citationSimpson';


import './App.css';

const sampleSimpsonCharacter = 
  {
  "quote": "By chilling my loins I increase the chances of impregnating my wife.",
  "character": "Apu Nahasapeemapetilon",
  "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  "characterDirection": "Left"
  }


function App() {
  const [simpson, setSimpson] = useState(sampleSimpsonCharacter);

  const getNewSimpson = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => {
        console.log(response.data[0]);
      // Use this data to update the state
      setSimpson(response.data[0])
      })   
  };


  return (
    <div className="App">
      <button type="button" onClick={getNewSimpson}>New Simpson</button>
      <DisplaySimpson simpson={simpson} setSimpson={setSimpson}/>
    </div>
  );
}

export default App;
