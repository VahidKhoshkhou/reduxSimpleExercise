/**
 * this is an action creator ,
 * it needs to return an action, an object with
 * a type property.
 * @param {*} book 
 */
export function selectBook(book){
   // action must have a type and sometimes
   // it has also a payload 
    return {
      type: 'BOOK_SELECTED',
      payload: book
    }
}