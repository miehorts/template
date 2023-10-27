const SeibuSeibuyuurakuchouCommon = {
    ...compNameSeibu,
    lineName: '西武有楽町線',
    lineBack1: '#ef810f',
};

const SeibuSeibuyuurakuchou = [
    {
        ekimeiKanj: '小竹向原',
        ekimeiKana: 'こたけむかいはら',
        ekimeiRoma: 'Kotake-mukaihara',
        sttnAddr: '東京都練馬区小竹町二丁目16-15',
        ...SeibuSeibuyuurakuchouCommon,
    },
    {
        ekimeiKanj: '新桜台',
        ekimeiKana: 'しんさくらだい',
        ekimeiRoma: 'Shin-Sakuradai',
        sttnAddr: '東京都練馬区桜台一丁目28-11',
        ...SeibuSeibuyuurakuchouCommon,
    },
    {
        ekimeiKanj: '練馬',
        ekimeiKana: 'ねりま',
        ekimeiRoma: 'Nerima',
        sttnAddr: '東京都練馬区練馬一丁目3-5',
        ...SeibuSeibuyuurakuchouCommon,
    },
];
