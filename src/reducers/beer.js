import beers from '../data/beers'
const initState = {
    beers: beers
}

// Action types
const SUBMIT_BEER = 'SUBMIT_BEER'

// Action creators
export const submitBeer = (val) => ({type: SUBMIT_BEER, payload: val})

export default (state = initState, action) => {
    switch (action.type) {
        case SUBMIT_BEER:
            const beer = action.payload
            beer.id = state.beers.length + 1
            beer.rating = 0
            return {...state, beers: state.beers.concat(beer)}
        default:
            return initState
    }
}