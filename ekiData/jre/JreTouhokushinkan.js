const JreTouhokushinkanCommon = {
    ...compNameJre,
    lineName: '東北新幹線',
};

const JreTouhokushinkanCommon1 = {
    ...JreTouhokushinkanCommon,
    passArea: '["ShuP"]',
};

const JreTouhokushinkan = [
    {
        ekimeiKanj: '東京',
        ekimeiKana: 'とうきょう',
        ekimeiRoma: 'Tōkyō',
        sttnAddr: '東京都千代田区丸の内一丁目9-1',
        ...JreTouhokushinkanCommon1
    },
    {
        ekimeiKanj: '上野',
        ekimeiKana: 'うえの',
        ekimeiRoma: 'Ueno',
        sttnAddr: '東京都台東区上野七丁目1-1',
        ...JreTouhokushinkanCommon1
    },
    {
        ekimeiKanj: '大宮',
        ekimeiKana: 'おおみや',
        ekimeiRoma: 'Ōmiya',
        sttnAddr: '埼玉県さいたま市大宮区錦町630',
        ...JreTouhokushinkanCommon1
    },
    {
        ekimeiKanj: '小山',
        ekimeiKana: 'おやま',
        ekimeiRoma: 'Oyama',
        sttnAddr: '栃木県小山市城山町三丁目3-22',
        ...JreTouhokushinkanCommon1
    },
    {
        ekimeiKanj: '宇都宮',
        ekimeiKana: 'うつのみや',
        ekimeiRoma: 'Utsunomiya',
        sttnAddr: '栃木県宇都宮市川向町1番23号',
        ...JreTouhokushinkanCommon1
    },
    {
        ekimeiKanj: '那須塩原',
        ekimeiKana: 'なすしおばら',
        ekimeiRoma: 'Nasushiobara',
        sttnAddr: '栃木県那須塩原市大原間561',
        ...JreTouhokushinkanCommon1
    },
    {
        ekimeiKanj: '新白河',
        ekimeiKana: 'しんしらかわ',
        ekimeiRoma: 'Shin-Shirakawa',
        sttnAddr: '福島県西白河郡西郷村字道南東114',
        ...JreTouhokushinkanCommon1
    },
    {
        ekimeiKanj: '郡山',
        ekimeiKana: 'こおりやま',
        ekimeiRoma: 'Kōriyama',
        sttnAddr: '福島県郡山市字燧田195',
        ...JreTouhokushinkanCommon1
    },
    {
        ekimeiKanj: '福島',
        ekimeiKana: 'ふくしま',
        ekimeiRoma: 'Fukushima',
        sttnAddr: '福島県福島市栄町1番1号',
        ...JreTouhokushinkanCommon1
    },
    {
        ekimeiKanj: '白石蔵王',
        ekimeiKana: 'しろいしざおう',
        ekimeiRoma: 'Shiroishizaō',
        sttnAddr: '宮城県白石市大鷹沢三沢字桜田11-1',
        ...JreTouhokushinkanCommon1
    },
    {
        ekimeiKanj: '仙台',
        ekimeiKana: 'せんだい',
        ekimeiRoma: 'Sendai',
        sttnAddr: '仙台市青葉区中央一丁目1-1',
        ...JreTouhokushinkanCommon1
    },
    {
        ekimeiKanj: '古川',
        ekimeiKana: 'ふるかわ',
        ekimeiRoma: 'Furukawa',
        sttnAddr: '宮城県大崎市古川駅前大通一丁目7-35',
        ...JreTouhokushinkanCommon1
    },
    {
        ekimeiKanj: 'くりこま高原',
        ekimeiKana: 'くりこまこうげん',
        ekimeiRoma: 'Kurikoma-Kōgen',
        sttnAddr: '宮城県栗原市志波姫新熊谷284',
        ...JreTouhokushinkanCommon1
    },
    {
        ekimeiKanj: '一ノ関',
        ekimeiKana: 'いちのせき',
        ekimeiRoma: 'Ichinoseki',
        sttnAddr: '岩手県一関市駅前67-1',
        ...JreTouhokushinkanCommon
    },
    {
        ekimeiKanj: '水沢江刺',
        ekimeiKana: 'みずさわえさし',
        ekimeiRoma: 'Mizusawaesashi',
        sttnAddr: '岩手県奥州市水沢羽田町駅前一丁目185',
        ...JreTouhokushinkanCommon
    },
    {
        ekimeiKanj: '北上',
        ekimeiKana: 'きたかみ',
        ekimeiRoma: 'Kitakami',
        sttnAddr: '岩手県北上市大通り一丁目1-2',
        ...JreTouhokushinkanCommon
    },
    {
        ekimeiKanj: '新花巻',
        ekimeiKana: 'しんはなまき',
        ekimeiRoma: 'Shin-Hanamaki',
        sttnAddr: '岩手県花巻市矢沢10-87-7',
        ...JreTouhokushinkanCommon
    },
    {
        ekimeiKanj: '盛岡',
        ekimeiKana: 'もりおか',
        ekimeiRoma: 'Morioka',
        sttnAddr: '岩手県盛岡市盛岡駅前通1-48',
        ...JreTouhokushinkanCommon
    },
    {
        ekimeiKanj: 'いわて沼宮内',
        ekimeiKana: 'いわてぬまくない',
        ekimeiRoma: 'Iwate-Numakunai',
        sttnAddr: '岩手県岩手郡岩手町大字江刈内7-9',
        ...JreTouhokushinkanCommon
    },
    {
        ekimeiKanj: '二戸',
        ekimeiKana: 'にのへ',
        ekimeiRoma: 'Ninohe',
        sttnAddr: '岩手県二戸市石切所字森合63-68',
        ...JreTouhokushinkanCommon
    },
    {
        ekimeiKanj: '八戸',
        ekimeiKana: 'はちのへ',
        ekimeiRoma: 'Hachinohe',
        sttnAddr: '青森県八戸市大字尻内町字館田2-2',
        ...JreTouhokushinkanCommon
    },
    {
        ekimeiKanj: '七戸十和田',
        ekimeiKana: 'しちのへとわだ',
        ekimeiRoma: 'Shichinohe-Towada',
        sttnAddr: '青森県上北郡七戸町字荒熊内67-46',
        ...JreTouhokushinkanCommon
    },
    {
        ekimeiKanj: '新青森',
        ekimeiKana: 'しんあおもり',
        ekimeiRoma: 'Shin-Aomori',
        sttnAddr: '青森県青森市大字石江字高間140-2',
        ...JreTouhokushinkanCommon
    },
];
