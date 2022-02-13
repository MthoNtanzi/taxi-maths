
//Calculates the money you are given then gives you a result
function totalChange(){
    var taxi_price = document.getElementById("taxiPriceBox").value;
    var moneyRecieved = document.getElementById("moneyBox").value;
    var numOfPeople = document.getElementById("peopleCounter").value;

    var money = taxi_price * numOfPeople;
    var change = moneyRecieved - money;

    if((taxi_price  == ""|| moneyRecieved == ""|| numOfPeople == "") ){
        window.alert("Please ensure that all you fill in all the boxes");
    } else{
        if(change != 0){
            window.alert("The change is: R " + change);
        }
        if(change < 0){
            window.alert("You are owed: R " + (-change));
        }
        if(change == 0){
            window.alert("There is no change")
        }
    }

    //Resets the app after calculating
    document.getElementById("peopleInMoney").innerHTML= "How many people in that:";

}

//Prints the money value you were given
function numOfPeople(){
    var moneyRecieved = document.getElementById("moneyBox").value;
    document.getElementById("peopleInMoney").innerHTML= "How many people in that: R " + moneyRecieved;
}

/**************************
 *      Drivers Money     *
 *************************/
function driverCash(){
    var taxiSeats = document.getElementById("seatsBox").value;
    var taxiPrice = document.getElementById("moneyPerSeatBox").value;
    var driverMoney = taxiSeats * taxiPrice;

    window.alert("Driver's Money: R" + driverMoney);

}