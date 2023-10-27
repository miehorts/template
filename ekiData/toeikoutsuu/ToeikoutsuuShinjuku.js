const ToeikoutsuuShinjukuCommon = {
    ...compNameToeikoutsuu,
    lineName: '新宿線',
    lineBack1: '#b0bf1e',
};

const ToeikoutsuuShinjukuCommon1 = {
    ...ToeikoutsuuShinjukuCommon,
    lineName: '都営新宿線',
};

const ToeikoutsuuShinjuku = [
    {
        ekimeiKanj: '（新線）新宿',
        ekimeiKana: '（しんせん）しんじゅく',
        ekimeiRoma: '（Keiō New Line）Shinjuku',
        sttnAddr: '東京都新宿区西新宿一丁目18',
        ...ToeikoutsuuShinjukuCommon1
    },
    {
        ekimeiKanj: '新宿三丁目',
        ekimeiKana: 'しんじゅくさんちょうめ',
        ekimeiRoma: 'Shinjuku-sanchome',
        sttnAddr: '東京都新宿区新宿三丁目3-2',
        ...ToeikoutsuuShinjukuCommon1
    },
    {
        ekimeiKanj: '曙橋',
        ekimeiKana: 'あけぼのばし',
        ekimeiRoma: 'Akebonobashi',
        sttnAddr: '東京都新宿区住吉町7-1',
        ...ToeikoutsuuShinjukuCommon1
    },
    {
        ekimeiKanj: '市ヶ谷',
        ekimeiKana: 'いちがや',
        ekimeiRoma: 'Ichigaya',
        sttnAddr: '東京都千代田区九段南四丁目8-22',
        ...ToeikoutsuuShinjukuCommon1
    },
    {
        ekimeiKanj: '九段下',
        ekimeiKana: 'くだんした',
        ekimeiRoma: 'Kudanshita',
        sttnAddr: '東京都千代田区九段北一丁目13-19',
        ...ToeikoutsuuShinjukuCommon1
    },
    {
        ekimeiKanj: '神保町',
        ekimeiKana: 'じんぼうちょう',
        ekimeiRoma: 'Jimbocho',
        sttnAddr: '東京都千代田区神田神保町二丁目7番地',
        ...ToeikoutsuuShinjukuCommon1
    },
    {
        ekimeiKanj: '小川町',
        ekimeiKana: 'おがわまち',
        ekimeiRoma: 'Ogawamachi',
        sttnAddr: '東京都千代田区神田小川町一丁目6',
        ...ToeikoutsuuShinjukuCommon1
    },
    {
        ekimeiKanj: '岩本町',
        ekimeiKana: 'いわもとちょう',
        ekimeiRoma: 'Iwamotocho',
        sttnAddr: '東京都千代田区神田岩本町1',
        ...ToeikoutsuuShinjukuCommon1
    },
    {
        ekimeiKanj: '馬喰横山',
        ekimeiKana: 'ばくろよこやま',
        ekimeiRoma: 'Bakuroyokoyama',
        sttnAddr: '東京都中央区日本橋横山町4-13',
        ...ToeikoutsuuShinjukuCommon1
    },
    {
        ekimeiKanj: '浜町',
        ekimeiKana: 'はまちょう',
        ekimeiRoma: 'Hamacho',
        sttnAddr: '東京都中央区日本橋浜町二丁目59-3',
        ...ToeikoutsuuShinjukuCommon1
    },
    {
        ekimeiKanj: '森下',
        ekimeiKana: 'もりした',
        ekimeiRoma: 'Morishita',
        sttnAddr: '東京都江東区森下一丁目13-10',
        ...ToeikoutsuuShinjukuCommon1
    },
    {
        ekimeiKanj: '菊川',
        ekimeiKana: 'きくかわ',
        ekimeiRoma: 'Kikukawa',
        sttnAddr: '東京都墨田区菊川三丁目16-2',
        ...ToeikoutsuuShinjukuCommon1
    },
    {
        ekimeiKanj: '住吉',
        ekimeiKana: 'すみよし',
        ekimeiRoma: 'Sumiyoshi',
        sttnAddr: '京都江東区住吉二丁目23-12',
        ...ToeikoutsuuShinjukuCommon1
    },
    {
        ekimeiKanj: '西大島',
        ekimeiKana: 'にしおおじま',
        ekimeiRoma: 'Nishi-ojima',
        sttnAddr: '東京都江東区大島二丁目41-19',
        ...ToeikoutsuuShinjukuCommon1
    },
    {
        ekimeiKanj: '大島',
        ekimeiKana: 'おおじま',
        ekimeiRoma: 'Ojima',
        sttnAddr: '東京都江東区大島五丁目10-8',
        ...ToeikoutsuuShinjukuCommon1
    },
    {
        ekimeiKanj: '東大島',
        ekimeiKana: 'ひがしおおじま',
        ekimeiRoma: 'Higashi-ojima',
        sttnAddr: '	東京都江東区大島九丁目3-14',
        ...ToeikoutsuuShinjukuCommon1
    },
    {
        ekimeiKanj: '船堀',
        ekimeiKana: 'ふなぼり',
        ekimeiRoma: 'Funabori',
        sttnAddr: '東京都江戸川区船堀三丁目6-1',
        ...ToeikoutsuuShinjukuCommon1
    },
    {
        ekimeiKanj: '一之江',
        ekimeiKana: 'いちのえ',
        ekimeiRoma: 'Ichinoe',
        sttnAddr: '東京都江戸川区一之江八丁目14-1',
        ...ToeikoutsuuShinjukuCommon1
    },
    {
        ekimeiKanj: '瑞江',
        ekimeiKana: 'みずえ',
        ekimeiRoma: 'Mizue',
        sttnAddr: '東京都江戸川区瑞江二丁目2-1',
        ...ToeikoutsuuShinjukuCommon1
    },
    {
        ekimeiKanj: '篠崎',
        ekimeiKana: 'しのざき',
        ekimeiRoma: 'Shinozaki',
        sttnAddr: '東京都江戸川区篠崎町七丁目27-1',
        ...ToeikoutsuuShinjukuCommon1
    },
    {
        ekimeiKanj: '本八幡',
        ekimeiKana: 'もとやわた',
        ekimeiRoma: 'Motoyawata',
        sttnAddr: '千葉県市川市八幡二丁目16-13',
        ...ToeikoutsuuShinjukuCommon1
    },
];
