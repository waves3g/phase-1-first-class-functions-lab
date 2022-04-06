const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(driversArray){
    return driversArray.slice(0,2);

}

function returnLastTwoDrivers(driversArray){
    return driversArray.slice(2,4);
}

const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers];

const fareMultiplier = createFareMultiplier(2)

function createFareMultiplier(multiplier){
    return function(fare){
        return fare * multiplier;
    }
        
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(arrayOfDrivers);
};