import React from "react";
import {connect} from "react-redux";
import booksActions from '../actions/books';

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

    handleClick(bookId){
        booksActions.fetchDeleteBook(bookId)(this.props.dispatch);
    }

    render() {
        return(
            <div
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                {this.props.author} - "{this.props.title}"
                {this.state.mouseOnBook ? <button>Update</button> : null}
                {this.state.mouseOnBook ?
                    <button onClick={() => this.handleClick(this.props.id)}>Delete</button> : null}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({dispatch});

export default connect(mapDispatchToProps)(Book);