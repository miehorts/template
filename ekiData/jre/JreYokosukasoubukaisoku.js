const JreYokosukasoubukaisokuCommon = {
    ...compNameJre,
    lineName: '横須賀・総武快速線',
    lineBack1: '#007ac0',
    passArea: '["ShuP", "NHSP"]',
};

const JreYokosukasoubukaisokuCommon1 = {
    ...JreYokosukasoubukaisokuCommon,
    lineName: '横須賀・総武線（快速）'
};

const JreYokosukasoubukaisokuCommon2 = {
    ...JreYokosukasoubukaisokuCommon,
    lineName: '横須賀線／横須賀・総武線（快速）'
};

const JreYokosukasoubukaisokuCommon3 = {
    ...JreYokosukasoubukaisokuCommon,
    lineName: '横須賀線／総武線（快速）'
};

const JreYokosukasoubukaisokuCommon4 = {
    ...JreYokosukasoubukaisokuCommon,
    lineName: '総武線（快速）'
};

const JreYokosukasoubukaisokuCommon5 = {
    ...JreYokosukasoubukaisokuCommon,
    lineName: '総武線（特急・快速）'
};

const JreYokosukasoubukaisoku = [
    {
        ekimeiKanj: '久里浜',
        ekimeiKana: 'くりはま',
        ekimeiRoma: 'Kurihama',
        sttnAddr: '神奈川県横須賀市久里浜一丁目3-7',
        ...JreYokosukasoubukaisokuCommon1,
    },
    {
        ekimeiKanj: '衣笠',
        ekimeiKana: 'きぬがさ',
        ekimeiRoma: 'Kinugasa',
        sttnAddr: '神奈川県横須賀市衣笠栄町二丁目65',
        ...JreYokosukasoubukaisokuCommon2,
    },
    {
        ekimeiKanj: '横須賀',
        ekimeiKana: 'よこすか',
        ekimeiRoma: 'Yokosuka',
        sttnAddr: '神奈川県横須賀市東逸見町一丁目1',
        ...JreYokosukasoubukaisokuCommon2,
    },
    {
        ekimeiKanj: '田浦',
        ekimeiKana: 'たうら',
        ekimeiRoma: 'Taura',
        sttnAddr: '神奈川県横須賀市田浦町一丁目6',
        ...JreYokosukasoubukaisokuCommon2,
    },
    {
        ekimeiKanj: '東逗子',
        ekimeiKana: 'ひがしずし',
        ekimeiRoma: 'Higashi-Zushi',
        sttnAddr: '神奈川県逗子市沼間一丁目2-28',
        ...JreYokosukasoubukaisokuCommon2,
    },
    {
        ekimeiKanj: '逗子',
        ekimeiKana: 'ずし',
        ekimeiRoma: 'Zushi',
        sttnAddr: '神奈川県逗子市逗子一丁目1-10',
        ...JreYokosukasoubukaisokuCommon1,
    },
    {
        ekimeiKanj: '鎌倉',
        ekimeiKana: 'かまくら',
        ekimeiRoma: 'Kamakura',
        sttnAddr: '神奈川県鎌倉市小町一丁目1-1',
        ...JreYokosukasoubukaisokuCommon2,
    },
    {
        ekimeiKanj: '北鎌倉',
        ekimeiKana: 'きたかまくら',
        ekimeiRoma: 'Kita-Kamakura',
        sttnAddr: '神奈川県鎌倉市山ノ内501',
        ...JreYokosukasoubukaisokuCommon2,
    },
    {
        ekimeiKanj: '大船',
        ekimeiKana: 'おおふな',
        ekimeiRoma: 'Ōfuna',
        sttnAddr: '神奈川県鎌倉市大船一丁目1-1',
        ...JreYokosukasoubukaisokuCommon2,
    },
    {
        ekimeiKanj: '戸塚',
        ekimeiKana: 'とつか',
        ekimeiRoma: 'Totsuka',
        sttnAddr: '横浜市戸塚区戸塚町',
        ...JreYokosukasoubukaisokuCommon2,
    },
    {
        ekimeiKanj: '東戸塚',
        ekimeiKana: 'ひがしとつか',
        ekimeiRoma: 'Higashi-Totsuka',
        sttnAddr: '横浜市戸塚区品濃町692',
        ...JreYokosukasoubukaisokuCommon2,
    },
    {
        ekimeiKanj: '保土ケ谷',
        ekimeiKana: 'ほどがや',
        ekimeiRoma: 'Hodogaya',
        sttnAddr: '横浜市保土ケ谷区岩井町1-7',
        ...JreYokosukasoubukaisokuCommon2,
    },
    {
        ekimeiKanj: '横浜',
        ekimeiKana: 'よこはま',
        ekimeiRoma: 'Yokohama',
        sttnAddr: '横浜市西区高島二丁目16-1',
        ...JreYokosukasoubukaisokuCommon2,
    },
    {
        ekimeiKanj: '新川崎',
        ekimeiKana: 'しんかわさき',
        ekimeiRoma: 'Shin-Kawasaki',
        sttnAddr: '川崎市幸区鹿島田一丁目2-1',
        ...JreYokosukasoubukaisokuCommon2,
    },
    {
        ekimeiKanj: '武蔵小杉',
        ekimeiKana: 'むさしこすぎ',
        ekimeiRoma: 'Musashi-Kosugi',
        sttnAddr: '川崎市中原区新丸子東三丁目1111番地',
        ...JreYokosukasoubukaisokuCommon2,
    },
    {
        ekimeiKanj: '西大井',
        ekimeiKana: 'にしおおい',
        ekimeiRoma: 'Nishi-Ōi',
        sttnAddr: '東京都品川区西大井一丁目3-2',
        ...JreYokosukasoubukaisokuCommon2,
    },
    {
        ekimeiKanj: '品川',
        ekimeiKana: 'しながわ',
        ekimeiRoma: 'Shinagawa',
        sttnAddr: '東京都港区高輪三丁目26-27',
        ...JreYokosukasoubukaisokuCommon3,
    },
    {
        ekimeiKanj: '新橋',
        ekimeiKana: 'しんばし',
        ekimeiRoma: 'Shimbashi',
        sttnAddr: '東京都港区新橋二丁目17',
        ...JreYokosukasoubukaisokuCommon2,
    },
    {
        ekimeiKanj: '東京',
        ekimeiKana: 'とうきょう',
        ekimeiRoma: 'Tōkyō',
        sttnAddr: '東京都千代田区丸の内一丁目9-1',
        ...JreYokosukasoubukaisokuCommon3,
    },
    {
        ekimeiKanj: '新日本橋',
        ekimeiKana: 'しんにほんばし',
        ekimeiRoma: 'Shin-Nihombashi',
        sttnAddr: '東京都中央区日本橋室町四丁目4',
        ...JreYokosukasoubukaisokuCommon4,
    },
    {
        ekimeiKanj: '馬喰町',
        ekimeiKana: 'ばくろちょう',
        ekimeiRoma: 'Bakurochō',
        sttnAddr: '東京都中央区日本橋馬喰町一丁目11',
        ...JreYokosukasoubukaisokuCommon4,
    },
    {
        ekimeiKanj: '錦糸町',
        ekimeiKana: 'きんしちょう',
        ekimeiRoma: 'Kinshichō',
        sttnAddr: '東京都墨田区江東橋三丁目14-5',
        ...JreYokosukasoubukaisokuCommon5,
    },
    {
        ekimeiKanj: '新小岩',
        ekimeiKana: 'しんこいわ',
        ekimeiRoma: 'Shin-Koiwa',
        sttnAddr: '東京都葛飾区新小岩一丁目45-1',
        ...JreYokosukasoubukaisokuCommon4,
    },
    {
        ekimeiKanj: '市川',
        ekimeiKana: 'いちかわ',
        ekimeiRoma: 'Ichikawa',
        sttnAddr: '千葉県市川市市川一丁目1-1',
        ...JreYokosukasoubukaisokuCommon4,
    },
    {
        ekimeiKanj: '船橋',
        ekimeiKana: 'ふなばし',
        ekimeiRoma: 'Funabashi',
        sttnAddr: '千葉県船橋市本町七丁目1-7',
        ...JreYokosukasoubukaisokuCommon5,
    },
    {
        ekimeiKanj: '津田沼',
        ekimeiKana: 'つだぬま',
        ekimeiRoma: 'Tsudanuma',
        sttnAddr: '千葉県習志野市津田沼一丁目1-1',
        ...JreYokosukasoubukaisokuCommon4,
    },
    {
        ekimeiKanj: '稲毛',
        ekimeiKana: 'いなげ',
        ekimeiRoma: 'Inage',
        sttnAddr: '千葉市稲毛区稲毛東三丁目19-11',
        ...JreYokosukasoubukaisokuCommon4,
    },
    {
        ekimeiKanj: '千葉',
        ekimeiKana: 'ちば',
        ekimeiRoma: 'Chiba',
        sttnAddr: '千葉市中央区新千葉一丁目1-1',
        ...JreYokosukasoubukaisokuCommon4,
    },
];
