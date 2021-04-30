/* 
* Action
* - Object with 2 keys: values
* - action type and payload/data
*- dispatch means an action is going to trigger
*/

export const  fetchPost = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        //dispatch works like a return
        dispatch({
            type: 'FETCH_POSTS',
            payload: posts
        })
    })
}

/* export const  newPost = (postdata) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        //dispatch works like a return
        dispatch({
            type: 'FETCH_POSTS',
            payload: posts
        })
    })
} */