const BASE_URL = 'http://localhost:3000';

export function getAllBooks() {
  const END_POINT = '/books';
  const url = `${BASE_URL}${END_POINT}`;

  const params = {};
  const headers = {};

  return fetch(url, { params, headers })
    .then(res => res.json())
    .catch(err => {
      console.log(err);
    });
}

export function createBook(book) {
  const END_POINT = '/books';
  const url = BASE_URL + END_POINT;

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  return fetch(url, options)
    .then(res => res.json())
    .catch(err => {
      console.log(err);
    });
}

function updateBook() {}

function resetBook() {}

function deleteBook() {}
