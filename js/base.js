document.addEventListener('DOMContentLoaded', function() { // когда весь HTML загружен

  setTimeout(function() { // таймер-планировщик
    document.getElementById('title').click(); // вызвать клик на кнопку
  }, 2000); // через две секунды

});


function doFunction() { // функция привязанная к клику на кнопку
  alert('Да, это работает!');
}

document.getElementsByTagName('h1')[0].style.color="pink";
