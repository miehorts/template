const JreIiyamaCommon = {
    ...compNameJre,
    lineName: '飯山線',
}

const JreIiyama = [
    /*
    {
        ekimeiKanj: '長野',
        ekimeiKana: 'ながの',
        ekimeiRoma: 'Nagano',
        sttnAddr: '長野県長野市大字栗田1038',
        ...JreIiyamaCommon
    },
    {
        ekimeiKanj: '北長野',
        ekimeiKana: 'きたながの',
        ekimeiRoma: 'KITA-NAGANO',
        sttnAddr: '長野県長野市中越二丁目34-34',
        ...JreIiyamaCommon
    },
    {
        ekimeiKanj: '三才',
        ekimeiKana: 'さんさい',
        ekimeiRoma: 'SANSAI',
        sttnAddr: '長野県長野市大字三才字念仏塚2207',
        ...JreIiyamaCommon
    },
    */
    {
        ekimeiKanj: '豊野',
        ekimeiKana: 'とよの',
        ekimeiRoma: 'TOYONO',
        sttnAddr: '長野県長野市豊野町豊野1002',
        ...JreIiyamaCommon
    },
    {
        ekimeiKanj: '信濃浅野',
        ekimeiKana: 'しなのあさの',
        ekimeiRoma: 'Shinano-Asano',
        sttnAddr: '長野県長野市豊野町浅野',
        ...JreIiyamaCommon
    },
    {
        ekimeiKanj: '立ケ花',
        ekimeiKana: 'たてがはな',
        ekimeiRoma: 'Tategahana',
        sttnAddr: '長野県長野市豊野町蟹沢',
        ...JreIiyamaCommon
    },
    {
        ekimeiKanj: '上今井',
        ekimeiKana: 'かみいまい',
        ekimeiRoma: 'Kami-Imai',
        sttnAddr: '長野県中野市大字上今井',
        ...JreIiyamaCommon
    },
    {
        ekimeiKanj: '替佐',
        ekimeiKana: 'かえさ',
        ekimeiRoma: 'Kaesa',
        sttnAddr: '長野県中野市大字豊津',
        ...JreIiyamaCommon
    },
    {
        ekimeiKanj: '蓮',
        ekimeiKana: 'はちす',
        ekimeiRoma: 'Hachisu',
        sttnAddr: '長野県飯山市大字蓮',
        ...JreIiyamaCommon
    },
    {
        ekimeiKanj: '飯山',
        ekimeiKana: 'いいやま',
        ekimeiRoma: 'Iiyama',
        sttnAddr: '長野県飯山市大字飯山字舛ノ浦770-3',
        ...JreIiyamaCommon
    },
    {
        ekimeiKanj: '北飯山',
        ekimeiKana: 'きたいいやま',
        ekimeiRoma: 'Kita-Iiyama',
        sttnAddr: '長野県飯山市大字飯山',
        ...JreIiyamaCommon
    },
    {
        ekimeiKanj: '信濃平',
        ekimeiKana: 'しなのたいら',
        ekimeiRoma: 'Shinano-Taira',
        sttnAddr: '長野県飯山市大字常盤',
        ...JreIiyamaCommon
    },
    {
        ekimeiKanj: '戸狩野沢温泉',
        ekimeiKana: 'とがりのざわおんせん',
        ekimeiRoma: 'Togarinozawa-Onsen',
        sttnAddr: '長野県飯山市大字照里',
        ...JreIiyamaCommon
    },
    {
        ekimeiKanj: '上境',
        ekimeiKana: 'かみさかい',
        ekimeiRoma: 'Kami-Sakai',
        sttnAddr: '長野県飯山市大字一山',
        ...JreIiyamaCommon
    },
    {
        ekimeiKanj: '上桑名川',
        ekimeiKana: 'かみくわながわ',
        ekimeiRoma: 'Kami-Kuwanagawa',
        sttnAddr: '長野県飯山市大字照岡',
        ...JreIiyamaCommon
    },
    {
        ekimeiKanj: '桑名川',
        ekimeiKana: 'くわながわ',
        ekimeiRoma: 'Kuwanagawa',
        sttnAddr: '長野県飯山市大字照岡',
        ...JreIiyamaCommon
    },
    {
        ekimeiKanj: '西大滝',
        ekimeiKana: 'にしおおたき',
        ekimeiRoma: 'Nishi-Ōtaki',
        sttnAddr: '長野県飯山市大字照岡',
        ...JreIiyamaCommon
    },
    {
        ekimeiKanj: '信濃白鳥',
        ekimeiKana: 'しなのしらとり',
        ekimeiRoma: 'Shinano-Shiratori',
        sttnAddr: '長野県下水内郡栄村大字豊栄',
        ...JreIiyamaCommon
    },
    {
        ekimeiKanj: '平滝',
        ekimeiKana: 'ひらたき',
        ekimeiRoma: 'Hirataki',
        sttnAddr: '長野県下水内郡栄村大字豊栄',
        ...JreIiyamaCommon
    },
    {
        ekimeiKanj: '横倉',
        ekimeiKana: 'よこくら',
        ekimeiRoma: 'Yokokura',
        sttnAddr: '長野県下水内郡栄村大字北信',
        ...JreIiyamaCommon
    },
    {
        ekimeiKanj: '森宮野原',
        ekimeiKana: 'もりみやのはら',
        ekimeiRoma: 'Morimiyanohara',
        sttnAddr: '長野県下水内郡栄村大字北信',
        ...JreIiyamaCommon
    },
    {
        ekimeiKanj: '足滝',
        ekimeiKana: 'あしだき',
        ekimeiRoma: 'Ashidaki',
        sttnAddr: '新潟県中魚沼郡津南町大字上郷寺石',
        ...JreIiyamaCommon
    },
    {
        ekimeiKanj: '越後田中',
        ekimeiKana: 'えちごたなか',
        ekimeiRoma: 'Echigo-Tanaka',
        sttnAddr: '新潟県中魚沼郡津南町大字上郷上田',
        ...JreIiyamaCommon
    },
    {
        ekimeiKanj: '津南',
        ekimeiKana: 'つなん',
        ekimeiRoma: 'Tsunan',
        sttnAddr: '新潟県中魚沼郡津南町大字外丸丁',
        ...JreIiyamaCommon
    },
    {
        ekimeiKanj: '越後鹿渡',
        ekimeiKana: 'えちごしかわたり',
        ekimeiRoma: 'Echigo-Shikawatari',
        sttnAddr: '新潟県中魚沼郡津南町大字三箇',
        ...JreIiyamaCommon
    },
    {
        ekimeiKanj: '越後田沢',
        ekimeiKana: 'えちごたざわ',
        ekimeiRoma: 'Echigo-Tazawa',
        sttnAddr: '新潟県十日町市田中',
        ...JreIiyamaCommon
    },
    {
        ekimeiKanj: '越後水沢',
        ekimeiKana: 'えちごみずさわ',
        ekimeiRoma: 'Echigo-Mizusawa',
        sttnAddr: '	新潟県十日町市馬場',
        ...JreIiyamaCommon
    },
    {
        ekimeiKanj: '土市',
        ekimeiKana: 'どいち',
        ekimeiRoma: 'Doichi',
        sttnAddr: '新潟県十日町市新宮',
        ...JreIiyamaCommon
    },
    {
        ekimeiKanj: '十日町',
        ekimeiKana: 'とおかまち',
        ekimeiRoma: 'Tōkamachi',
        sttnAddr: '新潟県十日町市丑256-2',
        ...JreIiyamaCommon
    },
    {
        ekimeiKanj: '魚沼中条',
        ekimeiKana: 'うおぬまなかじょう',
        ekimeiRoma: 'Uonuma-Nakajō',
        sttnAddr: '新潟県十日町市中条',
        ...JreIiyamaCommon
    },
    {
        ekimeiKanj: '下条',
        ekimeiKana: 'げじょう',
        ekimeiRoma: 'Gejō',
        sttnAddr: '新潟県十日町市下条',
        ...JreIiyamaCommon
    },
    {
        ekimeiKanj: '越後岩沢',
        ekimeiKana: 'えちごいわさわ',
        ekimeiRoma: 'Echigo-Iwasawa',
        sttnAddr: '新潟県小千谷市大字岩沢',
        ...JreIiyamaCommon
    },
    {
        ekimeiKanj: '内ケ巻',
        ekimeiKana: 'うちがまき',
        ekimeiRoma: 'Uchigamaki',
        sttnAddr: '新潟県小千谷市大字川井',
        ...JreIiyamaCommon
    },
    {
        ekimeiKanj: '越後川口',
        ekimeiKana: 'えちごかわぐち',
        ekimeiRoma: 'Echigo-Kawaguchi',
        sttnAddr: '新潟県長岡市東川口693-1',
        ...JreIiyamaCommon
    },
];
