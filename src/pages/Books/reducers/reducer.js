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
        default: return state;
    }
};
