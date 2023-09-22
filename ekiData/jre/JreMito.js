const JreMitoCommon = {
    ...compNameJre,
    lineName: '水戸線',
}

const JreMitoCommon1 = {
    ...JreMitoCommon,
    passArea: '["Shup", "NHSP"]',
}

const JreMitoCommon2 = {
    ...JreMitoCommon,
    passArea: '["Shup"]',
}

const JreMito = [
    {
        ekimeiKanj: '小山',
        ekimeiKana: 'おやま',
        ekimeiRoma: 'Oyama',
        sttnAddr: '栃木県小山市城山町三丁目3-22',
        ...JreMitoCommon1
    },
    {
        ekimeiKanj: '小田林',
        ekimeiKana: 'おたばやし',
        ekimeiRoma: 'Otabayashi',
        sttnAddr: '茨城県結城市大字小田林2546',
        ...JreMitoCommon1
    },
    {
        ekimeiKanj: '結城',
        ekimeiKana: 'ゆうき',
        ekimeiRoma: 'Yūki',
        sttnAddr: '茨城県結城市大字結城7490-2',
        ...JreMitoCommon1
    },
    {
        ekimeiKanj: '東結城',
        ekimeiKana: 'ひがしゆうき',
        ekimeiRoma: 'Higashi-Yūki',
        sttnAddr: '茨城県結城市大字結城3320',
        ...JreMitoCommon1
    },
    {
        ekimeiKanj: '川島',
        ekimeiKana: 'かわしま',
        ekimeiRoma: 'Kawashima',
        sttnAddr: '茨城県筑西市伊佐山168-1',
        ...JreMitoCommon1
    },
    {
        ekimeiKanj: '玉戸',
        ekimeiKana: 'たまど',
        ekimeiRoma: 'Tamado',
        sttnAddr: '茨城県筑西市玉戸1675-1',
        ...JreMitoCommon1
    },
    {
        ekimeiKanj: '下館',
        ekimeiKana: 'しもだて',
        ekimeiRoma: 'Shimodate',
        sttnAddr: '茨城県筑西市乙86',
        ...JreMitoCommon1
    },
    {
        ekimeiKanj: '新治',
        ekimeiKana: 'にいはり',
        ekimeiRoma: 'Niihari',
        sttnAddr: '茨城県筑西市新治2003-3',
        ...JreMitoCommon2
    },
    {
        ekimeiKanj: '大和',
        ekimeiKana: 'やまと',
        ekimeiRoma: 'Yamato',
        sttnAddr: '茨城県桜川市高森926',
        ...JreMitoCommon2
    },
    {
        ekimeiKanj: '岩瀬',
        ekimeiKana: 'いわせ',
        ekimeiRoma: 'Iwase',
        sttnAddr: '茨城県桜川市犬田1365',
        ...JreMitoCommon2
    },
    {
        ekimeiKanj: '羽黒',
        ekimeiKana: 'はぐろ',
        ekimeiRoma: 'Haguro',
        sttnAddr: '茨城県桜川市友部1553',
        ...JreMitoCommon2
    },
    {
        ekimeiKanj: '福原',
        ekimeiKana: 'ふくはら',
        ekimeiRoma: 'Fukuhara',
        sttnAddr: '茨城県笠間市福原2144',
        ...JreMitoCommon2
    },
    {
        ekimeiKanj: '稲田',
        ekimeiKana: 'いなだ',
        ekimeiRoma: 'Inada',
        sttnAddr: '茨城県笠間市稲田2333',
        ...JreMitoCommon2
    },
    {
        ekimeiKanj: '笠間',
        ekimeiKana: 'かさま',
        ekimeiRoma: 'Kasama',
        sttnAddr: '茨城県笠間市下市毛',
        ...JreMitoCommon2
    },
    {
        ekimeiKanj: '宍戸',
        ekimeiKana: 'ししど',
        ekimeiRoma: 'Shishido',
        sttnAddr: '茨城県笠間市大田町',
        ...JreMitoCommon2
    },
    {
        ekimeiKanj: '友部',
        ekimeiKana: 'ともべ',
        ekimeiRoma: 'Tomobe',
        sttnAddr: '茨城県笠間市友部駅前1-24',
        ...JreMitoCommon2
    },
];
