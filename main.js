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
    setTimeout(() => {              updateMainPanel(); slideUp(); },     );
    setTimeout(() => { copyTexts(); updateMainPanel(); slideUp(); }, 1000);
    setTimeout(() => { copyTexts(); updateMainPanel(); slideUp(); }, 2000);
    setTimeout(() => { copyTexts(); updateMainPanel(); slideUp(); }, 3000);
    setTimeout(() => { copyTexts(); updateMainPanel(); slideUp(); }, 4000);
    setTimeout(() => { copyTexts();                               }, 5000);
    setTimeout(() => { $(self).show();                            }, 5000);
});

function slideUp() {
    $('div.main-fore').each((idx, elm) => {
        elm.animate(
            [
                { transform: 'translateY(0)' },
                { transform: 'translateY(-600px)' }
            ],
            {
                duration: 1000,
            }
        );
    });
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

function copyTexts() {
    const $mfp0 = $('div.main-fore').eq(0);
    const $mfp1 = $('div.main-fore').eq(1);
    $mfp0.find('span.ekimeiKanj').text($mfp1.find('span.ekimeiKanj').text());
    $mfp0.find('span.ekimeiKana').text($mfp1.find('span.ekimeiKana').text());
    $mfp0.find('span.ekimeiRoma').text($mfp1.find('span.ekimeiRoma').text());
    $mfp0.find('span.compName'  ).text($mfp1.find('span.compName'  ).text());
    $mfp0.find('span.lineName'  ).text($mfp1.find('span.lineName'  ).text());
    $mfp0.find('span.sttnAddr'  ).text($mfp1.find('span.sttnAddr'  ).text());
}

function slideEnd() {
    document.querySelector('div.main-fore').css({ transform: 'translateY(0)' });
}

function updateMainPanel() {
    const next = randomEki();
    const $mfp1 = $('div.main-fore').eq(1);
    $mfp1.find('span.ekimeiKanj').text(next.ekimeiKanj);
    $mfp1.find('span.ekimeiKana').text(next.ekimeiKana);
    $mfp1.find('span.ekimeiRoma').text(next.ekimeiRoma);
    $mfp1.find('span.compName'  ).text(next.compName  );
    $mfp1.find('span.lineName'  ).text(next.lineName  );
    $mfp1.find('span.sttnAddr'  ).text(next.sttnAddr  );
}

function randomEki() {
    return ekiList[Math.floor(Math.random() * ekiList.length)];
}
