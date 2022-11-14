import * as React from 'react';

export const PokePics = ({gen, data})=>
{
    const getUrl=(gen, data)=>{
        switch(gen)
        {
            case 1:
                return ("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/".concat(data.id,".png"))
            case 2:
                return ("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/".concat(data.id,".png"))
            case 3:
                return ("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/".concat(data.id,".png"))
            case 4:
                return ("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/".concat(data.id,".png"))
            case 5:
                return ("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/".concat(data.id,".png"))
            case 6:
                return ("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/".concat(data.id,".png"))
            default:
                return ("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(data.id,".png"));
        }
    }

    return <img style={{marginRight:"7em", float: "right", width:"15em"}} src={getUrl(gen, data)} />;
}

export default PokePics;