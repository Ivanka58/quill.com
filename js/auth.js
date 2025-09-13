// js/auth.js
import { auth } from './firebaseConfig.js';
import {signInWithPhoneNumber, RecaptchaVerifier, ConfirmationResult} from "firebase/auth";

const phoneNumberInput = document.getElementById('phoneNumber');
const codeInput = document.getElementById('code');
const phoneScreen = document.getElementById('phoneScreen');
const codeScreen = document.getElementById('codeScreen');
const container = document.querySelector('.container');

window.recaptchaVerifier = new RecaptchaVerifier(auth, 'phoneScreenButton', {
  'size': 'invisible',
  'callback': (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    console.log("SUCCESS");
  }
});

// Функция, вызываемая при нажатии кнопки "Войти" на экране ввода номера
export async function goToCodeScreen() {
    const phoneNumber = phoneNumberInput.value;

    if (!phoneNumber) {
        alert("Пожалуйста, введите номер телефона.");
        return;
    }

    try {
      const appVerifier = window.recaptchaVerifier;
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      window.confirmationResult = confirmationResult;
      phoneScreen.style.display = 'none';
      codeScreen.style.display = 'flex';
    } catch (error) {
        console.error("Ошибка отправки SMS:", error);
        alert("Ошибка отправки SMS. Пожалуйста, попробуйте еще раз.");
    }
}

// Функция, вызываемая при нажатии кнопки "Войти" на экране ввода кода
export async function confirmCode() {
    const code = codeInput.value;

    if (!code) {
        alert("Пожалуйста, введите код подтверждения.");
        return;
    }

    try {
        const result = await window.confirmationResult.confirm(code);
        const user = result.user;
        console.log("Пользователь успешно вошел:", user);
        codeScreen.style.display = 'none';
        container.style.display = 'flex';
    } catch (error) {
        console.error("Ошибка входа:", error);
        alert("Неверный код подтверждения.");
    }
                                                 }
