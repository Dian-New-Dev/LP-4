const setaEsquerda = document.querySelector('.arrow-left');
const setaDireita = document.querySelector('.arrow-right');
const dobra1 = document.querySelector('.dobra1-titulo');
const h1A = document.querySelector('.h1A');
const h2A = document.querySelector('.h2A');
const h1B = document.querySelector('.h1B');
const h2B = document.querySelector('.h2B');

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
        h1A.style.display = 'block';
        h1A.style.opacity = '1';
        h2A.style.display = 'block';
        h1B.style.display = 'none';
        h2B.style.display = 'none';
    } else {
        dobra1.style.backgroundImage = "url('images/dobra1-B.webp')";
        h1A.style.display = 'none';
        h2A.style.display = 'none';
        h1B.style.display = 'block';
        h2B.style.display = 'block';

    }
    
}
