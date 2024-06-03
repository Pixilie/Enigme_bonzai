const button = document.querySelector('input[type="button"]');
const input = document.querySelector('input[type="text"]');
const number = document.querySelector('.essais');
const result = document.querySelector('#valider .reponse_valide');

const correction = ["basion", "cadeau", "fuji", "ligneux"];

let good_answers = 0;
let counter = 0

button.addEventListener('click', () => {
    const input_value = input.value

    if (input_value === '') {
        alert('Veuillez entrer une réponse avant de valider')
    } else {
        counter = counter + 1
        number.textContent = `Nombre d'essais: ${counter}`
        
        if (correction.includes(input_value)) {
            if (correction.includes(input_value)) {
                good_answers = good_answers + 1
                result.textContent = `${good_answers}/${correction.length} réponses valides`

                if (good_answers === correction.length) {
                    document.location.href = './fini/reussi.html'
                }
            }
        } else {
            alert('Mauvaise réponse ;)')
        }
    }
})