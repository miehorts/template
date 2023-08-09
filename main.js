const information = document.querySelector('div.information');
//information.innerHTML = window.innerHeight;
const headerH = $('header').outerHeight();
const mainH = document.querySelector('div.main-back').offsetHeight;
const buttonH = document.querySelector('div.button-area').offsetHeight;
information.style.height
= (window.innerHeight - headerH - mainH - buttonH) + 'px';

const ekiList = [
    ...JreYamanote,
    ...JreNegishi,
    ...JreYokohama,
    ...JreNanbu,
    ...JreMusashino,
    ...JreKeiyou,
];

$('#throw-dice').on('click', (evt) => {
    const self = evt.target;
    $(self).hide();
    setTimeout(() => {                    slideOut(); }       );
    setTimeout(() => { updateMainPanel(); slideIn();  },  1000);
    setTimeout(() => {                    slideOut(); },  2000);
    setTimeout(() => { updateMainPanel(); slideIn();  },  3000);
    setTimeout(() => {                    slideOut(); },  4000);
    setTimeout(() => { updateMainPanel(); slideIn();  },  5000);
    setTimeout(() => {                    slideOut(); },  6000);
    setTimeout(() => { updateMainPanel(); slideIn();  },  7000);
    setTimeout(() => {                    slideOut(); },  8000);
    setTimeout(() => { updateMainPanel(); slideIn();  },  9000);
    setTimeout(() => { $(self).show();                }, 10000);
});

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

function updateMainPanel() {
    const next = randomEki();
    $('span.ekimeiKanj').text(next.ekimeiKanj);
    $('span.ekimeiKana').text(next.ekimeiKana);
    $('span.ekimeiRoma').text(next.ekimeiRoma);
    $('span.compName'  ).text(next.compName  );
    $('span.lineName'  ).text(next.lineName  );
    $('span.sttnAddr'  ).text(next.sttnAddr  );
}

function randomEki() {
    return ekiList[Math.floor(Math.random() * ekiList.length)];
}
