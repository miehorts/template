const information = document.querySelector('div.information');
information.innerHTML = window.innerHeight;
const mainH = document.querySelector('div.main-back').offsetHeight;
const buttonH = document.querySelector('div.button-area').offsetHeight;
information.style.height
= (window.innerHeight - mainH - buttonH) + 'px';

document.querySelector('#throw-dice').addEventListener('click',
    (evt) => {
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
);