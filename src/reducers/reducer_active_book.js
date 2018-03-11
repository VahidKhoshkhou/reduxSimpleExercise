/**
 * 
 * @param {*} state is an argument  is not application state,
 *                  only state this reducer is responsible for
 *                  and should not be undefined , initial case 
 *                  maybe undefined so we pass null as default  
 * @param {*} action 
 */
export default function(state = null, action){
    switch(action.type){
        case 'BOOK_SELECTED':
        return action.payload;
    }
    return state;
}