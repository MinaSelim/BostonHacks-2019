const regr = require('regression');

module.exports.ptCO2 = (distance) =>{
    return distance*0.023;
}

module.exports.carCO2 = (distance) => {
    return distance*0.051;
}

module.exports.walkCO2 = (distance) => {
    return 0;
}

module.exports.getRegression = (arr) => {
    const result = regr.linear(arr);
    return result;
}
//[timestamp, carCO2(distance)]