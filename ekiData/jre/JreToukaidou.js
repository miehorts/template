const JreToukaidouCommon = {
    ...compNameJre,
    lineName: '東海道線',
    lineBack1: '#f68b1e',
    passArea: '["NHSP"]',
};

const JreToukaidouCommon1 = {
    ...JreToukaidouCommon,
    passArea: '["ShuP", "NHSP"]',
};

const JreToukaidouCommon2 = {
    ...JreToukaidouCommon,
    passArea: '["ShuP"]',
};

const JreToukaidou = [
    {
        ekimeiKanj: '東京',
        ekimeiKana: 'とうきょう',
        ekimeiRoma: 'Tōkyō',
        sttnAddr: '東京都千代田区丸の内一丁目9-1',
        ...JreToukaidouCommon1
    },
    {
        ekimeiKanj: '新橋',
        ekimeiKana: 'しんばし',
        ekimeiRoma: 'Shimbashi',
        sttnAddr: '東京都港区新橋二丁目17',
        ...JreToukaidouCommon1
    },
    {
        ekimeiKanj: '品川',
        ekimeiKana: 'しながわ',
        ekimeiRoma: 'Shinagawa',
        sttnAddr: '東京都港区高輪三丁目26-27',
        ...JreToukaidouCommon1
    },
    {
        ekimeiKanj: '川崎',
        ekimeiKana: 'かわさき',
        ekimeiRoma: 'Kawasaki',
        sttnAddr: '川崎市川崎区駅前本町26-1',
        ...JreToukaidouCommon1
    },
    {
        ekimeiKanj: '横浜',
        ekimeiKana: 'よこはま',
        ekimeiRoma: 'Yokohama',
        sttnAddr: '横浜市西区高島二丁目16-1',
        ...JreToukaidouCommon1
    },
    {
        ekimeiKanj: '戸塚',
        ekimeiKana: 'とつか',
        ekimeiRoma: 'Totsuka',
        sttnAddr: '横浜市戸塚区戸塚町',
        ...JreToukaidouCommon1
    },
    {
        ekimeiKanj: '大船',
        ekimeiKana: 'おおふな',
        ekimeiRoma: 'Ōfuna',
        sttnAddr: '神奈川県鎌倉市大船一丁目1-1',
        ...JreToukaidouCommon1
    },
    {
        ekimeiKanj: '藤沢',
        ekimeiKana: 'ふじさわ',
        ekimeiRoma: 'Fujisawa',
        sttnAddr: '神奈川県藤沢市藤沢75番地',
        ...JreToukaidouCommon1
    },
    {
        ekimeiKanj: '辻堂',
        ekimeiKana: 'つじどう',
        ekimeiRoma: 'Tsujidō',
        sttnAddr: '神奈川県藤沢市辻堂一丁目1-1',
        ...JreToukaidouCommon1
    },
    {
        ekimeiKanj: '茅ケ崎',
        ekimeiKana: 'ちがさき',
        ekimeiRoma: 'Chigasaki',
        sttnAddr: '神奈川県茅ヶ崎市元町1-1',
        ...JreToukaidouCommon1
    },
    {
        ekimeiKanj: '平塚',
        ekimeiKana: 'ひらつか',
        ekimeiRoma: 'Hiratsuka',
        sttnAddr: '神奈川県平塚市宝町1-1',
        ...JreToukaidouCommon1
    },
    {
        ekimeiKanj: '大磯',
        ekimeiKana: 'おおいそ',
        ekimeiRoma: 'Ōiso',
        sttnAddr: '神奈川県中郡大磯町東小磯1',
        ...JreToukaidouCommon1
    },
    {
        ekimeiKanj: '二宮',
        ekimeiKana: 'にのみや',
        ekimeiRoma: 'Ninomiya',
        sttnAddr: '神奈川県中郡二宮町二宮838',
        ...JreToukaidouCommon1
    },
    {
        ekimeiKanj: '国府津',
        ekimeiKana: 'こうづ',
        ekimeiRoma: 'Kōzu',
        sttnAddr: '神奈川県小田原市国府津四丁目1-1',
        ...JreToukaidouCommon1
    },
    {
        ekimeiKanj: '鴨宮',
        ekimeiKana: 'かものみや',
        ekimeiRoma: 'Kamonomiya',
        sttnAddr: '神奈川県小田原市鴨宮30',
        ...JreToukaidouCommon1
    },
    {
        ekimeiKanj: '小田原',
        ekimeiKana: 'おだわら',
        ekimeiRoma: 'Odawara',
        sttnAddr: '神奈川県小田原市栄町一丁目1-9',
        ...JreToukaidouCommon1
    },
    {
        ekimeiKanj: '早川',
        ekimeiKana: 'はやかわ',
        ekimeiRoma: 'Hayakawa',
        sttnAddr: '神奈川県小田原市早川一丁目16-1',
        ...JreToukaidouCommon2
    },
    {
        ekimeiKanj: '根府川',
        ekimeiKana: 'ねぶかわ',
        ekimeiRoma: 'Nebukawa',
        sttnAddr: '神奈川県小田原市根府川109',
        ...JreToukaidouCommon2
    },
    {
        ekimeiKanj: '真鶴',
        ekimeiKana: 'まなづる',
        ekimeiRoma: 'Manazuru',
        sttnAddr: '神奈川県足柄下郡真鶴町真鶴1824',
        ...JreToukaidouCommon2
    },
    {
        ekimeiKanj: '湯河原',
        ekimeiKana: 'ゆがわら',
        ekimeiRoma: 'Yugawara',
        sttnAddr: '神奈川県足柄下郡湯河原町宮下670',
        ...JreToukaidouCommon2
    },
    {
        ekimeiKanj: '熱海',
        ekimeiKana: 'あたみ',
        ekimeiRoma: 'Atami',
        sttnAddr: '静岡県熱海市田原本町11-1',
        ...JreToukaidouCommon2
    },
];
