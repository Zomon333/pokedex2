import * as React from 'react';

export const PokeStats = ({data, isReady })=>
{
    return (
        <div>
        <div><strong>Name:</strong> { isReady ? data.name : "Loading..."} </div>
        <div><strong>Number:</strong> { isReady ? data.id : "Loading..."} </div>
        <div><strong>Height:</strong> { isReady ? data.height : "Loading..."} </div>
        <div><strong>Weight (kg):</strong> { isReady ? data.weight : "Loading..."} </div>
        </div>
    );
}

export default PokeStats;