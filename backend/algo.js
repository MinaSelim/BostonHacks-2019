const regr = require('regression');

function ptCO2(distance){
    return distance*0.00023;
}

function carCO2(distance){
    return distance*0.00051;
}

function walkCO2(distance){
    return 0;
}

function getRegression(arr){
    const result = regression.linear(arr);
    return result;
}
//[timestamp, carCO2(distance)]