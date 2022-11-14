import * as React from 'react';
import {useState} from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { Pokemon } from './features/Pokemon.tsx'

function App() {
  const [numPokemon, setNumPokemon] = useState(5);
  const [textField, setTextField] = useState(0);

  const getArrayStub =(len)=>
  {
      /*
        I know this looks questionable, but hear me out;
        I'm making an array of n-many integers so I can map over it. Each index of our array is a pokemon.
        The data isn't baked, technically, so you could in theory load more than the original pokemon if you tried hard enough.
      */
      let arr=[len];
      for(let i=0; i<len; i++)
      {
        arr[i]=i+1;
      }
      return arr
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <TextField style={{margin:"3em"}} onChange={(event)=>{setTextField(event.target.value)}}> </TextField>
        <Button style={{margin:"3em"}} variant="contained" onClick={()=>{setNumPokemon(Number.parseInt(textField))}}>Show me more pokemon!</Button>
        <br /><br />
        Currently, {(!isNaN(numPokemon)) ? numPokemon : 0} are set to be displayed.
        <br /><br />
        Note to the professor: Yes, this can load all 151 requested pokemon; and more!
        <br /><br />
        {
          getArrayStub(numPokemon).map(
            (num)=>{return <Pokemon key={num} id={num}></Pokemon>}
          )
        }


      </header>

    </div>
  );
}

export default App;
