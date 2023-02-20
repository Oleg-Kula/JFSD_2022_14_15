import React from "react";
import {connect} from "react-redux";
import booksActions from '../actions/books';
import {Link} from "react-router-dom";
import * as PAGES from "../../../constants/pages";


class Book extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            mouseOnBook: false,
        }
    }

    handleMouseEnter = () => {
        this.setState({
            mouseOnBook : true,
        })
    }

    handleMouseLeave= () =>{
        this.setState({
            mouseOnBook : false,
        })
    }

    handleDeleteButtonClick(bookId){
        booksActions.fetchDeleteBook(bookId)(this.props.dispatch);
    }

    render() {
        return(
            <div
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                {this.props.author} - "{this.props.title}"
                {this.state.mouseOnBook ?
                    <Link to={location => ({
                        ...location,
                        pathname: `/${PAGES.BOOKS_FORM}`,
                        state: {
                            bookId: this.props.id,
                            bookAuthor: this.props.author,
                            bookTitle: this.props.title
                        }
                    })
                    }>
                        <button>Update</button>
                    </Link> : null}
                {this.state.mouseOnBook ?
                    <button onClick={() => this.handleDeleteButtonClick(this.props.id)}>Delete</button> : null}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({dispatch});

export default connect(mapDispatchToProps)(Book);