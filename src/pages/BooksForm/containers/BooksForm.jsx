import React from "react";
import {Link, withRouter} from "react-router-dom";
import * as PAGES from "../../../constants/pages";
import {connect} from "react-redux";
import booksActions from '../../Books/actions/books';

class BooksForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            bookAuthor: this.props.location.state.bookAuthor,
            bookTitle: this.props.location.state.bookTitle,
        }
    }

    handleSaveButtonClick(bookId){
        const { bookAuthor, bookTitle } = this.state;
        booksActions.fetchUpdateBook(bookId, bookAuthor, bookTitle)(this.props.dispatch);
    }

    handleAuthorChange = (event) => {
        this.setState({ bookAuthor: event.target.value });
    }

    handleTitleChange = (event) => {
        this.setState({ bookTitle: event.target.value });
    }

    render() {
        const { state } = this.props.location;
        const bookId = state ? state.bookId : null;
        const bookAuthor = state ? state.bookAuthor : null;
        const bookTitle = state ? state.bookTitle : null;
        return(
            <div>
                <br />
                <div style={{
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <input type={"text"} defaultValue={bookAuthor} id={"author"} onChange={this.handleAuthorChange}/>
                    <input type={"text"} defaultValue={bookTitle} id={"title"} onChange={this.handleTitleChange}/>
                    <div style={{
                        flexDirection: "row"
                    }}>
                        <Link to={location => ({
                            ...location,
                            pathname: `/${PAGES.BOOKS}`
                        })
                        }>
                            <button onClick={
                                () => this.handleSaveButtonClick(bookId)
                            }>
                                Save
                            </button>
                        </Link>
                        <Link to={location => ({
                                ...location,
                                pathname: `/${PAGES.BOOKS}`
                        })
                        }>
                                    <button>Cancel</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({dispatch});

export default connect(mapDispatchToProps)(withRouter(BooksForm));