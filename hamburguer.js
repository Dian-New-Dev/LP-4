const hambLines = document.getElementsByClassName('hamb-lines');
const hambPanel = document.querySelector('.hamb-menu-panel');

let counter = 0;

for (let i = 0; i < 3; i++) {
    hambLines[i].addEventListener('click', function() {
        transformHamburguer()
    })

}

hambPanel.addEventListener('click', function() {
    transformHamburguer();
})

function transformHamburguer() {
    counter++
    if (counter % 2 === 0) {
        hambLines[0].style.transform = 'translateY(0px) rotate(0deg)';
        hambLines[1].style.width = '30px';
        hambLines[2].style.transform = 'translateY(0px) rotate(0deg)';
        if (window.innerWidth < 446) {
            hambPanel.style.right = '-400px';
        } else if (window.innerWidth > 446 & window.innerWidth < 1001) {
            hambPanel.style.right = '-1000px';
        }
        
    


    } else {
        hambLines[0].style.transform = 'translateY(7px) rotate(45deg)';
        hambLines[1].style.width = '0px';
        hambLines[2].style.transform = 'translateY(-7px) rotate(135deg)';
        hambPanel.style.right = '0px'
    }


}