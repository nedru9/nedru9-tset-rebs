import {encoded, translations} from './data.js'

console.log("Let's rock")
console.log(encoded, translations)

function decoded(encoded, translations) {
    let uniqueIds = [];
    let decoded = encoded.map(obj => {
        let decodedObj = {};
        for (let key in obj) {
            if (key.endsWith('Id') && key !== 'groupId' && key !== 'service' && key !== 'formatSize' && key !== 'ca') {
                if (translations[obj[key]] == undefined) {
                    if (!uniqueIds.includes(obj[key])) {
                        uniqueIds.push(obj[key]);
                    }  
                } else {
                    decodedObj[key] = translations[obj[key]];     
                }
            } else {
                decodedObj[key] = obj[key];
            }
        }
        return decodedObj;
    });
    console.log("После расшифровки: ");
    console.log(decoded);
    console.log("Уникальные ID'шники, которых нет в translations:", uniqueIds);
}

decoded(encoded, translations);