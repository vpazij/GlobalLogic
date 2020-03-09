const utils = require('./utils');
const data = require('./data'); 

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let currentArray, result;
    
readline.question(`Enter number of array you want to test? 1, 2 or 3 :`, (number) => {
    if(number == 1) {
        currentArray = data.temperatureArray1
        result = data.expAverageResult1
       }
    else if (number == 2) {
        currentArray = data.temperatureArray2
        result = data.expAverageResult2
    }
    else if (number == 3) {
        currentArray = data.temperatureArray3
        result = data.expAverageResult3
    }
    else {
        console.log(`You entered a wrong number, try again`)
        process.exit(-1)
    };

    //Calculate avarage value
    utils.getAverage(currentArray);
    console.log(`Expected average week temperature is ${result} C°`);
    console.log('-----------------------------');

    //Calculate nearest day
    utils.nearestFoundDay(currentArray);

    readline.close();
});








    

