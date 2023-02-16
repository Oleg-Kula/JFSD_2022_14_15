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

//функция getBooks для имитации ответа от сервера
/**
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
 **/

//функция getBooks для запросов на сервер
 function getBooks() {
    return fetch('http://localhost:8080/api/books')
        .then(res => res.json());
}


const deleteBook = (bookId) => (dispatch) => {
  return  fetch('http://localhost:8080/api/books/' + bookId, {
      method: 'DELETE',
  })
      .then(() => fetchBooks(dispatch)) ;
};

const fetchBooks = (dispatch) => {
    dispatch(requestBooks());
    return getBooks()
        .then(books => dispatch(receiveBooks(books)))
        .catch(() => dispatch(errorReceiveBooks()));
};

export default {
    fetchBooks,
    deleteBook,
};
