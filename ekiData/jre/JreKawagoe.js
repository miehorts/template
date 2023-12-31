const JreKawagoeCommon = {
    ...compNameJre,
    lineName: '川越線',
    passArea: '["ShuP", "NHSP"]',
};

const JreKawagoeCommon1 = {
    ...JreKawagoeCommon,
    lineBack1: '#00ac9a',
}

const JreKawagoeCommon2 = {
    ...JreKawagoeCommon,
    lineBack1: '#a8a39d',
}

const JreKawagoeCommon3 = {
    ...JreKawagoeCommon,
    lineBack1: '#00ac9a',
    lineBack2: '#a8a39d',
}

const JreKawagoe = [
    {
        ekimeiKanj: '大宮',
        ekimeiKana: 'おおみや',
        ekimeiRoma: 'Ōmiya',
        sttnAddr: '埼玉県さいたま市大宮区錦町',
        ...JreKawagoeCommon2
    },
    {
        ekimeiKanj: '日進',
        ekimeiKana: 'にっしん',
        ekimeiRoma: 'Nisshin',
        sttnAddr: '埼玉県さいたま市北区日進町二丁目',
        ...JreKawagoeCommon1
    },
    {
        ekimeiKanj: '西大宮',
        ekimeiKana: 'にしおおみや',
        ekimeiRoma: 'Nishi-Ōmiya',
        sttnAddr: '埼玉県さいたま市西区西大宮一丁目',
        ...JreKawagoeCommon1
    },
    {
        ekimeiKanj: '指扇',
        ekimeiKana: 'さしおうぎ',
        ekimeiRoma: 'Sashiōgi',
        sttnAddr: '埼玉県さいたま市西区大字宝来',
        ...JreKawagoeCommon1
    },
    {
        ekimeiKanj: '南古谷',
        ekimeiKana: 'みなみふるや',
        ekimeiRoma: 'Minami-Furuya',
        sttnAddr: '埼玉県川越市大字並木',
        ...JreKawagoeCommon1
    },
    {
        ekimeiKanj: '川越',
        ekimeiKana: 'かわごえ',
        ekimeiRoma: 'Kawagoe',
        sttnAddr: '埼玉県川越市脇田本町39-19',
        ...JreKawagoeCommon3
    },
    {
        ekimeiKanj: '西川越',
        ekimeiKana: 'にしかわごえ',
        ekimeiRoma: 'Nishi-Kawagoe',
        sttnAddr: '埼玉県川越市大字小ケ谷',
        ...JreKawagoeCommon2
    },
    {
        ekimeiKanj: '的場',
        ekimeiKana: 'まとば',
        ekimeiRoma: 'Matoba',
        sttnAddr: '埼玉県川越市大字的場',
        ...JreKawagoeCommon2
    },
    {
        ekimeiKanj: '笠幡',
        ekimeiKana: 'かさはた',
        ekimeiRoma: 'Kasahata',
        sttnAddr: '埼玉県川越市大字笠幡',
        ...JreKawagoeCommon2
    },
    {
        ekimeiKanj: '武蔵高萩',
        ekimeiKana: 'むさしたかはぎ',
        ekimeiRoma: 'Musashi-Takahagi',
        sttnAddr: '埼玉県日高市大字高萩',
        ...JreKawagoeCommon2
    },
    {
        ekimeiKanj: '高麗川',
        ekimeiKana: 'こまがわ',
        ekimeiRoma: 'Komagawa',
        sttnAddr: '埼玉県日高市大字原宿',
        ...JreKawagoeCommon2
    },
];
