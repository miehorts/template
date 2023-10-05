const information = document.querySelector('div.information');
//information.innerHTML = window.innerHeight;
const headerH = $('header').outerHeight();
const mainH = document.querySelector('div.main-back').offsetHeight;
const buttonH = document.querySelector('div.button-area').offsetHeight;
information.style.height
= (window.innerHeight - headerH - mainH - buttonH) + 'px';

const lines = {
    JreTouhokushinkan,
    JreYamagatashinkan,
    JreAkitashinkan,
    JreJouetsushinkan,
    JreHokurikushinkan,
    JreYamanote,
    JreShounanshinjuku,
    JreSaikyou,
    JreSoutetsujrchokutsuu,
    JreNegishi,
    JreYokohama,
    JreNanbu,
    JreMusashino,
    JreKeiyou,
    JreKawagoe,
    JreChuuouhon,
    JreChuuoukaisoku,
    JreChuuousoubukankou,
    JreOume,
    JreItsukaichi,
    JreSoubuhon,
    JreYokosukasoubukaisoku,
    JreTsurumi,
    JreSagami,
    JreKeihintouhoku,
    JreToukaidou,
    //JreUenotoukyou,
    JreTouhokuhon,
    JreUtsunomiya,
    JreSendaikuukouakusesu,
    //JreSensekitouhoku,
    JreRifu,
    JreTakasaki,
    JreJouban,
    JreJoubankankou,
    JreJouetsu,
    JreRyoumou,
    JreMito,
    JreSotobou,
    JreUchibou,
    JreNarita,
    JreItou,
    JreShinetsuhon,
    JreShinonoi,
    JreUetsuhon,
    JreHakushin,
    JreBanetsusai,
    JreSenzan,
    JreSenseki,
    JreOuuhon,
    JreYamagata,
    JreHachikou,
    JreAgatsuma,
    JreKarasuyama,
    JreNikkou,
    JreSuigun,
    JreKashima,
    JreKururi,
    JreTougane,
    JreKoumi,
    JreIiyama,
    JreOoito,
    JreEchigo,
    JreYahiko,
    JreYonesaka,
    JreTadami,
    JreBanetsutou,
    JreIshinomaki,
    JreKesennuma,
    JreOofunato,
    JreRikuutou,
    JreRikuusai,
    JreKitakami,
    JreKamaishi,
    JreYamada,
    JreHanawa,
    JreHachinohe,
    JreOominato,
    JreTsugaru,
    JreAterazawa,
    JreTazawako,
    JreOga,
    JreGonou,
    OerOdawara,
    OerEnoshima,
    OerTama,
    KeioKeiou,
    KeioKeioushin,
    KeioSagamihara,
    KeioKeibajou,
    KeioDoubutsuen,
    KeioTakao,
    KeioInokashira,
    KeiseiHon,
    KeiseiHigashinarita,
    KeiseiOshiage,
    KeiseiKanamachi,
    KeiseiChiba,
    KeiseiChihara,
    KeiseiNaritakuukou,
    KhkHon,
    KhkKuukou,
    KhkDaishi,
    KhkZushi,
    KhkKurihama,
    SotetsuHon,
    SotetsuIzumino,
    SotetsuSotetsushinyokohama,
    SeibuIkebukuro,
    SeibuSeibuchichibu,
    SeibuSeibuyuurakuchou,
    TwrRinkai,
    TokyomonorailTokyomonorailhanedakuukou,
    HokuetsuexpressHokuhoku,
    IzukyuIzukyuukou,
    AizurailwayAizu,
    EtrNihonkaihisui,
    EtrMyoukouhaneuma,
    FujikyurailwayFujikyuukou,
    KrtOoaraikashima,
    HitachinakaseasiderailwayMinato,
    FukushimatransportationIizaka,
    AbukyuuAbukumakyuukou,
    YamagatarailwayFurawanagai,
    ShinatetsuShinanotetsudou,
    ShinatetsuKitashinano,
    JoudenBessho,
    NerNagano,
    AlpicoKamikouchi,
};

