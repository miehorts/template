const MeitetsuKuukouCommon = {
    ...compNameMeitetsu,
    lineName: '空港線',
    lineBack1: '#1065ab',
};

const MeitetsuKuukou = [
    {
        ekimeiKanj: '常滑',
        ekimeiKana: 'とこなめ',
        ekimeiRoma: 'TOKONAME',
        sttnAddr: '愛知県常滑市鯉江本町五丁目141-2',
        ...MeitetsuKuukouCommon
    },
    {
        ekimeiKanj: 'りんくう常滑',
        ekimeiKana: 'りんくうとこなめ',
        ekimeiRoma: 'RINKŪ TOKONAME',
        sttnAddr: '愛知県常滑市りんくう町二丁目3',
        ...MeitetsuKuukouCommon
    },
    {
        ekimeiKanj: '中部国際空港',
        ekimeiKana: 'ちゅうぶこくさいくうこう',
        ekimeiRoma: 'CENTRAL JAPAN INTERNATIONAL AIRPORT',
        sttnAddr: '愛知県常滑市セントレア1-1',
        ...MeitetsuKuukouCommon
    },
];
