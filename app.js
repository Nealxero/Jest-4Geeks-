// we declare the function with the exact name "fromEuroToDollar"

let oneEuroIs = {
    "JPY": 127.9, // japanese yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const eurToYen = (num) => {
    let result = num * oneEuroIs["JPY"]
    return result
}

const fromEuroToDollar = (num) => {
    let result = num * oneEuroIs["USD"]
    return result
}

const eurToGbp = (num) => {
    let result = num * oneEuroIs["GBP"]
    return result
}
const yenToEur = (num) => {
    let result = num / oneEuroIs["JPY"]
    return result
}

const usdToEur = (num) => {
    let result = num / oneEuroIs["USD"]
    return result
}

const gbpToEur = (num) => {
    let result = num / oneEuroIs["GBP"]
    return result
}

const fromDollarToYen = (num) => {
    let result = eurToYen(usdToEur(num)) 
    return result
}

const fromYenToPound = (num) => {
    let result = eurToGbp(yenToEur(num)) 
    return result
}


console.log(fromYenToPound(1))

module.exports= {
    eurToGbp,
    eurToYen,
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound,
    yenToEur,
    gbpToEur,
    usdToEur
}
/*
const sum = (a,b) => {
    return a + b
}
*/

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)


