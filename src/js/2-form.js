const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

function readFormData(form) {
  const message = form.message.value.trim();
  const email = form.email.value.trim();
  return {
    email,
    message,
  };
}

form.addEventListener('input', event => {
  const data = readFormData(event.currentTarget);
  const jsonData = JSON.stringify(data);
  localStorage.setItem(STORAGE_KEY, jsonData);
});

function getLocalStorageData() {
  //функція отримання данних з локального сховища
  const rowData = localStorage.getItem(STORAGE_KEY);
  const data = JSON.parse(rowData);
  return data;
}

if (getLocalStorageData() !== null) {
  //перевірка якщо є дані, то заповнюємо інпути
  form.email.value = getLocalStorageData().email;
  form.message.value = getLocalStorageData().message;
}

form.addEventListener('submit', event => {
  event.preventDefault(); // скидаємо значення за замовчуванням
  const email = event.target.elements.email.value;
  const message = event.target.elements.message.value;

  if (email === '' || message === '') {
    //якщо хоч одне поле не заповнене виводимо повідомлення про необхідність заповнення всіх полів
    return alert('All form fields must be filled in');
  }
  if (getLocalStorageData() !== null) {
    //перевірка якщо є дані, то виводимо в консоль
    console.log(getLocalStorageData());
  }

  localStorage.removeItem(STORAGE_KEY); //очищаємо локальне сховище
  form.reset(); // очищаємо дані форми
});
