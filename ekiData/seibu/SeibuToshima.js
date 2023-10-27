const SeibuToshimaCommon = {
    ...compNameSeibu,
    lineName: '豊島線',
    lineBack1: '#ef810f',
};

const SeibuToshima = [
    {
        ekimeiKanj: '練馬',
        ekimeiKana: 'ねりま',
        ekimeiRoma: 'Nerima',
        sttnAddr: '東京都練馬区練馬一丁目3-5',
        ...SeibuToshimaCommon,
    },
    {
        ekimeiKanj: '豊島園',
        ekimeiKana: 'としまえん',
        ekimeiRoma: 'Toshimaen',
        sttnAddr: '東京都練馬区練馬四丁目16-5',
        ...SeibuToshimaCommon,
    },
];
