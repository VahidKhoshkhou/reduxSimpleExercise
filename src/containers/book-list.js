import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

/** 
  * we do not use default on this class because we want to 
  * export it as a container not an simple react component
  * the actual export default is used in the buttom of this file 
  */
export class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                key={book.title}
                onClick={() => this.props.selectBook(book)}
                 className="list-group-item">
                 {book.title}
                 </li>
            );
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}



function mapStateToProps(state) {
    // whenever is returned show up as props 
    // inside BookList 
    return {
        books: state.books
    };
}

/**
 * any thing returned from this function will end up as props 
 * in BookList container
 * 
 * @param {*} dispatch //
 */
function mapDispatchToProps(dispatch) {
    // whenever select has been called, the result should be 
    // passed to all reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}


/**
 * promote BookList from a Component to a container
 * it needs to know  this new dispatch method, selectBook,
 * make it available as a props 
 */
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
