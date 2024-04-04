const setaEsquerda = document.querySelector('.arrow-left');
const setaDireita = document.querySelector('.arrow-right');
const dobra1 = document.querySelector('.dobra1-titulo');
const h1 = document.getElementById('switchable-title');
const h2 = document.getElementById('switchable-subtitle');


setaEsquerda.addEventListener('click', function() {
    setaEsquerda.style.transform = 'scale(1.2)';

    setTimeout(function() {
        setaEsquerda.style.transform = 'scale(1)';
    }, 100);
    trocarDobra1();
});


setaDireita.addEventListener('click', function() {
    setaDireita.style.transform = 'scale(1.2)';

    setTimeout(function() {
        setaDireita.style.transform = 'scale(1)';
    }, 100); 
    trocarDobra1();
})

let i = 0;

function trocarDobra1() {
    i++
    if (i % 2 === 0) {
        dobra1.style.backgroundImage = "url('images/dobra1-A.webp')";
        h1.innerText = 'JUSTIÇA COM SERIEDADE E HUMANIDADE';
        h2.innerText = 'Servindo Campo Grande a Mais de 15 Anos';
    } else {
        dobra1.style.backgroundImage = "url('images/dobra1-B.webp')";
        h1.innerText = 'ADVOCACIA PROFISSIONAL E PRECISA';
        h2.innerText = 'Serviço eficiente, trato amigável';
    }
    
}
