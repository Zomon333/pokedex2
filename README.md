# Readme!
We need a readme for this project!
"Did you include a README.md with explanations of your approach?"

### My Approach
For this project, I evaluated the task at hand and the most logical apparent data structure was. We often find ourselves needing to share state between numerous objects for communication; often in a structure that is not vertical! With this application, it is similar.

State management libraries like Redux offer solutions of "stores"-- which allow us to raise our state outside of our components. This makes sense for some things, like some of the data in my application. There are, however, better uses.

I chose that instead of raising the state outside of my components and making them all share a global store, it would make more sense to raise the API calls into the global store and implement an interface for the components to interact with. This is what I did.

I made pokemonApi, found in Pokemon.tsx, which provides the components with a query to get a pokemon by ID. I then implemented a Pokemon component capable of organizing it's data around a central ID passed to it as a prop. The pokemon component then uses the API to query it's relevant information upon update, and stores it so it does not need to reload it. 

The Pokemon component then divides it's backed up data between it's children components; a component to display Statistics, one for Type information, one for Abilities, one for control of the sprites and a sprite display module. 

In the final version, the Pokemon component organizes it's children components in order to create a finalized entry to display. This allows our API to fetch any pokemon at runtime, given its ID.

Our app component has some boilerplate to manage the number of Pokemon being showed at any given time. This is, of course, so that we don't load *everything at once*-- and so it's a bit more flexible.