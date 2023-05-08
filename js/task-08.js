// Напиши скрипт управління формою логіна.

/* <form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form> */

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const refs = {
    loginForm: document.querySelector('.login-form'),
    
};

refs.loginForm.addEventListener('submit', handleLoginFormSubmit);

function handleLoginFormSubmit(event)  {
    event.preventDefault();

    // console.log(event.currentTarget.elements.email.value);
    // console.log(event.currentTarget.elements.password.value);
    
    if (event.currentTarget.elements.email.value === '' ||
        event.currentTarget.elements.password.value === '')
    {
    alert('All fields are marked to be filled!');
        return;
    } else {
        const formData = new FormData(event.currentTarget);
        formData.forEach((value, name) => {
        console.log(name, ':', value);
        form.reset();
    });
}

};