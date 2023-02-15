import React from 'react';
import { connect } from 'react-redux';
import booksActions from '../actions/books';


class Books extends React.Component{

    componentDidMount() {
        booksActions.fetchBooks(this.props.dispatch);
    }

    render() {
        console.log(this.props);
        return(
            <div>
                {this.props.books.booksList.map(book =>
                    <li>{book.author} - "{book.title}"</li>)}
            </div>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    ...reduxState,
});
const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapReduxStateToProps, mapDispatchToProps)(Books);
