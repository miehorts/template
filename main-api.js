const $welcome = $('div.welcome');
const information = document.querySelector('div.information');
//information.innerHTML = window.innerHeight;
const headerH = $('header').outerHeight();
const mainH = document.querySelector('div.main-back').offsetHeight;
const buttonH = document.querySelector('div.button-area').offsetHeight;
const height = (window.innerHeight - headerH - mainH - buttonH) + 'px';
$welcome.css('height', height);
information.style.height = height;
$('#throw-dice').show();

const passNames = [];
const lineIds = [];
$('div.config-lines div.line-name input').each((idx, elm) => {
    //console.log($(elm).data('line-id'));
    lineIds.push($(elm).data('line-id'));
});

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
    selectConf();
    //filter();
    const $divConfigLines = $('div.config-lines');
    $divConfigLines.toggleClass('opened');
});

$('a.hide-config-passes').on('click', (evt) => {
    selectConf();
    //filter();
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
    const self = evt.target;
    $(self).hide();
    fetchGet().then((data) => {
        console.log(data);
        if (!data.length) {
            alert('対象となる駅が０件です。設定を確認してください。');
            $(self).show();
            return;
        }
        $('div.dice-base')[0].animate(
            { transform: ['rotateX(720deg)'] },
            { fill: 'none', duration: 8000 }
        )
        .finished.then(() => { $(self).show(); });
        setTimeout(() => { updateFace1(data[0]); },     );
        setTimeout(() => { updateFace2(data[1]); },     );
        setTimeout(() => { updateFace3(data[2]); }, 1000);
        setTimeout(() => { updateFace0(data[3]); }, 2000);
        setTimeout(() => { updateFace1(data[4]); }, 3000);
        setTimeout(() => { updateFace2(data[5]); }, 4000);
        setTimeout(() => { updateFace3(data[6]); }, 5000);
        setTimeout(() => { updateFace0(data[7]); }, 6000);
    })
    .catch(error => {
        console.log(error);
        $(self).show();
    });
});

function selectConf() {
    selectLines();
    selectPassNames();    
}

function selectLines() {
    lineIds.splice(0);
    const $divConfigLines = $('div.config-lines');
    $divConfigLines.find('div.line-name input')
    .filter((idx, elm) => { return $(elm).prop('checked'); })
    .each((idx, elm) => {
        //console.log($(elm).data('line-id'));
        lineIds.push($(elm).data('line-id'));
    });
}

function selectPassNames() {
    passNames.splice(0);
    if ($('div.pass-enab input').prop('checked')) {
        const passName = $('input[name="pass-name"]:checked').val();
        passNames.push(passName);
    }
}

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

function fetchPost() {
    const data = {};
    const url = 'https://strosoft.skr.jp/api/eki/';
    const options = {
        method: 'POST',  // HTTPメソッドを指定
        headers: {  // リクエストヘッダを追加
            //'Access-Control-Allow-Headers': 'Content-Type',
          'Content-Type': 'application/json',  // リクエストデータをJSON形式と指定
          'Accept': 'application/json'  // レスポンスデータをJSON形式と指定
        },
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify(data) // リクエストボディ（送信データ）を指定
    }
    return fetch(url, options)  // サーバにリクエストを送信
    .then(response => response.json());  // レスポンスデータをJSON形式に
    //.then(data => console.log(data))  // 取得したデータをコンソール画面に表示
}

function fetchGet() {
    //const params = { lineIds: "'JreTouhokushinkan'" }
    const params = { lineIds: "'" + lineIds.join("','") + "'" }
    if (passNames.length) { params.passName = `"${passNames[0]}"`; }
    const usp = new URLSearchParams(params);
    //console.log(usp.toString());
    const url = 'https://strosoft.skr.jp/api/eki/?' + usp;
    const options = {
        method: 'GET',  // HTTPメソッドを指定
        headers: {  // リクエストヘッダを追加
            //'Access-Control-Allow-Headers': 'Content-Type',
          //'Content-Type': 'application/json',  // リクエストデータをJSON形式と指定
          'Accept': 'application/json'  // レスポンスデータをJSON形式と指定
        },
        //mode: 'cors',
        credentials: 'include',
    }
    return fetch(url, options)  // サーバにリクエストを送信
    .then(response => response.json())  // レスポンスデータをJSON形式に
    .catch((error) => { console.error(error); });
    //.then(data => console.log(data))  // 取得したデータをコンソール画面に表示
}

function updateFace0(eki) {
    updateFace($('div.face-0'), eki);
}

function updateFace1(eki) {
    updateFace($('div.face-1'), eki);
}

function updateFace2(eki) {
    updateFace($('div.face-2'), eki);
}

function updateFace3(eki) {
    updateFace($('div.face-3'), eki);
}

function updateFace($face, eki) {
    const next = eki;
    //const next = randomEki();
    const $spanEkimeiKanj = $face.find('span.ekimeiKanj').text(next.ekimei_kanj).css({ fontSize: '' });
    if (11 < next.ekimei_kanj.length) {
        const fs = 35 - next.ekimei_kanj.length;
        $spanEkimeiKanj.css({ fontSize: fs + 'px' });
    }
    $face.find('span.ekimeiKana').text(next.ekimei_kana);
    $face.find('span.ekimeiRoma').text(next.ekimei_roma);
    const $spanCompName = $face.find('span.compName').text(next.comp_name);
    const $divCompName = $spanCompName.closest('div');
    $divCompName.css({ backgroundColor: '' });
    const compBack = compNameBack[next.comp_name];
    if (compBack) { $divCompName.css({ backgroundColor: compBack }); }
    const $divLineBack1 = $face.find('div.lineBack1').css({ background: '' });
    const $divLineBack2 = $face.find('div.lineBack2').css({ background: '' });
    if (next.line_back1) {
        $divLineBack2.css({ backgroundColor: next.line_back1 });
        //const css = { background: `linear-gradient(90deg, ${next.line_back1}, #ffffff)` };
        //$divLineBack1.css(css);
        //$divLineBack2.css(css);
    }
    if (next.line_back2) {
        $divLineBack1.css({ backgroundColor: next.line_back2 });
        //const css = { background: `linear-gradient(90deg, ${next.line_back2}, #ffffff)` };
        //$divLineBack2.css(css);
    }
    $face.find('span.lineName'  ).text(next.line_name  );
    $face.find('span.sttnAddr'  ).text(next.sttn_addr  );
    const $divPassName = $face.find('div.passName').empty();
    if (next.pass_area) {
        const passes = JSON.parse(next.pass_area);
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
