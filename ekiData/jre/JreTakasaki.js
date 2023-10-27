const JreTakasakiCommon = {
    ...compNameJre,
    lineName: '高崎線',
    lineBack1: '#f68b1e',
};

const JreTakasakiCommon1 = {
    ...JreTakasakiCommon,
    passArea: '["ShuP", "NHSP"]',
};

const JreTakasakiCommon2 = {
    ...JreTakasakiCommon,
    passArea: '["ShuP"]',
};

const JreTakasaki = [
    /*
    {
        ekimeiKanj: '東京',
        ekimeiKana: 'とうきょう',
        ekimeiRoma: 'Tōkyō',
        sttnAddr: '東京都千代田区丸の内一丁目9-1',
        ...JreTakasakiCommon1
    },
    {
        ekimeiKanj: '上野',
        ekimeiKana: 'うえの',
        ekimeiRoma: 'Ueno',
        sttnAddr: '東京都台東区上野七丁目1-1',
        ...JreTakasakiCommon1
    },
    {
        ekimeiKanj: '尾久',
        ekimeiKana: 'おく',
        ekimeiRoma: 'Oku',
        sttnAddr: '東京都北区昭和町一丁目2-16',
        ...JreTakasakiCommon1
    },
    {
        ekimeiKanj: '赤羽',
        ekimeiKana: 'あかばね',
        ekimeiRoma: 'Akabane',
        sttnAddr: '東京都北区赤羽一丁目1-1',
        ...JreTakasakiCommon1
    },
    {
        ekimeiKanj: '浦和',
        ekimeiKana: 'うらわ',
        ekimeiRoma: 'Urawa',
        sttnAddr: '埼玉県さいたま市浦和区高砂一丁目16-12',
        ...JreTakasakiCommon1
    },
    {
        ekimeiKanj: 'さいたま新都心',
        ekimeiKana: 'さいたましんとしん',
        ekimeiRoma: 'Saitama-Shintoshin',
        sttnAddr: '埼玉県さいたま市大宮区吉敷町四丁目261-1',
        ...JreTakasakiCommon1
    },
    */
    {
        ekimeiKanj: '大宮',
        ekimeiKana: 'おおみや',
        ekimeiRoma: 'Ōmiya',
        sttnAddr: '埼玉県さいたま市大宮区錦町630',
        ...JreTakasakiCommon1
    },
    {
        ekimeiKanj: '宮原',
        ekimeiKana: 'みやはら',
        ekimeiRoma: 'Miyahara',
        sttnAddr: 'さいたま市北区宮原町三丁目518',
        ...JreTakasakiCommon1
    },
    {
        ekimeiKanj: '上尾',
        ekimeiKana: 'あげお',
        ekimeiRoma: 'Ageo',
        sttnAddr: '埼玉県上尾市柏座一丁目1-18',
        ...JreTakasakiCommon1
    },
    {
        ekimeiKanj: '北上尾',
        ekimeiKana: 'きたあげお',
        ekimeiRoma: 'Kita-Ageo',
        sttnAddr: '埼玉県上尾市原新町3-1',
        ...JreTakasakiCommon1
    },
    {
        ekimeiKanj: '桶川',
        ekimeiKana: 'おけがわ',
        ekimeiRoma: 'Okegawa',
        sttnAddr: '埼玉県桶川市南一丁目1-1',
        ...JreTakasakiCommon1
    },
    {
        ekimeiKanj: '北本',
        ekimeiKana: 'きたもと',
        ekimeiRoma: 'Kitamoto',
        sttnAddr: '埼玉県北本市北本一丁目12番',
        ...JreTakasakiCommon1
    },
    {
        ekimeiKanj: '鴻巣',
        ekimeiKana: 'こうのす',
        ekimeiRoma: 'Kōnosu',
        sttnAddr: '埼玉県鴻巣市本町一丁目1-1',
        ...JreTakasakiCommon1
    },
    {
        ekimeiKanj: '北鴻巣',
        ekimeiKana: 'きたこうのす',
        ekimeiRoma: 'Kita-Kōnosu',
        sttnAddr: '埼玉県鴻巣市赤見台一丁目5-1',
        ...JreTakasakiCommon1
    },
    {
        ekimeiKanj: '吹上',
        ekimeiKana: 'ふきあげ',
        ekimeiRoma: 'Fukiage',
        sttnAddr: '埼玉県鴻巣市吹上本町一丁目1-1',
        ...JreTakasakiCommon1
    },
    {
        ekimeiKanj: '行田',
        ekimeiKana: 'ぎょうだ',
        ekimeiRoma: 'Gyōda',
        sttnAddr: '埼玉県行田市壱里山町12-1',
        ...JreTakasakiCommon1
    },
    {
        ekimeiKanj: '熊谷',
        ekimeiKana: 'くまがや',
        ekimeiRoma: 'Kumagaya',
        sttnAddr: '埼玉県熊谷市筑波二丁目112',
        ...JreTakasakiCommon1
    },
    {
        ekimeiKanj: '籠原',
        ekimeiKana: 'かごはら',
        ekimeiRoma: 'Kagohara',
        sttnAddr: '埼玉県熊谷市新堀713',
        ...JreTakasakiCommon1
    },
    {
        ekimeiKanj: '深谷',
        ekimeiKana: 'ふかや',
        ekimeiRoma: 'Fukaya',
        sttnAddr: '埼玉県深谷市西島町三丁目1-8',
        ...JreTakasakiCommon1
    },
    {
        ekimeiKanj: '岡部',
        ekimeiKana: 'おかべ',
        ekimeiRoma: 'Okabe',
        sttnAddr: '埼玉県深谷市岡2661-3',
        ...JreTakasakiCommon1
    },
    {
        ekimeiKanj: '本庄',
        ekimeiKana: 'ほんじょう',
        ekimeiRoma: 'Honjō',
        sttnAddr: '埼玉県本庄市銀座三丁目6-19',
        ...JreTakasakiCommon1
    },
    {
        ekimeiKanj: '神保原',
        ekimeiKana: 'じんぼはら',
        ekimeiRoma: 'Jimbohara',
        sttnAddr: '埼玉県児玉郡上里町大字神保原町267-5',
        ...JreTakasakiCommon1
    },
    {
        ekimeiKanj: '新町',
        ekimeiKana: 'しんまち',
        ekimeiRoma: 'Shimmachi',
        sttnAddr: '群馬県高崎市新町2150',
        ...JreTakasakiCommon2
    },
    {
        ekimeiKanj: '倉賀野',
        ekimeiKana: 'くらがの',
        ekimeiRoma: 'Kuragano',
        sttnAddr: '群馬県高崎市倉賀野町1797',
        ...JreTakasakiCommon2
    },
    {
        ekimeiKanj: '高崎',
        ekimeiKana: 'たかさき',
        ekimeiRoma: 'Takasaki',
        sttnAddr: '群馬県高崎市八島町222',
        ...JreTakasakiCommon2
    },
];
