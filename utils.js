const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; 
let average = 0;

class Utils {

    getWeekDayName (number) {
        return weekDays[number]
    };

    getAverage (array) {
        let sum = 0;
        array.forEach((value) => sum = sum + value)
        average = Math.round(sum/array.length)
        console.log('-----------------------------')
        console.log(`Calculated average week temperature is ${average} C°`)
    }; 

    nearestFoundDay (array) {
        const delta = [];
        array.forEach((value, i) => delta[i] = Math.abs(value - average));
        let nearestFirstFoundDay;
        let dif = 10;
        delta.forEach((value, i) => {
            if(value < dif) {
                dif = value;
                nearestFirstFoundDay = this.getWeekDayName(i);
            }   
        });
        console.log(`Target day: ${nearestFirstFoundDay}`) ;
    };







}

module.exports = new Utils()