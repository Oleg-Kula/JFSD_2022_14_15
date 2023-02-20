import React from 'react';
import {connect} from 'react-redux';
import booksActions from '../actions/books';
import * as PAGES from "../../../constants/pages";
import Link from "../../../components/Link";
import Book from "../components/Book"


class Books extends React.Component {

    componentDidMount() {
        if(this.props.books.booksList.length === 0){
            booksActions.fetchBooks(this.props.dispatch);
        }
    }

    render() {
        return (
            <div>
                <Link
                    to={location => ({
                        ...location,
                        pathname: `/${PAGES.INITIAL}`
                    })
                    }>
                    Back
                </Link>
                <br/><br/>
                {this.props.books.isError &&
                <div style={{
                    color: "red",
                }}>
                    Something went wrong :(
                </div>
                }
                {this.props.books.isLoading &&
                <div style={{
                    color: "blue",
                }}>
                    In progress, please wait...
                </div>
                }
                {this.props.books.booksList.map(book =>
                    <div>
                        <Book id={book.id} title={book.title} author={book.author}/>
                    </div>)}
            </div>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    ...reduxState,
});

const mapDispatchToProps = dispatch => ({dispatch});

export default connect(mapReduxStateToProps, mapDispatchToProps)(Books);
