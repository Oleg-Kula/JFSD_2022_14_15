import React from 'react';
import {connect} from 'react-redux';
import booksActions from '../actions/books';
import * as PAGES from "../../../constants/pages";
import Link from "../../../components/Link";


class Books extends React.Component {

    componentDidMount() {
        booksActions.fetchBooks(this.props.dispatch);
    }

    handleMouseEnter(){
        this.setState({
            buttonsShow: true,
        })
    }

    handleMouseLeave(){
        this.setState({
            buttonsShow: false,
        })
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
                {this.props.books.isError &&
                <div>
                    Something went wrong :(
                </div>
                }
                {this.props.books.isLoading &&
                <div>
                    Loading...
                </div>
                }
                {this.props.books.booksList.map(book =>
                    <li key={book.id}
                        onMouseEnter={() => this.handleMouseEnter}
                        onMouseLeave={() => this.handleMouseLeave}
                    >
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
