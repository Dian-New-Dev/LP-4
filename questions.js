const questions = document.querySelectorAll('.question-wrapper');
const answers = document.querySelectorAll('.answer');
const arrow = document.querySelectorAll('.answer-arrow');

for (let i = 0; i < 5; i++) {
    questions[i].addEventListener('click', function() {
        mostrarResposta(answers[i], arrow[i])
    })
}

function mostrarResposta(resposta, seta) {
    resposta.classList.toggle('answer');
    resposta.classList.toggle('answer-show');
    seta.classList.toggle('answer-arrow');
    seta.classList.toggle('answer-arrow-up');

    
}