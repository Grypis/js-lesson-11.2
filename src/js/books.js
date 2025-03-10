import { getAllBooks, createBook } from './modules/booksAPI';

const refs = {
  createFormElem: document.querySelector('.js-create-form'),
  updateFormElem: document.querySelector('.js-update-form'),
  resetFormElem: document.querySelector('.js-reset-form'),
  deleteFormElem: document.querySelector('.js-delete-form'),
  bookListElem: document.querySelector('.js-article-list'),
};

//! ===============================================
refs.createFormElem.addEventListener('submit', onBookCreate);
refs.updateFormElem.addEventListener('submit', onBookUpdate);
refs.resetFormElem.addEventListener('submit', onBookReset);
refs.deleteFormElem.addEventListener('submit', onBookDelete);

function onBookCreate(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  const book = {
    title: formData.get('bookTitle'),
    desc: formData.get('bookDesc'),
    author: formData.get('bookAuthor'),
    rating: Math.round(Math.random() * 10),
    price: Math.round(Math.random() * 1000),
  };

  createBook(book).then(createBook => {
    const markup = bookTemplate(createBook);
    refs.bookListElem.insertAdjacentHTML('afterbegin', markup);
  });
}

function onBookUpdate(e) {
  e.preventDefault();
}

function onBookReset(e) {
  e.preventDefault();
}

function onBookDelete(e) {
  e.preventDefault();
}
//! ===============================================
getAllBooks().then(data => {
  const markup = booksTemplate(data);
  refs.bookListElem.innerHTML = markup;
});

//! ===============================================
function bookTemplate({ id, title, author, desc, price, rating }) {
  return `
<li li class="book-item card" data-id="${id}">
  <img
    class="book-img"
    src="https://picsum.photos/1280/720?random=${id}"
    alt=""
  />

  <h5 class="book-title">${title}</h5>
  <h6>Author: ${author}</h6>
  <p class="book-desc">${desc}</p>

  <div class="book-info">
    <span>Price: ${price}</span>
    <span>Rating: ${rating}</span>
    <button data-type="remove-btn" data-id="${id}">Delete${id}</button>
  </div>
  </li>
</>`;
}

function booksTemplate(books) {
  return books.map(bookTemplate).reverse().join('');
}

//! ====================================
