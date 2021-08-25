// problem 1
// seer to mon conversion
function seerToMon(seer) {
    var mon = seer / 40;
    return mon;
}
// chacking result
var mySeer = 720;
var totalMon = seerToMon(mySeer);
console.log(totalMon);
 
 
 

// problem 2
// total sales calculation
function totalSales(shirtQuantity, pantQuantity, shoesQuantity) {
    var perShirtPrice = 100;
    var perPantPrice = 200;
    var perShoesPrice = 500;
    // price calculation
    var totalShirtPrice = shirtQuantity * perShirtPrice;
    var totalPantPrice = pantQuantity * perPantPrice;
    var totalShoesPrice = shoesQuantity * perShoesPrice;
 
    var totalPrice = totalShirtPrice + totalPantPrice + totalShoesPrice;
    return totalPrice;
}
 
// chacking result
var my1stSales = totalSales(3, 1, 2);
console.log(my1stSales);
 
var my2ndSales = totalSales(4, 2, 0);
console.log(my2ndSales);
 
 
 
 

// problem 3
// delivery cost calculation
function deliveryCost(deliveryQuantity) {
    if (deliveryQuantity >= 1 && deliveryQuantity <= 100) {
        var primaryQuantity = deliveryQuantity;
        primaryCost = primaryQuantity * 100;
        totalCost = primaryCost;
        return (totalCost);
    }
 
    else if (deliveryQuantity >= 101 && deliveryQuantity <= 200) {
        var primaryQuantity = 100;
        var seconderyQuantity = (deliveryQuantity - 100);
        primaryCost = primaryQuantity * 100;
        seconderyCost = seconderyQuantity * 80;
        totalCost = primaryCost + seconderyCost;
        return (totalCost);
    }
    else if (deliveryQuantity >= 201) {
        var primaryQuantity = 100;
        var seconderyQuantity = 200;
        var moreQuantity = (deliveryQuantity - 200);
        primaryCost = primaryQuantity * 100;
        seconderyCost = seconderyQuantity * 80;
        moreCost = moreQuantity * 50;
        totalCost = primaryCost + seconderyCost + moreCost;
        return (totalCost);
    }
}
 
 
// chacking result
var myDeliveryCost = deliveryCost(205)
console.log(myDeliveryCost);
 
var hisDeliveryCost = deliveryCost(125)
console.log(myDeliveryCost);
 
var herDeliveryCost = deliveryCost(45)
console.log(myDeliveryCost);
// problem 4
// perfact friend selection
 
const friendsNameList = ['bill gates', 'barak ubama', 'usama bin laden', 'saddam', 'abul', 'hablu',
    'kablu', 'bablu'];
 
function perfactFriend(bestFriend) {
    for (var indexOfFriend = 0; indexOfFriend < bestFriend.length; indexOfFriend++) {
        var nameOfFriend1 = bestFriend[indexOfFriend].length;
        var nameOfFriend;
 
        if (nameOfFriend1 == 5) {
            nameOfFriend = bestFriend[indexOfFriend];
            break
        }
    }
    return nameOfFriend;
}
 
 
 
//// chacking result
console.log(perfactFriend(friendsNameList));