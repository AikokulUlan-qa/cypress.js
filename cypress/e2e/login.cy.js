describe('Автотесты на форму логина', function () {
    it('Верный логин, верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Посетили сайт
         cy.get('#mail').type('MY E-MAIL'); // Ввели логин
         cy.get('#pass').type('***'); // Ввели пароль
         cy.get('#loginButton').click(); // Нажали войти
         cy.get('#messageHeader').should('be.visible'); // Проверка что текст виден
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Совп. текст   
     })
})
describe('Автотесты на форму пароля', function () {
    it('Восстановление пароля', function () {
         cy.visit('https://login.qa.studio/'); // Посетили сайт
         cy.get('#forgotEmailButton').click(); // Нажали на кн. забыли пароль
         cy.get('#mailForgot').type('MY E-MAIL'); // Ввели логин
         cy.get('#restoreEmailButton').click(); // отправили код на почту
         cy.get('#message').contains('Успешно отправили пароль на e-mail'); // Совп. текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка, что крестик видимый

     })
})
describe('Верный логин и неверный пароль', function () {
    it('Верный логин, неверный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Посетили сайт
         cy.get('#mail').type('MY E-MAIL'); // Ввели логин
         cy.get('#loginButton').should('be.disabled'); // кнопка войти некликабельна
         cy.get('#pass').type('***'); // Ввели неверный пароль
         cy.get('#loginButton').should('be.enabled'); // кнопка войти кликабельна
         cy.get('#loginButton').click(); // Нажали войти
         cy.get('#messageHeader').should('be.visible'); // Проверка что текст виден
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Совп. текст

     })
})
describe('Неверный логин и верный пароль', function () {
    it('Неверный логин, верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Посетили сайт
         cy.get('#mail').type('MY E-MAIL'); // Ввели неверный логин
         cy.get('#loginButton').should('be.disabled'); // кнопка войти некликабельна
         cy.get('#pass').type('***'); // Ввели пароль
         cy.get('#loginButton').should('be.enabled'); // кнопка войти кликабельна
         cy.get('#loginButton').click(); // Нажали войти
         cy.get('#messageHeader').should('be.visible'); // Проверка что текст виден
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Совп. текст

     })
})
describe('Проверка на негативный кейс валидации', function () {
    it('Неверный логин без @, верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Посетили сайт
         cy.get('#mail').type('MY E-MAIL'); // Ввели логин без @
         cy.get('#loginButton').should('be.disabled'); // кнопка войти некликабельна
         cy.get('#pass').type('***'); // Ввели пароль
         cy.get('#loginButton').should('be.enabled'); // кнопка войти кликабельна
         cy.get('#loginButton').click(); // Нажали войти
         cy.get('#messageHeader').should('be.visible'); // Проверка что текст виден
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Совп. текст   
     })
})
describe('Проверка на приведение к строчным буквам в логине', function () {
    it('Неверный логин без @, верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Посетили сайт
         cy.get('#mail').type('MY E-MAIL'); // Ввели логин большой буквы
         cy.get('#loginButton').should('be.disabled'); // кнопка войти некликабельна
         cy.get('#pass').type('***'); // Ввели пароль
         cy.get('#loginButton').should('be.enabled'); // кнопка войти кликабельна
         cy.get('#loginButton').click(); // Нажали войти
         cy.get('#messageHeader').should('be.visible'); // Проверка что текст виден
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Совп. текст   
     })
})

