import * as React from 'react';
import { useEffect, useState } from "react";

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import Button from '@mui/material/Button'
import Card from '@mui/material/Card';

import { PokeProfile} from './types';

import { PokeAbilities } from './PokeAbilities.tsx';
import { PokeTypes } from './PokeTypes.tsx';
import { PokeStats } from './PokeStats.tsx';
import { PokePanel } from './PokePanel.tsx';

/*
    A non-null initial state for PokeProfile
*/
const initialState: PokeProfile = {
    abilities: [],
    base_experience: 0,
    forms: [],
    game_indices: [],
    height: 0,
    held_items: [],
    id: 0,
    is_default: false,
    location_area_encounters: "",
    moves: [],
    name: "",
    order: 0,
    past_types: [],
    species: {
        name:"",
        url:""
    },
    sprites: [],
    stats: [],
    types: [],
    weight: 0,
};

/*
    The pokemon API we'll be querying from
    Node didn't seem to like having this in another file for some reason; it *absolutely refused* to detect it.
    Not sure as to why. For this reason, I've moved it to Pokemon.tsx as it seemed to be the next best option.
*/
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: builder => ({
    getPokemonById: builder.query({
      query: (id: string) => `pokemon/${id}`
    })
  })
})
export const { useGetPokemonByIdQuery } = pokemonApi

export const Pokemon = ({id})=>
{           
    const {data, error, isLoading} = useGetPokemonByIdQuery(id);

    const [cachedData, setCachedData] = useState(initialState);
    const [isReady, setIsReady] = useState(false);

    useEffect(()=>{
        setCachedData(initialState);
        (async()=>{await data})();
        setCachedData(data);
        setIsReady(true);
    },[data])

    return (

            <Card style={{backgroundColor:"lightgray" , padding:"0.4em", paddingBottom:"1.2em", margin:"3em", float:"left", width:"42vw"}}>
                <Card style={{padding:"1em"}}>
                    {(cachedData===undefined) ? "Loading..." : 
                    <>
                        <PokeStats data={cachedData} isReady={isReady} />
                        <PokeAbilities data={cachedData} />
                        <PokeTypes data={cachedData} />


                        <PokePanel data={cachedData} />
                    </>
                    }
                </Card>
            </Card>

    );
}

export default Pokemon;