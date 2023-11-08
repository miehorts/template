const JrcToukaidouCommon = {
    ...compNameJrc,
    lineName: '東海道線',
    lineBack1: '#f57615',
};

const JrcToukaidouCommon1 = {
    ...JrcToukaidouCommon,
    lineName: '東海道本線',
};

const JrcToukaidou = [
    {
        ekimeiKanj: '熱海',
        ekimeiKana: 'あたみ',
        ekimeiRoma: 'Atami',
        sttnAddr: '静岡県熱海市田原本町11-1',
        ...JrcToukaidouCommon
    },
    {
        ekimeiKanj: '函南',
        ekimeiKana: 'かんなみ',
        ekimeiRoma: 'Kannami',
        sttnAddr: '静岡県田方郡函南町大竹190-6',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '三島',
        ekimeiKana: 'みしま',
        ekimeiRoma: 'Mishima',
        sttnAddr: '静岡県三島市一番町16-1',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '沼津',
        ekimeiKana: 'ぬまづ',
        ekimeiRoma: 'Numazu',
        sttnAddr: '静岡県沼津市大手町一丁目1-1',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '片浜',
        ekimeiKana: 'かたはま',
        ekimeiRoma: 'Katahama',
        sttnAddr: '静岡県沼津市今沢254-1',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '原',
        ekimeiKana: 'はら',
        ekimeiRoma: 'Hara',
        sttnAddr: '静岡県沼津市原383-2',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '東田子の浦',
        ekimeiKana: 'ひがしたごのうら',
        ekimeiRoma: 'Higashi-Tagonoura',
        sttnAddr: '静岡県富士市中柏原新田171',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '吉原',
        ekimeiKana: 'よしわら',
        ekimeiRoma: 'Yoshiwara',
        sttnAddr: '静岡県富士市鈴川本町14-1',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '富士',
        ekimeiKana: 'ふじ',
        ekimeiRoma: 'Fuji',
        sttnAddr: '静岡県富士市本町1-1',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '富士川',
        ekimeiKana: 'ふじかわ',
        ekimeiRoma: 'Fujikawa',
        sttnAddr: '静岡県富士市中之郷1228-4',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '新蒲原',
        ekimeiKana: 'しんかんばら',
        ekimeiRoma: 'Shin-Kambara',
        sttnAddr: '静岡市清水区蒲原942',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '蒲原',
        ekimeiKana: 'かんばら',
        ekimeiRoma: 'Kambara',
        sttnAddr: '静岡市清水区蒲原堰沢',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '由比',
        ekimeiKana: 'ゆい',
        ekimeiRoma: 'Yui',
        sttnAddr: '静岡市清水区由比今宿',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '興津',
        ekimeiKana: 'おきつ',
        ekimeiRoma: 'Okitsu',
        sttnAddr: '静岡市清水区興津中町300-14',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '清水',
        ekimeiKana: 'しみず',
        ekimeiRoma: 'Shimizu',
        sttnAddr: '静岡市清水区真砂町1番1号',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '草薙',
        ekimeiKana: 'くさなぎ',
        ekimeiRoma: 'Kusanagi',
        sttnAddr: '静岡市清水区草薙一丁目3番3号',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '東静岡',
        ekimeiKana: 'ひがししずおか',
        ekimeiRoma: 'Higashi-Shizuoka',
        sttnAddr: '静岡市葵区長沼584-8',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '静岡',
        ekimeiKana: 'しずおか',
        ekimeiRoma: 'Shizuoka',
        sttnAddr: '静岡市葵区黒金町50',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '安倍川',
        ekimeiKana: 'あべかわ',
        ekimeiRoma: 'Abekawa',
        sttnAddr: '静岡市駿河区鎌田575-66',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '用宗',
        ekimeiKana: 'もちむね',
        ekimeiRoma: 'Mochimune',
        sttnAddr: '静岡市駿河区用宗城山町4番1号',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '焼津',
        ekimeiKana: 'やいづ',
        ekimeiRoma: 'Yaizu',
        sttnAddr: '静岡県焼津市栄町一丁目1-1',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '西焼津',
        ekimeiKana: 'にしやいづ',
        ekimeiRoma: 'Nishi-Yaizu',
        sttnAddr: '静岡県焼津市西焼津112-1',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '藤枝',
        ekimeiKana: 'ふじえだ',
        ekimeiRoma: 'Fujieda',
        sttnAddr: '静岡県藤枝市駅前一丁目1-1',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '六合',
        ekimeiKana: 'ろくごう',
        ekimeiRoma: 'Rokugō',
        sttnAddr: '静岡県島田市道悦一丁目10-15',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '島田',
        ekimeiKana: 'しまだ',
        ekimeiRoma: 'Shimada',
        sttnAddr: '静岡県島田市日之出町4788',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '金谷',
        ekimeiKana: 'かなや',
        ekimeiRoma: 'Kanaya',
        sttnAddr: '静岡県島田市金谷字新町2122-7',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '菊川',
        ekimeiKana: 'きくがわ',
        ekimeiRoma: 'Kikugawa',
        sttnAddr: '静岡県菊川市堀之内547-9',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '掛川',
        ekimeiKana: 'かけがわ',
        ekimeiRoma: 'Kakegawa',
        sttnAddr: '静岡県掛川市南一丁目1番1号',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '愛野',
        ekimeiKana: 'あいの',
        ekimeiRoma: 'Aino',
        sttnAddr: '静岡県袋井市愛野691-8',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '袋井',
        ekimeiKana: 'ふくろい',
        ekimeiRoma: 'Fukuroi',
        sttnAddr: '静岡県袋井市高尾字三門1211-1',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '御厨',
        ekimeiKana: 'みくりや',
        ekimeiRoma: 'Mikuriya',
        sttnAddr: '静岡県磐田市鎌田北坊中2111-4',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '磐田',
        ekimeiKana: 'いわた',
        ekimeiRoma: 'Iwata',
        sttnAddr: '静岡県磐田市中泉633-1',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '豊田町',
        ekimeiKana: 'とよだちょう',
        ekimeiRoma: 'Toyodachō',
        sttnAddr: '静岡県磐田市立野490',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '天竜川',
        ekimeiKana: 'てんりゅうがわ',
        ekimeiRoma: 'Tenryūgawa',
        sttnAddr: '浜松市東区天龍川町八畝割435-9',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '浜松',
        ekimeiKana: 'はままつ',
        ekimeiRoma: 'Hamamatsu',
        sttnAddr: '浜松市中区砂山町6-2',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '高塚',
        ekimeiKana: 'たかつか',
        ekimeiRoma: 'Takatsuka',
        sttnAddr: '浜松市南区高塚町994-1',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '舞阪',
        ekimeiKana: 'まいさか',
        ekimeiRoma: 'Maisaka',
        sttnAddr: '浜松市西区馬郡町325-9',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '弁天島',
        ekimeiKana: 'べんてんじま',
        ekimeiRoma: 'Bentenjima',
        sttnAddr: '浜松市西区舞阪町弁天島',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '新居町',
        ekimeiKana: 'あらいまち',
        ekimeiRoma: 'Araimachi',
        sttnAddr: '静岡県湖西市新居町新居',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '鷲津',
        ekimeiKana: 'わしづ',
        ekimeiRoma: 'Washizu',
        sttnAddr: '静岡県湖西市鷲津1295-14',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '新所原',
        ekimeiKana: 'しんじょはら',
        ekimeiRoma: 'Shinjohara',
        sttnAddr: '静岡県湖西市新所原三丁目4番1号',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '二川',
        ekimeiKana: 'ふたがわ',
        ekimeiRoma: 'Futagawa',
        sttnAddr: '愛知県豊橋市大岩町字南元屋敷',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '豊橋',
        ekimeiKana: 'とよはし',
        ekimeiRoma: 'Toyohashi',
        sttnAddr: '愛知県豊橋市花田町字西宿',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '西小坂井',
        ekimeiKana: 'にしこざかい',
        ekimeiRoma: 'Nishi-Kozakai',
        sttnAddr: '愛知県豊川市伊奈町前山20',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '愛知御津',
        ekimeiKana: 'あいちみと',
        ekimeiRoma: 'Aichi-Mito',
        sttnAddr: '愛知県豊川市御津町西方松本',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '三河大塚',
        ekimeiKana: 'みかわおおつか',
        ekimeiRoma: 'Mikawa-Ōtsuka',
        sttnAddr: '愛知県蒲郡市大塚町端成22-1',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '三河三谷',
        ekimeiKana: 'みかわみや',
        ekimeiRoma: 'Mikawa-Miya',
        sttnAddr: '愛知県蒲郡市三谷町上野13',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '蒲郡',
        ekimeiKana: 'がまごおり',
        ekimeiRoma: 'Gamagōri',
        sttnAddr: '愛知県蒲郡市元町1-1',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '三ケ根',
        ekimeiKana: 'さんがね',
        ekimeiRoma: 'Sangane',
        sttnAddr: '愛知県額田郡幸田町大字深溝字大池田12-1',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '幸田',
        ekimeiKana: 'こうだ',
        ekimeiRoma: 'Kōda',
        sttnAddr: '愛知県額田郡幸田町大字芦谷字幸田140-1',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '相見',
        ekimeiKana: 'あいみ',
        ekimeiRoma: 'Aimi',
        sttnAddr: '愛知県額田郡幸田町大字相見字相見1番',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '岡崎',
        ekimeiKana: 'おかざき',
        ekimeiRoma: 'Okazaki',
        sttnAddr: '愛知県岡崎市羽根町字東荒子',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '西岡崎',
        ekimeiKana: 'にしおかざき',
        ekimeiRoma: 'Nishi-Okazaki',
        sttnAddr: '愛知県岡崎市昭和町字北浦48',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '安城',
        ekimeiKana: 'あんじょう',
        ekimeiRoma: 'Anjō',
        sttnAddr: '	愛知県安城市御幸本町1-1',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '三河安城',
        ekimeiKana: 'みかわあんじょう',
        ekimeiRoma: 'Mikawa-Anjō',
        sttnAddr: '愛知県安城市三河安城町一丁目17番地1',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '東刈谷',
        ekimeiKana: 'ひがしかりや',
        ekimeiRoma: 'Higashi-Kariya',
        sttnAddr: '愛知県刈谷市東刈谷町一丁目35',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '野田新町',
        ekimeiKana: 'のだしんまち',
        ekimeiRoma: 'Noda-Shimmachi',
        sttnAddr: '愛知県刈谷市野田新町一丁目905',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '刈谷',
        ekimeiKana: 'かりや',
        ekimeiRoma: 'Kariya',
        sttnAddr: '愛知県刈谷市桜町1丁目55',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '逢妻',
        ekimeiKana: 'あいづま',
        ekimeiRoma: 'Aizuma',
        sttnAddr: '愛知県刈谷市熊野町二丁目77',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '大府',
        ekimeiKana: 'おおぶ',
        ekimeiRoma: 'Ōbu',
        sttnAddr: '愛知県大府市中央町三丁目135',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '共和',
        ekimeiKana: 'きょうわ',
        ekimeiRoma: 'Kyōwa',
        sttnAddr: '愛知県大府市共栄町9丁目2-15',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '南大高',
        ekimeiKana: 'みなみおおだか',
        ekimeiRoma: 'Minami-Ōdaka',
        sttnAddr: '名古屋市緑区大高町字池之内4-10',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '大高',
        ekimeiKana: 'おおだか',
        ekimeiRoma: 'Ōdaka',
        sttnAddr: '名古屋市緑区大高町字鶴田45-1',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '笠寺',
        ekimeiKana: 'かさでら',
        ekimeiRoma: 'Kasadera',
        sttnAddr: '名古屋市南区立脇町2丁目1',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '熱田',
        ekimeiKana: 'あつた',
        ekimeiRoma: 'Atsuta',
        sttnAddr: '名古屋市熱田区森後町二丁目502',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '金山',
        ekimeiKana: 'かなやま',
        ekimeiRoma: 'Kanayama',
        sttnAddr: '名古屋市中区金山一丁目17-18',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '尾頭橋',
        ekimeiKana: 'おとうばし',
        ekimeiRoma: 'Otōbashi',
        sttnAddr: '名古屋市中川区尾頭橋四丁目14-1',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '名古屋',
        ekimeiKana: 'なごや',
        ekimeiRoma: 'Nagoya',
        sttnAddr: '名古屋市中村区名駅一丁目1-4',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '枇杷島',
        ekimeiKana: 'びわじま',
        ekimeiRoma: 'Biwajima',
        sttnAddr: '愛知県清須市西枇杷島町七畝割108-13',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '清洲',
        ekimeiKana: 'きよす',
        ekimeiRoma: 'Kiyosu',
        sttnAddr: '愛知県稲沢市北市場町古三味390-1',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '稲沢',
        ekimeiKana: 'いなざわ',
        ekimeiRoma: 'Inazawa',
        sttnAddr: '愛知県稲沢市駅前一丁目9-1',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '尾張一宮',
        ekimeiKana: 'おわりいちのみや',
        ekimeiRoma: 'Owari-Ichinomiya',
        sttnAddr: '愛知県一宮市栄三丁目1-1',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '木曽川',
        ekimeiKana: 'きそがわ',
        ekimeiRoma: 'Kisogawa',
        sttnAddr: '愛知県一宮市木曽川町黒田字東針口12',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '岐阜',
        ekimeiKana: 'ぎふ',
        ekimeiRoma: 'Gifu',
        sttnAddr: '岐阜県岐阜市橋本町一丁目10',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '西岐阜',
        ekimeiKana: 'にしぎふ',
        ekimeiRoma: 'Nishi-Gifu',
        sttnAddr: '	岐阜県岐阜市市橋四丁目14-20',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '穂積',
        ekimeiKana: 'ほづみ',
        ekimeiRoma: 'Hozumi',
        sttnAddr: '岐阜県瑞穂市別府370',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '大垣',
        ekimeiKana: 'おおがき',
        ekimeiRoma: 'Ōgaki',
        sttnAddr: '岐阜県大垣市高屋町一丁目145',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '垂井',
        ekimeiKana: 'たるい',
        ekimeiRoma: 'Tarui',
        sttnAddr: '岐阜県不破郡垂井町1682-4',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '関ケ原',
        ekimeiKana: 'せきがはら',
        ekimeiRoma: 'Sekigahara',
        sttnAddr: '岐阜県不破郡関ケ原町大字関ケ原',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '柏原',
        ekimeiKana: 'かしわばら',
        ekimeiRoma: 'Kashiwabara',
        sttnAddr: '滋賀県米原市柏原1081',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '近江長岡',
        ekimeiKana: 'おうみながおか',
        ekimeiRoma: 'Ōmi-Nagaoka',
        sttnAddr: '滋賀県米原市長岡1700-2',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '醒ケ井',
        ekimeiKana: 'さめがい',
        ekimeiRoma: 'Samegai',
        sttnAddr: '滋賀県米原市醒井619',
        ...JrcToukaidouCommon1
    },
    {
        ekimeiKanj: '米原',
        ekimeiKana: 'まいばら',
        ekimeiRoma: 'Maibara',
        sttnAddr: '滋賀県米原市米原475',
        ...JrcToukaidouCommon1
    },
];
