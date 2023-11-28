const information = document.querySelector('div.information');
//information.innerHTML = window.innerHeight;
const headerH = $('header').outerHeight();
const mainH = document.querySelector('div.main-back').offsetHeight;
const buttonH = document.querySelector('div.button-area').offsetHeight;
information.style.height
= (window.innerHeight - headerH - mainH - buttonH) + 'px';
$('#throw-dice').show();

const lines = {
    //JRグループ
    //JR東日本
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
    //JreSendaikuukouakusesu,
    //JreSensekitouhoku,
    JreRifu,
    JreTakasaki,
    JreJouban,
    JreJoubankaisoku,
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
    //JR東海
    JrcToukaidoushinkan,
    JrcToukaidou,
    JrcMinoakasaka,
    JrcGotemba,
    JrcChuuouhon,
    JrcKansai,
    JrcKiseihon,
    JrcMinobu,
    JrcIida,
    JrcTaketoyo,
    JrcTakayamahon,
    JrcTaita,
    JrcMeishou,
    JrcSanguu,
    //大手私鉄
    //関東地方
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
    SeibuToshima,
    SeibuSayama,
    SeibuShinjuku,
    SeibuHaijima,
    SeibuTamako,
    SeibuKokubunji,
    SeibuSeibuen,
    SeibuTamagawa,
    SeibuYamaguchi,
    TokyuTouyoko,
    TokyuMeguro,
    TokyuTokyushinyokohama,
    TokyuDenentoshi,
    TokyuOoimachi,
    TokyuIkegami,
    TokyuTokyutamagawa,
    TokyuKodomonokuni,
    TokyuSetagaya,
    TokyometroHibiya,
    TokyometroGinza,
    TokyometroMarunouchi,
    TokyometroTouzai,
    TokyometroNanboku,
    TokyometroYuurakuchou,
    TokyometroChiyoda,
    TokyometroHanzoumon,
    TokyometroFukutoshin,
    TobuIsesaki,
    TobuKameido,
    TobuDaishi,
    TobuSano,
    TobuKiryuu,
    TobuKoizumi,
    TobuNikkou,
    TobuUtsunomiya,
    TobuKinugawa,
    TobuNoda,
    TobuToujouhon,
    TobuOgose,
    //準大手私鉄
    //関東地方
    ShinkeiseiShinkeisei,
    //公営事業者
    SendaishichikatetsuNanboku,
    SendaishichikatetsuTouzai,
    ToeikoutsuuAsakusa,
    ToeikoutsuuMita,
    ToeikoutsuuShinjuku,
    ToeikoutsuuOoedo,
    ToeikoutsuuArakawa,
    ToeikoutsuuNipporitoneriraina,
    YokohamashikoutsuukyokuBururain,
    YokohamashikoutsuukyokuGurinrain,
    //その他
    //青森県
    AotetsuAoimorirailway,
    KonanrailwayKonan,
    KonanrailwayOwani,
    TsutetsuTsugarurailway,
    //岩手県
    IgrIwategalaxyrailway,
    SantetsuRiasu,
    //宮城県
    SatSendaikuukou,
    //秋田県
    AkitanairikujukantetsudorailwayAkitanairiku,
    YuritetsuChoukaisanroku,
    //山形県
    YamagatarailwayFurawanagai,
    //福島県
    AizurailwayAizu,
    AbukyuuAbukumakyuukou,
    FukushimatransportationIizaka,
    //茨城県
    KrtOoaraikashima,
    KantetsuJousou,
    HitachinakaseasiderailwayMinato,
    //栃木県
    UtsunomiyalightrailUtsunomiyahagalightrail,
    MokarailwayMoka,
    YagantetsudorailwayAizukinugawa,
    //群馬県
    JoshinJoshin,
    JomoJomo,
    WatetsuWatarasekeikoku,
    //埼玉県
    SaitamarailwaySaitamakousokutetsudou,
    SskIna,
    CtkChichibuhon,
    //千葉県
    IsumirailwayIsumi,
    KominatorailwayKominatotetsudou,
    SrShibayamatetsudou,
    Chibamonorail1gou,
    Chibamonorail2gou,
    CdkChoushidenkitetsudou,
    ToyorapidrailwayToyokousoku,
    MaihamaresortlineDisneyresort,
    HokusoHokuso,
    YamamanYukarigaoka,
    RyutetsuNagareyama,
    //東京都
    MirTsukubaexpress,
    TamamonorailTamatoshimonorail,
    TokyomonorailTokyomonorailhanedakuukou,
    TwrRinkai,
    YurikamomeYurikamome,
    //神奈川県
    EnodenEnoshimadentetsu,
    ShonanmonorailEnoshima,
    YokohamaminatomirairailwayMinatomirai,
    YokohamaseasidelineKanazawaseasideline,
    TozanHakonetozandensha,
    TozanHakonetozancablecar,
    TozanHakoneropeway,
    //新潟県
    EtrNihonkaihisui,
    EtrMyoukouhaneuma,
    HokuetsuexpressHokuhoku,
    //山梨県
    FujikyurailwayFujikyuukou,
    //長野県
    AlpicoKamikouchi,
    JoudenBessho,
    ShinatetsuShinanotetsudou,
    ShinatetsuKitashinano,
    NerNagano,
    //静岡県
    IzukyuIzukyuukou,
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

$('div.pass-enab label').on('click', (evt) => {
    $('div.pass-name').toggleClass('enabled', $(evt.target).find('input').prop('checked'));
});

$('div.pass-name label').on('click', (evt) => {
    const $divPassEnab = $('div.pass-enab');
    if (!$divPassEnab.find('input').prop('checked')) {
        $divPassEnab.find('label').trigger('click');
        $('div.pass-name').addClass('enabled');
    }
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
    const $spanEkimeiKanj = $face.find('span.ekimeiKanj').text(next.ekimeiKanj).css({ fontSize: '' });
    if (11 < next.ekimeiKanj.length) {
        const fs = 35 - next.ekimeiKanj.length;
        $spanEkimeiKanj.css({ fontSize: fs + 'px' });
    }
    $face.find('span.ekimeiKana').text(next.ekimeiKana);
    $face.find('span.ekimeiRoma').text(next.ekimeiRoma);
    const $spanCompName = $face.find('span.compName').text(next.compName);
    const $divCompName = $spanCompName.closest('div');
    $divCompName.css({ backgroundColor: '' });
    if (next.compBack) { $divCompName.css({ backgroundColor: next.compBack }); }
    const $divLineBack1 = $face.find('div.lineBack1').css({ background: '' });
    const $divLineBack2 = $face.find('div.lineBack2').css({ background: '' });
    if (next.lineBack1) {
        const css = { background: `linear-gradient(90deg, ${next.lineBack1}, #ffffff)` };
        $divLineBack1.css(css);
        $divLineBack2.css(css);
    }
    if (next.lineBack2) {
        const css = { background: `linear-gradient(90deg, ${next.lineBack2}, #ffffff)` };
        $divLineBack2.css(css);
    }
    $face.find('span.lineName'  ).text(next.lineName  );
    $face.find('span.sttnAddr'  ).text(next.sttnAddr  );
    const $divPassName = $face.find('div.passName').empty();
    if (next.passArea) {
        const passes = JSON.parse(next.passArea);
        if (passes.includes('ShuP')) { $divPassName.append($('<span>週末パス</span>'                )); }
        if (passes.includes('NHSP')) { $divPassName.append($('<span>のんびりホリデーSuicaパス</span>')); }
    }
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
