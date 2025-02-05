// Cotação de Moedas do dia (hipotéticos)
const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

// Obtendo os elementos do formulário
const form = document.querySelector('form');
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const footer = document.querySelector('main footer');
const description = document.getElementById('description');
const result = document.getElementById('result');

// Manipulando o input amount para receber somente números.
amount.addEventListener('input', () => {
    const hasCharacterRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharacterRegex, '');
})

// Capturando evento de submit do formulario
form.onsubmit = () => {
    event.preventDefault();

    switch (currency.value) {
        case 'USD':
            convertCurrency(amount.value, USD, "US$");
            break;
        case 'EUR':
            convertCurrency(amount.value, EUR, "€");
            break;
        case 'GBP':
            convertCurrency(amount.value, GBP, "£");
            break;
    }
}

// função para converter a moeda
function convertCurrency(amount, price, symbol) {
    try {
        description.textContent = `${symbol} 1 = ${price}`;

        // calcula o total da conversão
        let total = String(amount * price).replace('.', ',');
        // exibe o resultado total
        result.textContent = `R$ ${total}`;

        // aplica a classe que exibe o footer com o resultado
        footer.classList.add('show-result');
    } catch (error) {
        // remove a classe que exibe o footer com o resultado
        footer.classList.remove('show-result');
        alert('Ocorreu um erro durante a conversão de moeda.');
    }
}

// exibindo a cotação da moeda

