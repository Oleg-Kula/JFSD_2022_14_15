import React from 'react';
import {connect} from 'react-redux';
import booksActions from '../actions/books';
import * as PAGES from "../../../constants/pages";
import Link from "../../../components/Link";


class Books extends React.Component {

    componentDidMount() {
        booksActions.fetchBooks(this.props.dispatch);
    }

    render() {
        console.log(this.props);
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
                {this.props.books.booksList.map(book =>
                    <li key={book.id}>
                        {book.author} - "{book.title}"
                    </li>)}
            </div>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    ...reduxState,
});
const mapDispatchToProps = dispatch => ({dispatch});
export default connect(mapReduxStateToProps, mapDispatchToProps)(Books);
