import React from "react";

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

    render() {
        return(
            <div
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                {this.props.author} - "{this.props.title}"
                {this.state.mouseOnBook ? <button>Update</button> : null}
                {this.state.mouseOnBook ? <button>Delete</button> : null}
            </div>
        );
    }
}

export default Book;