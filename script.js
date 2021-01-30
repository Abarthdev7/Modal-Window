'use strict';
//Declaring variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const openBtns = document.querySelectorAll('.show-modal');

//Removing the hidden class 
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
//Adding the hidden class 
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < openBtns.length; i++)
    openBtns[i].addEventListener('click', openModal)

closeBtn.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal);
