const SeibuSeibuenCommon = {
    ...compNameSeibu,
    lineName: '西武園線',
};

const SeibuSeibuen = [
    {
        ekimeiKanj: '東村山',
        ekimeiKana: 'ひがしむらやま',
        ekimeiRoma: 'Higashi-Murayama',
        sttnAddr: '東京都東村山市本町二丁目3番地32',
        ...SeibuSeibuenCommon,
    },
    {
        ekimeiKanj: '西武園',
        ekimeiKana: 'せいぶえん',
        ekimeiRoma: 'Seibuen',
        sttnAddr: '東京都東村山市多摩湖町四丁目29-1',
        ...SeibuSeibuenCommon,
    },
];
