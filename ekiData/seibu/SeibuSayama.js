const SeibuSayamaCommon = {
    ...compNameSeibu,
    lineName: '狭山線',
};

const SeibuSayama = [
    {
        ekimeiKanj: '西所沢',
        ekimeiKana: 'にしところざわ',
        ekimeiRoma: 'Nishi-Tokorozawa',
        sttnAddr: '埼玉県所沢市西所沢一丁目11-9',
        ...SeibuSayamaCommon,
    },
    {
        ekimeiKanj: '下山口',
        ekimeiKana: 'しもやまぐち',
        ekimeiRoma: 'Shimo-Yamaguchi',
        sttnAddr: '埼玉県所沢市山口1254-3',
        ...SeibuSayamaCommon,
    },
    {
        ekimeiKanj: '西武球場前',
        ekimeiKana: 'せいぶきゅうじょうまえ',
        ekimeiRoma: 'Seibukyūjō-mae',
        sttnAddr: '埼玉県所沢市上山口2090-3',
        ...SeibuSayamaCommon,
    },
];
