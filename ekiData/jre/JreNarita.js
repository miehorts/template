const JreNaritaCommon = {
    ...compNameJre,
    lineName: '成田線',
}

const JreNarita = [
    /*
    {
        ekimeiKanj: '千葉',
        ekimeiKana: 'ちば',
        ekimeiRoma: 'Chiba',
        sttnAddr: '千葉市中央区新千葉一丁目1-1',
        ...JreNaritaCommon
    },
    {
        ekimeiKanj: '東千葉',
        ekimeiKana: 'ひがしちば',
        ekimeiRoma: 'Higashi-Chiba',
        sttnAddr: '千葉市中央区要町1-10',
        ...JreNaritaCommon
    },
    {
        ekimeiKanj: '都賀',
        ekimeiKana: 'つが',
        ekimeiRoma: 'Tsuga',
        sttnAddr: '千葉市若葉区都賀三丁目3-1',
        ...JreNaritaCommon
    },
    {
        ekimeiKanj: '四街道',
        ekimeiKana: 'よつかいどう',
        ekimeiRoma: 'Yotsukaidō',
        sttnAddr: '千葉県四街道市四街道一丁目1-1',
        ...JreNaritaCommon
    },
    {
        ekimeiKanj: '物井',
        ekimeiKana: 'ものい',
        ekimeiRoma: 'Monoi',
        sttnAddr: '千葉県四街道市物井428',
        ...JreNaritaCommon
    },
    */
    {
        ekimeiKanj: '佐倉',
        ekimeiKana: 'さくら',
        ekimeiRoma: 'Sakura',
        sttnAddr: '千葉県佐倉市六崎235-2',
        ...JreNaritaCommon
    },
    {
        ekimeiKanj: '酒々井',
        ekimeiKana: 'しすい',
        ekimeiRoma: 'Shisui',
        sttnAddr: '千葉県印旛郡酒々井町酒々井921',
        ...JreNaritaCommon
    },
    {
        ekimeiKanj: '成田',
        ekimeiKana: 'なりた',
        ekimeiRoma: 'Narita',
        sttnAddr: '千葉県成田市花崎町839',
        ...JreNaritaCommon
    },
    {
        ekimeiKanj: '空港第2ビル',
        ekimeiKana: 'くうこうだいにびる',
        ekimeiRoma: 'Narita Airport Terminal 2･3',
        sttnAddr: '千葉県成田市古込1-1',
        ...JreNaritaCommon
    },
    {
        ekimeiKanj: '成田空港',
        ekimeiKana: 'なりたくうこう',
        ekimeiRoma: 'Narita Airport Terminal 1',
        sttnAddr: '千葉県成田市三里塚御料牧場1-1',
        ...JreNaritaCommon
    },
    {
        ekimeiKanj: '久住',
        ekimeiKana: 'くずみ',
        ekimeiRoma: 'Kuzumi',
        sttnAddr: '千葉県成田市飯岡19-1',
        ...JreNaritaCommon
    },
    {
        ekimeiKanj: '滑河',
        ekimeiKana: 'なめがわ',
        ekimeiRoma: 'Namegawa',
        sttnAddr: '千葉県成田市猿山264',
        ...JreNaritaCommon
    },
    {
        ekimeiKanj: '下総神崎',
        ekimeiKana: 'しもうさこうざき',
        ekimeiRoma: 'Shimōsa-Kōzaki',
        sttnAddr: '千葉県香取郡神崎町郡1235',
        ...JreNaritaCommon
    },
    {
        ekimeiKanj: '大戸',
        ekimeiKana: 'おおと',
        ekimeiRoma: 'Ōto',
        sttnAddr: '千葉県香取市大戸川11',
        ...JreNaritaCommon
    },
    {
        ekimeiKanj: '佐原',
        ekimeiKana: 'さわら',
        ekimeiRoma: 'Sawara',
        sttnAddr: '千葉県香取市佐原イ74',
        ...JreNaritaCommon
    },
    {
        ekimeiKanj: '香取',
        ekimeiKana: 'かとり',
        ekimeiRoma: 'Katori',
        sttnAddr: '千葉県香取市津宮1428',
        ...JreNaritaCommon
    },
    {
        ekimeiKanj: '水郷',
        ekimeiKana: 'すいごう',
        ekimeiRoma: 'Suigō',
        sttnAddr: '千葉県香取市一ノ分目1120',
        ...JreNaritaCommon
    },
    {
        ekimeiKanj: '小見川',
        ekimeiKana: 'おみがわ',
        ekimeiRoma: 'Omigawa',
        sttnAddr: '千葉県香取市小見川1316',
        ...JreNaritaCommon
    },
    {
        ekimeiKanj: '笹川',
        ekimeiKana: 'ささがわ',
        ekimeiRoma: 'Sasagawa',
        sttnAddr: '千葉県香取郡東庄町笹川い625',
        ...JreNaritaCommon
    },
    {
        ekimeiKanj: '下総橘',
        ekimeiKana: 'しもうさたちばな',
        ekimeiRoma: 'Shimōsa-Tachibana',
        sttnAddr: '千葉県香取郡東庄町石出1791',
        ...JreNaritaCommon
    },
    {
        ekimeiKanj: '下総豊里',
        ekimeiKana: 'しもうさとよさと',
        ekimeiRoma: 'Shimōsa-Toyosato',
        sttnAddr: '千葉県銚子市笹本町73-4',
        ...JreNaritaCommon
    },
    {
        ekimeiKanj: '椎柴',
        ekimeiKana: 'しいしば',
        ekimeiRoma: 'Shiishiba',
        sttnAddr: '千葉県銚子市野尻町169',
        ...JreNaritaCommon
    },
    {
        ekimeiKanj: '松岸',
        ekimeiKana: 'まつぎし',
        ekimeiRoma: 'Matsugishi',
        sttnAddr: '千葉県銚子市長塚町五丁目1260-23',
        ...JreNaritaCommon
    },
    /*
    {
        ekimeiKanj: '銚子',
        ekimeiKana: 'ちょうし',
        ekimeiRoma: 'Chōshi',
        sttnAddr: '千葉県銚子市西芝町1438',
        ...JreNaritaCommon
    },
    */
    {
        ekimeiKanj: '我孫子',
        ekimeiKana: 'あびこ',
        ekimeiRoma: 'Abiko',
        sttnAddr: '千葉県我孫子市本町二丁目1-1',
        ...JreNaritaCommon
    },
    {
        ekimeiKanj: '東我孫子',
        ekimeiKana: 'ひがしあびこ',
        ekimeiRoma: 'Higashi-Abiko',
        sttnAddr: '千葉県我孫子市下ケ戸',
        ...JreNaritaCommon
    },
    {
        ekimeiKanj: '湖北',
        ekimeiKana: 'こほく',
        ekimeiRoma: 'Kohoku',
        sttnAddr: '千葉県我孫子市中里324',
        ...JreNaritaCommon
    },
    {
        ekimeiKanj: '新木',
        ekimeiKana: 'あらき',
        ekimeiRoma: 'Araki',
        sttnAddr: '千葉県我孫子市新木',
        ...JreNaritaCommon
    },
    {
        ekimeiKanj: '布佐',
        ekimeiKana: 'ふさ',
        ekimeiRoma: 'Fusa',
        sttnAddr: '千葉県我孫子市布佐2812',
        ...JreNaritaCommon
    },
    {
        ekimeiKanj: '木下',
        ekimeiKana: 'きおろし',
        ekimeiRoma: 'Kioroshi',
        sttnAddr: '千葉県印西市木下1633',
        ...JreNaritaCommon
    },
    {
        ekimeiKanj: '小林',
        ekimeiKana: 'こばやし',
        ekimeiRoma: 'Kobayashi',
        sttnAddr: '千葉県印西市小林643-1',
        ...JreNaritaCommon
    },
    {
        ekimeiKanj: '安食',
        ekimeiKana: 'あじき',
        ekimeiRoma: 'Ajiki',
        sttnAddr: '千葉県印旛郡栄町安食3461',
        ...JreNaritaCommon
    },
    {
        ekimeiKanj: '下総松崎',
        ekimeiKana: 'しもうさまんざき',
        ekimeiRoma: 'Shimōsa-Manzaki',
        sttnAddr: '千葉県成田市大竹340',
        ...JreNaritaCommon
    },
];
