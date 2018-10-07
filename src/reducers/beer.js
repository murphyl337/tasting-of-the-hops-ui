import beers from '../data/beers'
const initState = {
    beers: beers
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'SUBMIT_BEER':
            const beer = action.payload
            beer.id = state.beers.length + 1
            beer.rating = 0
            return {...state, beers: state.beers.concat(beer)}
    }
    return state
}