const JreJoubanCommon = {
    ...compNameJre,
    lineName: '常磐線',
    lineName1: { lineName: '常磐線（快速）'                 },
    lineName2: { lineName: '常磐線（快速）／常磐線（特急）' },
    lineName3: { lineName: '常磐線（特急・快速）'           },
    lineName4: { lineName: '常磐線（快速）／常磐線'         },
}

const JreJouban = [
    {
        ekimeiKanj: '品川',
        ekimeiKana: 'しながわ',
        ekimeiRoma: 'Shinagawa',
        sttnAddr: '東京都港区高輪三丁目26-27',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '新橋',
        ekimeiKana: 'しんばし',
        ekimeiRoma: 'Shimbashi',
        sttnAddr: '東京都港区新橋二丁目17',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '東京',
        ekimeiKana: 'とうきょう',
        ekimeiRoma: 'Tōkyō',
        sttnAddr: '東京都千代田区丸の内一丁目9-1',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '上野',
        ekimeiKana: 'うえの',
        ekimeiRoma: 'Ueno',
        sttnAddr: '東京都台東区上野七丁目1-1',
        ...compNameJre,
        ...JreJoubanCommon.lineName2,
    },
    {
        ekimeiKanj: '日暮里',
        ekimeiKana: 'にっぽり',
        ekimeiRoma: 'Nippori',
        sttnAddr: '東京都荒川区西日暮里二丁目19-1',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '三河島',
        ekimeiKana: 'みかわしま',
        ekimeiRoma: 'Mikawashima',
        sttnAddr: '東京都荒川区西日暮里一丁目6-10',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '南千住',
        ekimeiKana: 'みなみせんじゅ',
        ekimeiRoma: 'Minami-Senju',
        sttnAddr: '東京都荒川区南千住四丁目5-1',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '北千住',
        ekimeiKana: 'きたせんじゅ',
        ekimeiRoma: 'Kita-Senju',
        sttnAddr: '東京都足立区千住旭町42-2',
        ...JreJoubanCommon
    },
    /*
    {
        ekimeiKanj: '綾瀬',
        ekimeiKana: 'あやせ',
        ekimeiRoma: 'Ayase',
        sttnAddr: '東京都足立区綾瀬三丁目1-1',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '亀有',
        ekimeiKana: 'かめあり',
        ekimeiRoma: 'Kameari',
        sttnAddr: '東京都葛飾区亀有三丁目25-1',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '金町',
        ekimeiKana: 'かなまち',
        ekimeiRoma: 'Kanamachi',
        sttnAddr: '東京都葛飾区金町六丁目4-1',
        ...JreJoubanCommon
    },
    */
    {
        ekimeiKanj: '松戸',
        ekimeiKana: 'まつど',
        ekimeiRoma: 'Matsudo',
        sttnAddr: '千葉県松戸市松戸1181',
        ...JreJoubanCommon
    },
    /*
    {
        ekimeiKanj: '北松戸',
        ekimeiKana: 'きたまつど',
        ekimeiRoma: 'Kita-Matsudo',
        sttnAddr: '千葉県松戸市上本郷905',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '馬橋',
        ekimeiKana: 'まばし',
        ekimeiRoma: 'Mabashi',
        sttnAddr: '千葉県松戸市馬橋121',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '新松戸',
        ekimeiKana: 'しんまつど',
        ekimeiRoma: 'Shim-Matsudo',
        sttnAddr: '千葉県松戸市幸谷571-3',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '北小金',
        ekimeiKana: 'きたこがね',
        ekimeiRoma: 'Kita-Kogane',
        sttnAddr: '千葉県松戸市小金8-3',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '南柏',
        ekimeiKana: 'みなみかしわ',
        ekimeiRoma: 'Minami-Kashiwa',
        sttnAddr: '千葉県柏市南柏一丁目1-1',
        ...JreJoubanCommon
    },
    */
    {
        ekimeiKanj: '柏',
        ekimeiKana: 'かしわ',
        ekimeiRoma: 'Kashiwa',
        sttnAddr: '千葉県柏市柏一丁目1-1',
        ...compNameJre,
        ...JreJoubanCommon.lineName3,
    },
    /*
    {
        ekimeiKanj: '北柏',
        ekimeiKana: 'きたかしわ',
        ekimeiRoma: 'Kita-Kashiwa',
        sttnAddr: '千葉県柏市根戸字中馬場1901',
        ...JreJoubanCommon
    },
    */
    {
        ekimeiKanj: '我孫子',
        ekimeiKana: 'あびこ',
        ekimeiRoma: 'Abiko',
        sttnAddr: '千葉県我孫子市本町二丁目1-1',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '天王台',
        ekimeiKana: 'てんのうだい',
        ekimeiRoma: 'Tennōdai',
        sttnAddr: '千葉県我孫子市柴崎台一丁目19-1',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '取手',
        ekimeiKana: 'とりで',
        ekimeiRoma: 'Toride',
        sttnAddr: '茨城県取手市中央町1-1',
        ...compNameJre,
        ...JreJoubanCommon.lineName4,
    },
    {
        ekimeiKanj: '藤代',
        ekimeiKana: 'ふじしろ',
        ekimeiRoma: 'Fujishiro',
        sttnAddr: '茨城県取手市宮和田1131',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '龍ケ崎市',
        ekimeiKana: 'りゅうがさきし',
        ekimeiRoma: 'Ryūgasakishi',
        sttnAddr: '茨城県龍ケ崎市佐貫町647',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '牛久',
        ekimeiKana: 'うしく',
        ekimeiRoma: 'Ushiku',
        sttnAddr: '茨城県牛久市牛久町282',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: 'ひたち野うしく',
        ekimeiKana: 'ひたちのうしく',
        ekimeiRoma: 'Hitachinoushiku',
        sttnAddr: '茨城県牛久市ひたち野西三丁目41-16',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '荒川沖',
        ekimeiKana: 'あらかわおき',
        ekimeiRoma: 'Arakawaoki',
        sttnAddr: '茨城県土浦市荒川沖東二丁目1-6',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '土浦',
        ekimeiKana: 'つちうら',
        ekimeiRoma: 'Tsuchiura',
        sttnAddr: '茨城県土浦市有明町1-30',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '神立',
        ekimeiKana: 'かんだつ',
        ekimeiRoma: 'Kandatsu',
        sttnAddr: '茨城県土浦市神立中央一丁目1-25',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '高浜',
        ekimeiKana: 'たかはま',
        ekimeiRoma: 'Takahama',
        sttnAddr: '茨城県石岡市北根本245',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '石岡',
        ekimeiKana: 'いしおか',
        ekimeiRoma: 'Ishioka',
        sttnAddr: '茨城県石岡市国府一丁目1-17',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '羽鳥',
        ekimeiKana: 'はとり',
        ekimeiRoma: 'Hatori',
        sttnAddr: '茨城県小美玉市羽鳥2665番地',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '岩間',
        ekimeiKana: 'いわま',
        ekimeiRoma: 'Iwama',
        sttnAddr: '茨城県笠間市下郷4439',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '友部',
        ekimeiKana: 'ともべ',
        ekimeiRoma: 'Tomobe',
        sttnAddr: '茨城県笠間市友部駅前1-24',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '内原',
        ekimeiKana: 'うちはら',
        ekimeiRoma: 'Uchihara',
        sttnAddr: '茨城県水戸市内原町69',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '赤塚',
        ekimeiKana: 'あかつか',
        ekimeiRoma: 'Akatsuka',
        sttnAddr: '茨城県水戸市赤塚一丁目1866',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '偕楽園',
        ekimeiKana: 'かいらくえん',
        ekimeiRoma: 'Kairakuen',
        sttnAddr: '茨城県水戸市常磐町一丁目6090',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '水戸',
        ekimeiKana: 'みと',
        ekimeiRoma: 'Mito',
        sttnAddr: '茨城県水戸市宮町一丁目1-1',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '勝田',
        ekimeiKana: 'かつた',
        ekimeiRoma: 'Katsuta',
        sttnAddr: '茨城県ひたちなか市勝田中央1-1',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '佐和',
        ekimeiKana: 'さわ',
        ekimeiRoma: 'Sawa',
        sttnAddr: '茨城県ひたちなか市大字高場574',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '東海',
        ekimeiKana: 'とうかい',
        ekimeiRoma: 'Tōkai',
        sttnAddr: '茨城県那珂郡東海村舟石川駅西一丁目1-1',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '大甕',
        ekimeiKana: 'おおみか',
        ekimeiRoma: 'Ōmika',
        sttnAddr: '茨城県日立市大みか町二丁目23-10',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '常陸多賀',
        ekimeiKana: 'ひたちたが',
        ekimeiRoma: 'Hitachi-Taga',
        sttnAddr: '茨城県日立市多賀町一丁目1-1',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '日立',
        ekimeiKana: 'ひたち',
        ekimeiRoma: 'Hitachi',
        sttnAddr: '茨城県日立市幸町一丁目1-1',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '小木津',
        ekimeiKana: 'おぎつ',
        ekimeiRoma: 'Ogitsu',
        sttnAddr: '茨城県日立市日高町一丁目2',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '十王',
        ekimeiKana: 'じゅうおう',
        ekimeiRoma: 'Jūō',
        sttnAddr: '茨城県日立市十王町友部177',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '高萩',
        ekimeiKana: 'たかはぎ',
        ekimeiRoma: 'Takahagi',
        sttnAddr: '茨城県高萩市大字高萩1928',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '南中郷',
        ekimeiKana: 'みなみなかごう',
        ekimeiRoma: 'Minami-Nakagō',
        sttnAddr: '茨城県北茨城市中郷町小野矢指238',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '磯原',
        ekimeiKana: 'いそはら',
        ekimeiRoma: 'Isohara',
        sttnAddr: '茨城県北茨城市磯原町磯原759',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '大津港',
        ekimeiKana: 'おおつこう',
        ekimeiRoma: 'Ōtsukō',
        sttnAddr: '茨城県北茨城市大津町北町250',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '勿来',
        ekimeiKana: 'なこそ',
        ekimeiRoma: 'Nakoso',
        sttnAddr: '福島県いわき市勿来町関田寺下49-2',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '植田',
        ekimeiKana: 'うえだ',
        ekimeiRoma: 'Ueda',
        sttnAddr: '福島県いわき市植田町金畑15',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '泉',
        ekimeiKana: 'いずみ',
        ekimeiRoma: 'Izumi',
        sttnAddr: '福島県いわき市泉町滝尻上谷地30',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '湯本',
        ekimeiKana: 'ゆもと',
        ekimeiRoma: 'Yumoto',
        sttnAddr: '福島県いわき市常磐湯本町天王崎92',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '内郷',
        ekimeiKana: 'うちごう',
        ekimeiRoma: 'Uchigō',
        sttnAddr: '福島県いわき市内郷綴町榎下12',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: 'いわき',
        ekimeiKana: 'いわき',
        ekimeiRoma: 'Iwaki',
        sttnAddr: '福島県いわき市平字田町',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '草野',
        ekimeiKana: 'くさの',
        ekimeiRoma: 'Kusano',
        sttnAddr: '福島県いわき市平泉崎字向原',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '四ツ倉',
        ekimeiKana: 'よつくら',
        ekimeiRoma: 'Yotsukura',
        sttnAddr: '福島県いわき市四倉町字鬼越',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '久ノ浜',
        ekimeiKana: 'ひさのはま',
        ekimeiRoma: 'Hisanohama',
        sttnAddr: '福島県いわき市久之浜町久之浜字北荒蒔12',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '末続',
        ekimeiKana: 'すえつぎ',
        ekimeiRoma: 'Suetsugi',
        sttnAddr: '福島県いわき市久之浜町末続字代',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '広野',
        ekimeiKana: 'ひろの',
        ekimeiRoma: 'Hirono',
        sttnAddr: '福島県双葉郡広野町大字下浅見川字築地',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: 'Jヴィレッジ',
        ekimeiKana: 'じぇいびれっじ',
        ekimeiRoma: 'J-Village',
        sttnAddr: '福島県双葉郡楢葉町大字山田岡字下岩沢1番地2',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '木戸',
        ekimeiKana: 'きど',
        ekimeiRoma: 'Kido',
        sttnAddr: '福島県双葉郡楢葉町大字山田岡字一升平',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '竜田',
        ekimeiKana: 'たつた',
        ekimeiRoma: 'Tatsuta',
        sttnAddr: '福島県双葉郡楢葉町大字井出字木屋',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '富岡',
        ekimeiKana: 'とみおか',
        ekimeiRoma: 'Tomioka',
        sttnAddr: '福島県双葉郡富岡町大字仏浜字釜田',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '夜ノ森',
        ekimeiKana: 'よのもり',
        ekimeiRoma: 'Yonomori',
        sttnAddr: '福島県双葉郡富岡町夜の森北1丁目',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '大野',
        ekimeiKana: 'おおの',
        ekimeiRoma: 'Ōno',
        sttnAddr: '福島県双葉郡大熊町大字下野上字大野248',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '双葉',
        ekimeiKana: 'ふたば',
        ekimeiRoma: 'Futaba',
        sttnAddr: '福島県双葉郡双葉町大字長塚字町西39番地2',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '浪江',
        ekimeiKana: 'なみえ',
        ekimeiRoma: 'Namie',
        sttnAddr: '福島県双葉郡浪江町大字権現堂字塚越8',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '桃内',
        ekimeiKana: 'ももうち',
        ekimeiRoma: 'Momouchi',
        sttnAddr: '福島県南相馬市小高区耳谷字桃内2',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '小高',
        ekimeiKana: 'おだか',
        ekimeiRoma: 'Odaka',
        sttnAddr: '福島県南相馬市小高区東町一丁目140',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '磐城太田',
        ekimeiKana: 'いわきおおた',
        ekimeiRoma: 'Iwaki-Ōta',
        sttnAddr: '福島県南相馬市原町区高字金井神1145',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '原ノ町',
        ekimeiKana: 'はらのまち',
        ekimeiRoma: 'Haranomachi',
        sttnAddr: '福島県南相馬市原町区旭町二丁目27-2',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '鹿島',
        ekimeiKana: 'かしま',
        ekimeiRoma: 'Kashima',
        sttnAddr: '福島県南相馬市鹿島区鹿島字御前ノ内13-7',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '日立木',
        ekimeiKana: 'にったき',
        ekimeiRoma: 'Nittaki',
        sttnAddr: '	福島県相馬市赤木字上原田25',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '相馬',
        ekimeiKana: 'そうま',
        ekimeiRoma: 'Sōma',
        sttnAddr: '福島県相馬市中村字曲田1',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '駒ケ嶺',
        ekimeiKana: 'こまがみね',
        ekimeiRoma: 'Komagamine',
        sttnAddr: '福島県相馬郡新地町駒ケ嶺字深町21',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '新地',
        ekimeiKana: 'しんち',
        ekimeiRoma: 'Shinchi',
        sttnAddr: '福島県相馬郡新地町谷地小屋字舛形',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '坂元',
        ekimeiKana: 'さかもと',
        ekimeiRoma: 'Sakamoto',
        sttnAddr: '宮城県亘理郡山元町坂元字町東',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '山下',
        ekimeiKana: 'やました',
        ekimeiRoma: 'Yamashita',
        sttnAddr: '宮城県亘理郡山元町つばめの杜1丁目',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '浜吉田',
        ekimeiKana: 'はまよしだ',
        ekimeiRoma: 'Hamayoshida',
        sttnAddr: '宮城県亘理郡亘理町吉田字流146',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '亘理',
        ekimeiKana: 'わたり',
        ekimeiRoma: 'Watari',
        sttnAddr: '宮城県亘理郡亘理町字道田西無番地',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '逢隈',
        ekimeiKana: 'おおくま',
        ekimeiRoma: 'Ōkuma',
        sttnAddr: '宮城県亘理郡亘理町逢隈下郡字椿山',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '岩沼',
        ekimeiKana: 'いわぬま',
        ekimeiRoma: 'Iwanuma',
        sttnAddr: '宮城県岩沼市館下一丁目',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '館腰',
        ekimeiKana: 'たてこし',
        ekimeiRoma: 'Tatekoshi',
        sttnAddr: '宮城県名取市植松四丁目18-11',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '名取',
        ekimeiKana: 'なとり',
        ekimeiRoma: 'Natori',
        sttnAddr: '宮城県名取市増田二丁目5-1',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '南仙台',
        ekimeiKana: 'みなみせんだい',
        ekimeiRoma: 'Minami-Sendai',
        sttnAddr: '仙台市太白区中田五丁目2-1',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '太子堂',
        ekimeiKana: 'たいしどう',
        ekimeiRoma: 'Taishidō',
        sttnAddr: '仙台市太白区太子堂1-1',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '長町',
        ekimeiKana: 'ながまち',
        ekimeiRoma: 'Nagamachi',
        sttnAddr: '仙台市太白区長町五丁目1-1',
        ...JreJoubanCommon
    },
    {
        ekimeiKanj: '仙台',
        ekimeiKana: 'せんだい',
        ekimeiRoma: 'Sendai',
        sttnAddr: '仙台市青葉区中央一丁目1-1',
        ...JreJoubanCommon
    },
];
