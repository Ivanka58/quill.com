// js/main.js
import { goToCodeScreen, confirmCode } from './auth.js';

const phoneScreenButton = document.getElementById('phoneScreenButton');
const confirmCodeButton = document.getElementById('confirmCodeButton');
const phoneScreen = document.getElementById('phoneScreen');
const codeScreen = document.getElementById('codeScreen');
const container = document.querySelector('.container');
const chatPage = document.querySelector('.chat-page');

phoneScreenButton.addEventListener('click', goToCodeScreen);
confirmCodeButton.addEventListener('click', confirmCode);

// Скрываем все экраны, кроме экрана ввода номера телефона, при загрузке страницы
codeScreen.style.display = 'none';
container.style.display = 'none';
chatPage.style.display = 'none';
