const initialState = {
    isLoading: false,
    isError: false,
    booksList: [],
    name: "Books",
};
export default (state = initialState, action) => {
    switch (action.type) {
        case 'ERROR_RECEIVE_BOOKS': {
            return {
              ...state,
              isError: true,
              isLoading: false,
            };
        }

        case 'REQUEST_BOOKS': {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case 'RECEIVE_BOOKS': {
            const {
                books,
            } = action;
            return {
                ...state,
                isError: false,
                isLoading: false,
                booksList: books,
            };
        }

        case 'DELETE_BOOK': {
            const bookId = action.payload;
            const updatedBooks = state.booksList.filter(book => book.id !== bookId);
            return {
                ...state,
                isError: false,
                isLoading: false,
                booksList: updatedBooks,
            };
        }

        case 'REQUEST_DELETE_BOOK': {
            return {
                ...state,
                isError: false,
                isLoading: true,
            }
        }

        case 'ERROR_DELETE_BOOK': {
            return {
                ...state,
                isError: true,
                isLoading: false,
            }
        }

        case 'CREATE_BOOK': {
            const newBook = {
                id: action.payload.bookId,
                author: action.payload.bookAuthor,
                title: action.payload.bookTitle,
            }

            const updatedBooks = state.booksList;
            updatedBooks.push(newBook);

            return {
                ...state,
                isLoading: false,
                isError: false,
                booksList: updatedBooks,
            }
        }

        case 'REQUEST_CREATE_BOOK': {
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        }

        case 'ERROR_CREATE_BOOK': {
            return {
                ...state,
                isError: true,
                isLoading: false,
            }
        }

        case 'UPDATE_BOOK': {
            const updatedBookId = action.payload.bookId;
            const updatedBookAuthor = action.payload.bookAuthor;
            const updatedBookTitle = action.payload.bookTitle;

            const updatedBooks = state.booksList.map(book => {
                if (book.id === updatedBookId) {
                    book.author = updatedBookAuthor;
                    book.title = updatedBookTitle;
                    return book;
                } else {
                    return book;
                }
            });
            return {
                ...state,
                isError: false,
                isLoading: false,
                booksList: updatedBooks,
            }
        }

        case 'REQUEST_UPDATE_BOOK': {
            return {
                ...state,
                isError: false,
                isLoading: true,
            }
        }

        case 'ERROR_UPDATE_BOOK': {
            return {
                ...state,
                isError: true,
                isLoading: false,
            }
        }

        default: return state;
    }
};
