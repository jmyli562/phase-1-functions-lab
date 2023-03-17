// Code your solution in this file!

// function will calculate the distance from the customer's pickup location to Scuber's HQ
function distanceFromHqInBlocks(pickUpLocation){ //the parameter passed into the function will be the pickup location i.e 50 = 50th street
    let distanceInBlocks;

    if(pickUpLocation < 42){
        distanceInBlocks = 42 - pickUpLocation;
    }else{
        distanceInBlocks = pickUpLocation - 42;
    }

    return distanceInBlocks;
}

function distanceFromHqInFeet(distance){
    let numBlocks = distanceFromHqInBlocks(distance);

    return numBlocks * 264;

}

function distanceTravelledInFeet(startBlock, endBlock){

    let feetTravelled
    if(startBlock > endBlock){

        feetTravelled = (startBlock - endBlock) * 264;

    }else{

        feetTravelled = (endBlock - startBlock) * 264;
    }

    return feetTravelled;
}

function calculatesFarePrice(start, distination){

    let distanceTravelled = distanceTravelledInFeet(start,distination);
    let farePrice;
    
    if(distanceTravelled <= 400){
        farePrice = 0;
    }
    else if(distanceTravelled <= 2000){
        farePrice = (distanceTravelled - 400) * 0.02;
    }else if(distanceTravelled <= 2500){
        farePrice = 25;
    }else{
        return "cannot travel that far";
    }

    return farePrice
}
