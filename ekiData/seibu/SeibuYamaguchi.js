const SeibuYamaguchiCommon = {
    ...compNameSeibu,
    lineName: '山口線',
};

const SeibuYamaguchi = [
    {
        ekimeiKanj: '多摩湖',
        ekimeiKana: 'たまこ',
        ekimeiRoma: 'Tamako',
        sttnAddr: '東京都東村山市多摩湖町三丁目15番地18号',
        ...SeibuYamaguchiCommon,
    },
    {
        ekimeiKanj: '西武園ゆうえんち',
        ekimeiKana: 'せいぶえんゆうえんち',
        ekimeiRoma: 'Seibuen-yūenchi',
        sttnAddr: '埼玉県所沢市山口2939',
        ...SeibuYamaguchiCommon,
    },
    {
        ekimeiKanj: '西武球場前',
        ekimeiKana: 'せいぶきゅうじょうまえ',
        ekimeiRoma: 'Seibukyūjō-mae',
        sttnAddr: '埼玉県所沢市上山口2090-3',
        ...SeibuYamaguchiCommon,
    },
];
