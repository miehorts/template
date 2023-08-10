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
    setTimeout(() => { updateMainPanel(); slideUp();  },      );
    /*
    setTimeout(() => {                    slideOut(); }       );
    setTimeout(() => { updateMainPanel(); slideOut(); },  1000);
    setTimeout(() => { updateMainPanel(); slideOut(); },  2000);
    setTimeout(() => { updateMainPanel(); slideOut(); },  3000);
    setTimeout(() => { updateMainPanel(); slideOut(); },  4000);
    setTimeout(() => { updateMainPanel(); slideEnd(); },  5000);
    */
    /*
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
    */
    setTimeout(() => { $(self).show();                },  5000);
});

function slideUp() {
    const $divMainFore = $('div.main-fore');
    $divMainFore[0].animate(
        [
            { transform: 'translateY(0)' },
            { transform: 'translateY(-600px)' }
        ],
        {
            duration: 1000,
        }
    );
    $divMainFore[1].animate(
        [
            { transform: 'translateY(0)' },
            { transform: 'translateY(-600px)' }
        ],
        {
            duration: 1000,
        }
    );
}

function slideIn() {
    $('div.main-fore')[1].animate(
        [
            { transform: 'translateY(600px)' },
            { transform: 'translateY(0)' },
        ],
        {
            duration: 1000,
        }
    );
}

function slideOut() {
    document.querySelector('div.main-fore').animate(
        [
            { transform: 'translateY(0)' },
            { transform: 'translateY(-600px)' }
        ],
        {
            duration: 1000,
        }
    );
}

function slideEnd() {
    document.querySelector('div.main-fore').css({ transform: 'translateY(0)' });
}

function updateMainPanel() {
    const next = randomEki();
    const $mfp1 = $('div.main-fore').eq(1);
    $mfp1('span.ekimeiKanj').text(next.ekimeiKanj);
    $mfp1('span.ekimeiKana').text(next.ekimeiKana);
    $mfp1('span.ekimeiRoma').text(next.ekimeiRoma);
    $mfp1('span.compName'  ).text(next.compName  );
    $mfp1('span.lineName'  ).text(next.lineName  );
    $mfp1('span.sttnAddr'  ).text(next.sttnAddr  );
}

function randomEki() {
    return ekiList[Math.floor(Math.random() * ekiList.length)];
}
