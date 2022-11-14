import * as React from 'react';

export const PokeTypes = ({data})=>
{
return(
    <div >
        <strong>Types:</strong>  {data.types.map(
        (index)=>{return <span key={index.slot} style={{marginRight:"0.4em"}} className={"type ".concat(index.type.name)}></span>})}
    </div>
);
}

export default PokeTypes;