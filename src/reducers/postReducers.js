// How to do something

/* 
* - reducer:
* - a function with 2 parameters(state = initial state, action): 
* - we can use JS switch
* - export the reducer
*/

/* 
* - actions:
    have type and payload
*/

const initialState =  {
    items: [], // many posts
    item: {} //single post
}

export default function (state=initialState, action) {
    
    switch (action.type) {
        case 'FETCH_POSTS':
            return {
                ...state,
                items: action.payload
            }

        case 'NEW_POSTS':
            return {
                ...state,
                item: action.payload
            }
    
        default:
            break;
    }
}