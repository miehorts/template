const KeiseiHigashinaritaCommon = {
    ...compNameKeisei,
    lineName: '東成田線',
    lineBack1: '#005aaa',
}

const KeiseiHigashinarita = [
    {
        ekimeiKanj: '京成成田',
        ekimeiKana: 'けいせいなりた',
        ekimeiRoma: 'Keisei-Narita',
        sttnAddr: '千葉県成田市花崎町814',
        ...KeiseiHigashinaritaCommon
    },
    {
        ekimeiKanj: '東成田',
        ekimeiKana: 'ひがしなりた',
        ekimeiRoma: 'Higashi-Narita',
        sttnAddr: '千葉県成田市古込字込前124',
        ...KeiseiHigashinaritaCommon
    },
];
