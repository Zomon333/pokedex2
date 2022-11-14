import * as React from 'react';

import { Ability, PokeProfile, Type} from './types';

export const PokeAbilities = ({data}) => {
    return (
        <div style={{marginTop:"1em", marginBottom:"1em"}}><h4>Abilities:</h4> {
            data.abilities.map((index: Ability)=>
                {return <div key={index.slot}>{index.ability.name}</div>;})
            }
        </div>
    );
}

export default PokeAbilities;