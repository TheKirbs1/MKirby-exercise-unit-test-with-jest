 const oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.USD
}

const fromDollarToYen = (Dollar) => {
    return (Dollar * oneEuroIs.JPY) / oneEuroIs.USD
}

const fromYenToPound = (Yen) => {
    return (Yen * oneEuroIs.GBP) / oneEuroIs.JPY
}

module.exports = {
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound
 }