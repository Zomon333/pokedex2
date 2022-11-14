import * as React from 'react';
import { useState } from "react";

import Button from '@mui/material/Button';

import PokePics from './PokePics.tsx';

export const PokePanel = ({data})=> {
    const [gen, setGen] = useState(1);

    return (<div style={{marginTop: "-13em", float:"right"}}>
        <Button style={{margin:"0.4em", padding:"0.4em"}} variant="contained" onClick={()=>{setGen(1)}}>1</Button>
        <Button style={{margin:"0.4em", padding:"0.4em"}} variant="contained" onClick={()=>{setGen(2)}}>2</Button>
        <Button style={{margin:"0.4em", padding:"0.4em"}} variant="contained" onClick={()=>{setGen(3)}}>3</Button>
        <Button style={{margin:"0.4em", padding:"0.4em"}} variant="contained" onClick={()=>{setGen(4)}}>4</Button>
        <Button style={{margin:"0.4em", padding:"0.4em"}} variant="contained" onClick={()=>{setGen(5)}}>5</Button>
        <Button style={{margin:"0.4em", padding:"0.4em"}} variant="contained" onClick={()=>{setGen(6)}}>6</Button>

        <br />

        <PokePics gen={gen} data={data} />

    </div>);
}

export default PokePanel;