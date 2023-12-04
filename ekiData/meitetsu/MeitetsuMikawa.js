const MeitetsuMikawaCommon = {
    ...compNameMeitetsu,
    lineName: '三河線',
};

const MeitetsuMikawaCommon1 = {
    ...MeitetsuMikawaCommon,
    lineName: '三河線（山線）',
    lineBack1: '#9eb03a',
};

const MeitetsuMikawaCommon2 = {
    ...MeitetsuMikawaCommon,
    lineName: '三河線（山線）／三河線（海線）',
    lineBack1: '#9eb03a',
    lineBack1: '#654e9e',
};

const MeitetsuMikawaCommon3 = {
    ...MeitetsuMikawaCommon,
    lineName: '三河線（海線）',
    lineBack1: '#654e9e',
};

const MeitetsuMikawa = [
    {
        ekimeiKanj: '猿投',
        ekimeiKana: 'さなげ',
        ekimeiRoma: 'SANAGE',
        sttnAddr: '愛知県豊田市井上町五丁目62',
        ...MeitetsuMikawaCommon1
    },
    {
        ekimeiKanj: '平戸橋',
        ekimeiKana: 'ひらとばし',
        ekimeiRoma: 'HIRATO-BASHI',
        sttnAddr: '愛知県豊田市平戸橋町石平43',
        ...MeitetsuMikawaCommon1
    },
    {
        ekimeiKanj: '越戸',
        ekimeiKana: 'こしど',
        ekimeiRoma: 'KOSHIDO',
        sttnAddr: '愛知県豊田市越戸町梅盛4',
        ...MeitetsuMikawaCommon1
    },
    {
        ekimeiKanj: '梅坪',
        ekimeiKana: 'うめつぼ',
        ekimeiRoma: 'UMETSUBO',
        sttnAddr: '愛知県豊田市梅坪町7丁目125',
        ...MeitetsuMikawaCommon1
    },
    {
        ekimeiKanj: '豊田市',
        ekimeiKana: 'とよたし',
        ekimeiRoma: 'TOYOTASHI',
        sttnAddr: '愛知県豊田市若宮町一丁目35',
        ...MeitetsuMikawaCommon1
    },
    {
        ekimeiKanj: '上挙母',
        ekimeiKana: 'うわごろも',
        ekimeiRoma: 'UWA GOROMO',
        sttnAddr: '愛知県豊田市金谷町二丁目96',
        ...MeitetsuMikawaCommon1
    },
    {
        ekimeiKanj: '土橋',
        ekimeiKana: 'つちはし',
        ekimeiRoma: 'TSUCHIHASHI',
        sttnAddr: '愛知県豊田市土橋町八丁目145',
        ...MeitetsuMikawaCommon1
    },
    {
        ekimeiKanj: '竹村',
        ekimeiKana: 'たけむら',
        ekimeiRoma: 'TAKEMURA',
        sttnAddr: '愛知県豊田市竹町宮下16',
        ...MeitetsuMikawaCommon1
    },
    {
        ekimeiKanj: '若林',
        ekimeiKana: 'わかばやし',
        ekimeiRoma: 'WAKABAYASHI',
        sttnAddr: '愛知県豊田市若林東町沖田37',
        ...MeitetsuMikawaCommon1
    },
    {
        ekimeiKanj: '三河八橋',
        ekimeiKana: 'みかわやつはし',
        ekimeiRoma: 'MIKAWA YATSUHASHI',
        sttnAddr: '愛知県豊田市花園町五反田39',
        ...MeitetsuMikawaCommon1
    },
    {
        ekimeiKanj: '三河知立',
        ekimeiKana: 'みかわちりゅう',
        ekimeiRoma: 'MIKAWA CHIRYŪ',
        sttnAddr: '愛知県知立市新地町吉良道東14番地5',
        ...MeitetsuMikawaCommon1
    },
    {
        ekimeiKanj: '知立',
        ekimeiKana: 'ちりゅう',
        ekimeiRoma: 'CHIRYŪ',
        sttnAddr: '愛知県知立市栄二丁目60',
        ...MeitetsuMikawaCommon2
    },
    {
        ekimeiKanj: '重原',
        ekimeiKana: 'しげはら',
        ekimeiRoma: 'SHIGEHARA',
        sttnAddr: '	愛知県知立市上重原町本郷4-4',
        ...MeitetsuMikawaCommon3
    },
    {
        ekimeiKanj: '刈谷',
        ekimeiKana: 'かりや',
        ekimeiRoma: 'KARIYA',
        sttnAddr: '愛知県刈谷市若松町1丁目78番地',
        ...MeitetsuMikawaCommon3
    },
    {
        ekimeiKanj: '刈谷市',
        ekimeiKana: 'かりやし',
        ekimeiRoma: 'KARIYASHI',
        sttnAddr: '愛知県刈谷市広小路三丁目504',
        ...MeitetsuMikawaCommon3
    },
    {
        ekimeiKanj: '小垣江',
        ekimeiKana: 'おがきえ',
        ekimeiRoma: 'OGAKIE',
        sttnAddr: '愛知県刈谷市小垣江町下半ノ木20-3',
        ...MeitetsuMikawaCommon3
    },
    {
        ekimeiKanj: '吉浜',
        ekimeiKana: 'よしはま',
        ekimeiRoma: 'YOSHIHAMA',
        sttnAddr: '愛知県高浜市屋敷町一丁目2-30',
        ...MeitetsuMikawaCommon3
    },
    {
        ekimeiKanj: '三河高浜',
        ekimeiKana: 'みかわたかはま',
        ekimeiRoma: 'MIKAWA TAKAHAMA',
        sttnAddr: '愛知県高浜市春日町五丁目3-1',
        ...MeitetsuMikawaCommon3
    },
    {
        ekimeiKanj: '高浜港',
        ekimeiKana: 'たかはまみなと',
        ekimeiRoma: 'TAKAHAMA-MINATO',
        sttnAddr: '愛知県高浜市青木町六丁目3-1',
        ...MeitetsuMikawaCommon3
    },
    {
        ekimeiKanj: '北新川',
        ekimeiKana: 'きたしんかわ',
        ekimeiRoma: 'KITA SHINKAWA',
        sttnAddr: '愛知県碧南市久沓町四丁目19',
        ...MeitetsuMikawaCommon3
    },
    {
        ekimeiKanj: '新川町',
        ekimeiKana: 'しんかわまち',
        ekimeiRoma: 'SHINKAWA-MACHI',
        sttnAddr: '愛知県碧南市新川町三丁目113',
        ...MeitetsuMikawaCommon3
    },
    {
        ekimeiKanj: '碧南中央',
        ekimeiKana: 'へきなんちゅうおう',
        ekimeiRoma: 'HEKINAN-CHŪŌ',
        sttnAddr: '愛知県碧南市栄町三丁目59',
        ...MeitetsuMikawaCommon3
    },
    {
        ekimeiKanj: '碧南',
        ekimeiKana: 'へきなん',
        ekimeiRoma: 'HEKINAN',
        sttnAddr: '愛知県碧南市中町五丁目48',
        ...MeitetsuMikawaCommon3
    },
];
