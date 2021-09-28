let changePassBtn = document.querySelector('.change-pass-btn'); // Кнопка "Сменить пароль"
let closeBtn = document.querySelector('.close'); // Кнопка "Закрыть"
let backBtn = document.querySelector('.back'); // Кнопка "Назад"
let modalChangePass = document.querySelector('.modal-change-pass'); // Оверлей
let closeModalBtn = document.querySelector('.close-modal-btn'); // Крестик оверлея

closeBtn.onclick = function() { 
 	modalChangePass.style.display = 'none';
}
backBtn.onclick = function() {
 	modalChangePass.style.display = 'none';
}
window.onclick = function(event) {
  if (event.target == modalChangePass) {
    modalChangePass.style.display = "none";
  }
}
changePassBtn.onclick = function() {
 	modalChangePass.style.display = 'flex';
}
closeModalBtn.onclick = function() {
 	modalChangePass.style.display = 'none';
}