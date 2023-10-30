const JreJoubankaisokuCommon = {
    ...compNameJre,
    lineName: '常磐快速線',
};

const JreJoubankaisokuCommon1 = {
    ...compNameJre,
    lineBack1: '#00b261',
    //lineBack2: '#3333ff',
    passArea: '["ShuP", "NHSP"]',
};
/*
const JreJoubankaisokuCommon11 = {
    ...JreJoubankaisokuCommon1,
    lineName: '常磐線（快速）／常磐線（特急）',
};
*/
const JreJoubankaisokuCommon12 = {
    ...JreJoubankaisokuCommon1,
    lineName: '常磐線（快速）',
};
/*
const JreJoubankaisokuCommon13 = {
    ...JreJoubankaisokuCommon1,
    lineName: '常磐線（特急・快速）',
};

const JreJoubankaisokuCommon14 = {
    ...JreJoubankaisokuCommon1,
    lineName: '常磐線（快速）／常磐線',
};
*/
const JreJoubankaisoku = [
    {
        ekimeiKanj: '上野',
        ekimeiKana: 'うえの',
        ekimeiRoma: 'Ueno',
        sttnAddr: '東京都台東区上野七丁目1-1',
        ...JreJoubankaisokuCommon12,
    },
    {
        ekimeiKanj: '日暮里',
        ekimeiKana: 'にっぽり',
        ekimeiRoma: 'Nippori',
        sttnAddr: '東京都荒川区西日暮里二丁目19-1',
        ...JreJoubankaisokuCommon12,
    },
    {
        ekimeiKanj: '三河島',
        ekimeiKana: 'みかわしま',
        ekimeiRoma: 'Mikawashima',
        sttnAddr: '東京都荒川区西日暮里一丁目6-10',
        ...JreJoubankaisokuCommon12,
    },
    {
        ekimeiKanj: '南千住',
        ekimeiKana: 'みなみせんじゅ',
        ekimeiRoma: 'Minami-Senju',
        sttnAddr: '東京都荒川区南千住四丁目5-1',
        ...JreJoubankaisokuCommon12,
    },
    {
        ekimeiKanj: '北千住',
        ekimeiKana: 'きたせんじゅ',
        ekimeiRoma: 'Kita-Senju',
        sttnAddr: '東京都足立区千住旭町42-2',
        ...JreJoubankaisokuCommon12,
    },
    {
        ekimeiKanj: '松戸',
        ekimeiKana: 'まつど',
        ekimeiRoma: 'Matsudo',
        sttnAddr: '千葉県松戸市松戸1181',
        ...JreJoubankaisokuCommon12,
    },
    {
        ekimeiKanj: '柏',
        ekimeiKana: 'かしわ',
        ekimeiRoma: 'Kashiwa',
        sttnAddr: '千葉県柏市柏一丁目1-1',
        ...JreJoubankaisokuCommon12,
    },
    {
        ekimeiKanj: '我孫子',
        ekimeiKana: 'あびこ',
        ekimeiRoma: 'Abiko',
        sttnAddr: '千葉県我孫子市本町二丁目1-1',
        ...JreJoubankaisokuCommon12,
    },
    {
        ekimeiKanj: '天王台',
        ekimeiKana: 'てんのうだい',
        ekimeiRoma: 'Tennōdai',
        sttnAddr: '千葉県我孫子市柴崎台一丁目19-1',
        ...JreJoubankaisokuCommon12,
    },
    {
        ekimeiKanj: '取手',
        ekimeiKana: 'とりで',
        ekimeiRoma: 'Toride',
        sttnAddr: '茨城県取手市中央町1-1',
        ...JreJoubankaisokuCommon12,
    },
];
