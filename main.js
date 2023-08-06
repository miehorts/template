const information = document.querySelector('div.information');
information.innerHTML = window.innerHeight;
const mainH = document.querySelector('div.main-back').offsetHeight;
const buttonH = document.querySelector('div.button-area').offsetHeight;
information.style.height
= (window.innerHeight - mainH - buttonH) + 'px';

let inOut;

document.querySelector('#throw-dice').addEventListener('click',
    (evt) => {
        slideOut();
        inOut = 'out';
    }
);

document.querySelector('#throw-dice').addEventListener('animationend',
    (evt) => {
        if (inOut === 'in') {
            slideOut();
            inOut = 'out';
        }
        if (inOut === 'out') {
            slideIn();
            inOut = 'in';
        }
    }
);

function slideIn() {
    document.querySelector('div.main-fore').animate(
        [
            { transform: 'translateX(2000px)' },
            { transform: 'translateX(0)' },
        ],
        {
            duration: 1000,
        }
    );
}

function slideOut() {
    document.querySelector('div.main-fore').animate(
        [
            { transform: 'translateX(0)' },
            { transform: 'translateX(-2000px)' }
        ],
        {
            duration: 1000,
        }
    );
}
