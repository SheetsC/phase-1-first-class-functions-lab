// Code your solution in this file!
const drivers = ['Antonia', 'Nuru','Amari', 'Mo']
const returnFirstTwoDrivers = function (drivers) {
    let copyOfDrivers = [...drivers] 
    return copyOfDrivers.splice(0, drivers.length-2)
}
const returnLastTwoDrivers = function (drivers) {
    let copyOfDrivers = [...drivers] 
    return copyOfDrivers.splice(2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
const createFareMultiplier = function(multiplier){
    return function (number){
        return number * multiplier
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers)
}
