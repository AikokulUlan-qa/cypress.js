describe('Покупка аватара', function () {
   it('автотест на покупку нового аватара для тренера', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type('MY E-MAIL');
        cy.get('#password').type('***');
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get(':nth-child(7) > .shop__button').click(); // Нажимаем купить
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); // Вводим номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225'); // Вводим срок
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // Вводим код
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Alla Ivanova'); // Пишем ФИО
        cy.get('.pay-btn').click(); // Нажимаем оплатить
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__success1').contains('Покупка прошла успешно'); // Совп. текст 
        cy.get('.payment__adv').click(); // Вернуться в магазин
        
    })
})


