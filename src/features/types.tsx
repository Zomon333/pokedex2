/*
    Generic Stub
*/
export type Stub = {
    name: string;
    url: string;
};

/*
    Ability types
*/

export type Ability = {
    ability: Stub;
    is_hidden: boolean;
    slot: Number;
}

/*
    Indices
*/
export type Indices = {
    gameIndex: Number;
    version: Stub;
}

/*
    Items
*/
export type Item = {

}

/*
    Move
*/
export type Move = {
    move: Stub;
    version_group_details: {
        level_learned_at: Number;
        move_learn_method: Stub;
        version_group: Stub;
    }[];
}

/*
    Stat
*/

export type Stat = {
    base_stat: Number;
    effort: Number;
    stat: Stub;
}

/*
    Type
*/

export type Type = {
    slot: Number;
    type: Stub;
}

/*
----------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
export type PokeProfile = 
{
    abilities: Ability[];
    base_experience: Number;
    forms: Stub[];
    game_indices: Indices[];
    height: Number;
    held_items: Item[];
    id: Number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: Number;
    past_types: {}[];
    species: Stub;
    sprites: {}[];
    stats: Stat[];
    types: Type[];
    weight: Number;
}

export default PokeProfile;