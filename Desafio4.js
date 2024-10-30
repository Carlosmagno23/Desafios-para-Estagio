cidades = 
        {'SP':67836.43,
        'RJ':36678.66,
        'MG':29229.88,
        'ES':27165.48,
        'OTH':19849.53
        }

let somaTotal = cidades.SP + cidades.ES + cidades.RJ + cidades.MG + cidades.OTH;


function calcPorc(num1,num2){
    let porc = num1 / num2 * 100;
    return porc.toFixed(2);
}

let sp = calcPorc(cidades.SP, somaTotal)
let rj = calcPorc(cidades.RJ, somaTotal)
let mg = calcPorc(cidades.MG, somaTotal)
let es = calcPorc(cidades.ES, somaTotal)
let oth = calcPorc(cidades.OTH, somaTotal)


console.log(`Percentual de representação que cada estado teve dentro do valor total mensal da distribuidora
                SP:${sp}%        
                RJ:${rj}%
                MG:${mg}%
                ES:${es}%
                Outros:${oth}%
    `)