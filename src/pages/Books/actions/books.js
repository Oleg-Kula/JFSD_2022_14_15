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
//функция getBooks для запросов на сервер
/**
 function getBooks() {
    return fetch('http://localhost8080/api/books')
        .then(res => res.json());
}
 **/

const fetchBooks = (dispatch) => {
    dispatch(requestBooks()); // Повідомляю стору, що роблю запит користувачів
    return getBooks() // Викликаю функцію запиту студентів
        .then(books => dispatch(receiveBooks(books))) // Успіх
        .catch(() => dispatch(errorReceiveBooks())); // Помилка
};
export default {
    fetchBooks,
};
