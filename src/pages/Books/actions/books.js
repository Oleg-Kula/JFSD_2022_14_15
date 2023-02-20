const receiveBooks = books => ({
    books,
    type: 'RECEIVE_BOOKS'
});

const requestBooks = () => ({
    type: 'REQUEST_BOOKS'
});

const errorReceiveBooks = () => ({
    type: 'ERROR_RECEIVE_BOOKS'
});

const deleteBook = (bookId) => ({
   type: 'DELETE_BOOK',
   payload: bookId,
});

const errorDeleteBook = () => ({
   type: 'ERROR_DELETE_BOOK',
});

const updateBook = (bookId, bookAuthor, bookTitle) => ({
    type: 'UPDATE_BOOK',
    payload: {
        bookId: bookId,
        bookAuthor: bookAuthor,
        bookTitle: bookTitle
    }
});

const errorUpdateBook = () => ({
   type: 'ERROR_UPDATE_BOOK',
});

//функция getBooks для имитации ответа от сервера
const getBooks = () => new Promise((onSuccess) => {
    setTimeout(
        () => onSuccess(Array
            .from(new Array(10).keys())
            .map(index => ({
                id: `${index}`,
                title: `Book ${index}`,
                author: `Author ${index}`,
            }))),
        1000
    );
});

//функция getBooks для запросов на BE
/**
const getBooks = () => {
    return fetch('http://localhost:8080/api/books')
        .then(res => res.json());
};
 **/

//функция deleteBook для запросов на BE
//также работает как заглушка(через catch), если BE не подключен
const fetchDeleteBook = (bookId) => (dispatch) => {
  return  fetch('http://localhost:8080/api/books/' + bookId, {
      method: 'DELETE',
  })
      .then(() => dispatch(deleteBook(bookId)))
      //.catch(() => dispatch(errorDeleteBook()))
      .catch(() => dispatch(deleteBook(bookId)));
};

//функция updateBook для запросов на BE
//также работает как заглушка(через catch), если BE не подключен
const fetchUpdateBook = (bookId, bookAuthor, bookTitle) => (dispatch) => {
    return fetch('http://localhost:8080/api/books/' + bookId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            author: bookAuthor,
            title: bookTitle,
        })

    })
        .then(() => dispatch(updateBook(bookId, bookAuthor, bookTitle)))
        //.catch(() => dispatch(errorUpdateBook()))
        .catch(() => dispatch(updateBook(bookId, bookAuthor, bookTitle)));
}

const fetchBooks = (dispatch) => {
    dispatch(requestBooks());
    return getBooks()
        .then(books => dispatch(receiveBooks(books)))
        .catch(() => dispatch(errorReceiveBooks()));
};

export default {
    fetchBooks,
    fetchDeleteBook,
    fetchUpdateBook
};
