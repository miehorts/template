const JreHachikouCommon = {
    ...compNameJre,
    lineName: '八高線',
    passArea: '["Shup", "NHSP"]',
}

const JreHachikouCommon1 = {
    ...compNameJre,
    lineName: JreHachikouCommon.lineName,
    passArea: '["Shup"]',
}

const JreHachikou = [
    {
        ekimeiKanj: '八王子',
        ekimeiKana: 'はちおうじ',
        ekimeiRoma: 'Hachiōji',
        sttnAddr: '東京都八王子市旭町1-1',
        ...JreHachikouCommon
    },
    {
        ekimeiKanj: '北八王子',
        ekimeiKana: 'きたはちおうじ',
        ekimeiRoma: 'Kita-Hachiōji',
        sttnAddr: '東京都八王子市石川町2953-1',
        ...JreHachikouCommon
    },
    {
        ekimeiKanj: '小宮',
        ekimeiKana: 'こみや',
        ekimeiRoma: 'Komiya',
        sttnAddr: '東京都八王子市小宮町789',
        ...JreHachikouCommon
    },
    {
        ekimeiKanj: '拝島',
        ekimeiKana: 'はいじま',
        ekimeiRoma: 'Haijima',
        sttnAddr: '東京都昭島市松原町四丁目14-4',
        ...JreHachikouCommon
    },
    {
        ekimeiKanj: '東福生',
        ekimeiKana: 'ひがしふっさ',
        ekimeiRoma: 'Higashi-Fussa',
        sttnAddr: '東京都福生市武蔵野台一丁目1-7',
        ...JreHachikouCommon
    },
    {
        ekimeiKanj: '箱根ケ崎',
        ekimeiKana: 'はこねがさき',
        ekimeiRoma: 'Hakonegasaki',
        sttnAddr: '東京都西多摩郡瑞穂町大字箱根ヶ崎397',
        ...JreHachikouCommon
    },
    {
        ekimeiKanj: '金子',
        ekimeiKana: 'かねこ',
        ekimeiRoma: 'Kaneko',
        sttnAddr: '埼玉県入間市大字南峯429',
        ...JreHachikouCommon
    },
    {
        ekimeiKanj: '東飯能',
        ekimeiKana: 'ひがしはんのう',
        ekimeiRoma: 'Higashi-Hannō',
        sttnAddr: '埼玉県飯能市東町1-5',
        ...JreHachikouCommon
    },
    {
        ekimeiKanj: '高麗川',
        ekimeiKana: 'こまがわ',
        ekimeiRoma: 'Komagawa',
        sttnAddr: '玉県日高市大字原宿',
        ...JreHachikouCommon
    },
    {
        ekimeiKanj: '毛呂',
        ekimeiKana: 'もろ',
        ekimeiRoma: 'Moro',
        sttnAddr: '埼玉県入間郡毛呂山町大字岩井2723',
        ...JreHachikouCommon
    },
    {
        ekimeiKanj: '越生',
        ekimeiKana: 'おごせ',
        ekimeiRoma: 'Ogose',
        sttnAddr: '埼玉県入間郡越生町大字越生387-3',
        ...JreHachikouCommon
    },
    {
        ekimeiKanj: '明覚',
        ekimeiKana: 'みょうかく',
        ekimeiRoma: 'Myōkaku',
        sttnAddr: '埼玉県比企郡ときがわ町大字番匠475-2',
        ...JreHachikouCommon
    },
    {
        ekimeiKanj: '小川町',
        ekimeiKana: 'おがわまち',
        ekimeiRoma: 'Ogawamachi',
        sttnAddr: '埼玉県比企郡小川町大字大塚1146',
        ...JreHachikouCommon
    },
    {
        ekimeiKanj: '竹沢',
        ekimeiKana: 'たけざわ',
        ekimeiRoma: 'Takezawa',
        sttnAddr: '埼玉県比企郡小川町大字勝呂719',
        ...JreHachikouCommon
    },
    {
        ekimeiKanj: '折原',
        ekimeiKana: 'おりはら',
        ekimeiRoma: 'Orihara',
        sttnAddr: '埼玉県大里郡寄居町大字西ノ入602-4',
        ...JreHachikouCommon
    },
    {
        ekimeiKanj: '寄居',
        ekimeiKana: 'よりい',
        ekimeiRoma: 'Yorii',
        sttnAddr: '埼玉県大里郡寄居町大字寄居1071-2',
        ...JreHachikouCommon
    },
    {
        ekimeiKanj: '用土',
        ekimeiKana: 'ようど',
        ekimeiRoma: 'Yōdo',
        sttnAddr: '埼玉県大里郡寄居町大字用土1724',
        passArea: '[]',
        ...JreHachikouCommon1
    },
    {
        ekimeiKanj: '松久',
        ekimeiKana: 'まつひさ',
        ekimeiRoma: 'Matsuhisa',
        sttnAddr: '埼玉県児玉郡美里町大字甘粕140',
        passArea: '[]',
        ...JreHachikouCommon1
    },
    {
        ekimeiKanj: '児玉',
        ekimeiKana: 'こだま',
        ekimeiRoma: 'Kodama',
        sttnAddr: '	埼玉県本庄市児玉町児玉2482',
        passArea: '[]',
        ...JreHachikouCommon1
    },
    {
        ekimeiKanj: '丹荘',
        ekimeiKana: 'たんしょう',
        ekimeiRoma: 'Tanshō',
        sttnAddr: '埼玉県児玉郡神川町大字植竹783',
        passArea: '[]',
        ...JreHachikouCommon1
    },
    {
        ekimeiKanj: '群馬藤岡',
        ekimeiKana: 'ぐんまふじおか',
        ekimeiRoma: 'Gumma-Fujioka',
        sttnAddr: '群馬県藤岡市藤岡629-2',
        passArea: '[]',
        ...JreHachikouCommon1
    },
    {
        ekimeiKanj: '北藤岡',
        ekimeiKana: 'きたふじおか',
        ekimeiRoma: 'Kita-Fujioka',
        sttnAddr: '群馬県藤岡市立石558-1',
        passArea: '[]',
        ...JreHachikouCommon1
    },
    {
        ekimeiKanj: '倉賀野',
        ekimeiKana: 'くらがの',
        ekimeiRoma: 'Kuragano',
        sttnAddr: '群馬県高崎市倉賀野町1797',
        passArea: '[]',
        ...JreHachikouCommon1
    },
    /*
    {
        ekimeiKanj: '高崎',
        ekimeiKana: 'たかさき',
        ekimeiRoma: 'Takasaki',
        sttnAddr: '群馬県高崎市八島町222',
        ...JreHachikouCommon
    },
    */
];
