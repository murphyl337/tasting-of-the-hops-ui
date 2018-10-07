import reducer from './beer'

describe('Beer Reducers', () => {
    test('returns a state object', () => {
        const result = reducer(undefined, {type: 'ANYTHING'})
        expect(result).toBeDefined()        
    })

    test('adds a beer entry', () => {
        const startState = { beers: [] }
        const expectedState = { beers: [
            {
                id: 1,
                name: 'Bud Light',
                brewery: 'Walmart',
                submitter: 'Bobert Clyde',
                rating: 0
            }
        ] }
        const submitAction = { type: 'SUBMIT_BEER', payload: {
            name: 'Bud Light',
            brewery: 'Walmart',
            submitter: 'Bobert Clyde'
        } }
        const result = reducer(startState, submitAction)
        expect(result).toEqual(expectedState)
    })
})
