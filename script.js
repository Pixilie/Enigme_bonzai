console.log('Script loaded');

const button = document.querySelector('input[type="button"]');
const input = document.querySelector('input[type="text"]');
const number = document.querySelector('.essais');
const result = document.querySelector('#valider .reponse_valide');
const code_img = document.querySelector('.code');
console.log(code_img)

const correction = ["basion", "cadeau", "fuji", "ligneux"];

let good_answers = 0;
let counter = 0;
let validé = []

const code = `
def dechiffrage_cesar_recursif(texte_chiffre, dec = 0):
    """
    Fonction récursive qui a pour but de renvoyer tous les différents décalages dans une liste.
    Malheureusement les instructions relatives aux variables ont été perdu" 
    """
    if dec == 26:
        return []
    else :
        texte = ""
        for caractere in texte_chiffre:
            lettre_dechiffree = (chr((ord(caractere)+ ... - ...)%26 +97))
            texte +=(...)
        return [texte] + ...


texte_chiffre = "usvwsm"
texte_dechiffre = dechiffrage_cesar_recursif(texte_chiffre)
print("déchiffrages possibles :", texte_dechiffre)`

function copy() {
    navigator.clipboard.writeText(code);
    alert("Code copié dans le presse-papier");
  } 

code_img.addEventListener('click', () => {
    copy()
})

button.addEventListener('click', () => {
    let input_value = input.value

    if (input_value === '') {
        alert('Veuillez entrer une réponse avant de valider')
    } else {
        counter = counter + 1
        number.textContent = `Nombre d'essais: ${counter}`
        
        if (correction.includes(input_value) && !validé.includes(input_value)) {
            if (correction.includes(input_value)) {
                good_answers = good_answers + 1
                result.textContent = `${good_answers}/${correction.length} réponses valides`
                validé.push(input_value)
                input_value = "";

                if (good_answers === correction.length) {
                    document.location.href = './termine/index.html'
                }
            }
        } else {
            alert('Mauvaise réponse ou réponse déjà validée ;)')
            input_value = "";
        }
    }
})