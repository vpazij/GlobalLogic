class Data {

    constructor () {
        this.temperatureArray1 = [ 17, 17, 24, 24, 20, 18, 14 ], 
        this.temperatureArray2 = [ 11, 20, 14, 13, 22, 12, 19 ], 
        this.temperatureArray3 = [ 15, 12, 21, 20, 14, 11, 12 ],
        
        this.expAverageResult1 = 19,
        this.expAverageResult2 = 16,
        this.expAverageResult3 = 15
    }
};

module.exports = new Data();


//generate daily temperature like a random number into diapason 10-20C°   
/*randomInt =  (min, max) => {
 	return min + Math.floor((max - min) * Math.random());
}*/