const ekiListAll = [];
Object.keys(lines).forEach((key) => {
    ekiListAll.push(...lines[key]);
});

const ekiList = [...ekiListAll];

$('div.sp-menu__box').on('click', (evt) => {
    //$('div.sp-menu__box'    ).toggleClass('opened');
    //$('div.sp-menu__content').toggleClass('opened');
    $('div.sp-menu__content').addClass('opened');
});

$('a.hide-menu').on('click', (evt) => {
    $('div.sp-menu__content').toggleClass('opened');
});

$('a.show-config-lines').on('click', (evt) => {
    $('div.config-lines').toggleClass('opened');
});

$('a.show-config-passes').on('click', (evt) => {
    $('div.config-passes').toggleClass('opened');
});

$('a.hide-config-lines').on('click', (evt) => {
    filter();
    const $divConfigLines = $('div.config-lines');
    $divConfigLines.toggleClass('opened');
});

$('a.hide-config-passes').on('click', (evt) => {
    filter();
    $('div.config-passes').toggleClass('opened');
});

$('#throw-dice').on('click', (evt) => {
    if (!ekiList.length) {
        alert('対象となる駅が０件です。設定を確認してください。');
        return;
    }
    const self = evt.target;
    $(self).hide();
    $('div.dice-base')[0].animate(
        { transform: ['rotateX(720deg)'] },
        { fill: 'none', duration: 8000 }
    )
    .finished.then(() => { $(self).show(); });
    setTimeout(updateFace1,     );
    setTimeout(updateFace2,     );
    setTimeout(updateFace3, 1000);
    setTimeout(updateFace0, 2000);
    setTimeout(updateFace1, 3000);
    setTimeout(updateFace2, 4000);
    setTimeout(updateFace3, 5000);
    setTimeout(updateFace0, 6000);
    /*
    setTimeout(() => {              slideUp(); updateMainPanel(); },     );
    setTimeout(() => { copyTexts(); slideUp();                    }, 1000);
    setTimeout(() => {                         updateMainPanel(); }, 1100);
    setTimeout(() => { copyTexts(); slideUp(); updateMainPanel(); }, 2000);
    setTimeout(() => { copyTexts(); slideUp(); updateMainPanel(); }, 3000);
    setTimeout(() => { copyTexts(); slideUp(); updateMainPanel(); }, 4000);
    setTimeout(() => { copyTexts();                               }, 5000);
    setTimeout(() => { $(self).show();                            }, 8000);
    */
});

function filter() {
    let list = [];
    const $divConfigLines = $('div.config-lines');
    $divConfigLines.find('div.line-name input')
    .filter((idx, elm) => { return $(elm).prop('checked'); })
    .each((idx, elm) => {
        //console.log($(elm).data('line-id'));
        list.push(...lines[$(elm).data('line-id')]);
    });
    if ($('div.pass-enab input').prop('checked')) {
        const passName = $('input[name="pass-name"]:checked').val();
        list = list.filter((eki) => {
            if (eki.passArea) {
                const passes = JSON.parse(eki.passArea);
                return passes.includes(passName);
            }
            else { return false; }
        });
    }
    ekiList.splice(0);
    ekiList.push(...list);
}

function updateFace0() {
    updateFace($('div.face-0'));
}

function updateFace1() {
    updateFace($('div.face-1'));
}

function updateFace2() {
    updateFace($('div.face-2'));
}

function updateFace3() {
    updateFace($('div.face-3'));
}

function updateFace($face) {
    const next = randomEki();
    $face.find('span.ekimeiKanj').text(next.ekimeiKanj);
    $face.find('span.ekimeiKana').text(next.ekimeiKana);
    $face.find('span.ekimeiRoma').text(next.ekimeiRoma);
    $face.find('span.compName'  ).text(next.compName  );
    $face.find('span.lineName'  ).text(next.lineName  );
    $face.find('span.sttnAddr'  ).text(next.sttnAddr  );
}

function slideUp() {
    $('div.main-fore').each((idx, elm) => {
        elm.animate(
            [
                { transform: 'translateY(0)' },
                { transform: 'translateY(-200px)' }
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
