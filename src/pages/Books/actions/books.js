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

const getBooksI = (booksCount) => new Promise((onSuccess) => {
    setTimeout(
        () => onSuccess(Array
            .from(new Array(booksCount).keys())
            .map(index => ({ name: `Book ${index}`}))),
        1000
    );
});

function getBooks() {
    return fetch('http://localhost:8080/api/books')
        .then(res => res.json());
}

const fetchBooks = (dispatch) => {
    dispatch(requestBooks()); // Повідомляю стору, що роблю запит користувачів
    return getBooks() // Викликаю функцію запиту студентів
        .then(books => dispatch(receiveBooks(books))) // Успіх
        .catch(() => dispatch(errorReceiveBooks())); // Помилка
};
export default {
    fetchBooks,
};
