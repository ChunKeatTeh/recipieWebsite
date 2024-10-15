var dropdown = document.getElementById("food");
var receipt = document.getElementById("receipttable");
var totals = document.getElementById("totals");
var foodprice = document.getElementById("foodprice");
var daytime = document.getElementById("daytime");
var quantity = document.getElementById("quantity");

var receiptNum = 1;
var selectedFood = "Pizza"
var foodtoAdd = "Pizza";
var subtotal = 0;

const menu = {
    "Pizza": 12.99,
    "Burger": 8.99,
    "Salad": 6.99,
    "Sushi": 15.99,
    "Pasta": 11.99
}

function createReceiptRow() {
    var row = receipt.insertRow(-1);
    var num = row.insertCell(0);
    var item = row.insertCell(1);
    var price = row.insertCell(2);

    num.id = "left";
    item.id = "left";
    price.id = "right";

    num.innerHTML = receiptNum.toString();

    if (quantity.value == 1) {
        item.innerHTML = foodtoAdd;
    } else {
        item.innerHTML = foodtoAdd + " x" + quantity.value.toString();
    };

    price.innerHTML = (menu[selectedFood] * quantity.value).toFixed(2).toString();

    subtotal += menu[selectedFood] * quantity.value;
    receiptNum++;
};

function setDate() {
    var d = new Date()
    var date = d.getDate().toString() + "/" + d.getMonth().toString() + "/" + d.getFullYear().toString();
    var time = d.getHours().toString() + ":" + d.getMinutes().toString();

    var row = daytime.insertRow(-1);
    var dateT = row.insertCell(0);
    var timeT = row.insertCell(1);

    dateT.id = "left";
    timeT.id = "right";

    dateT.innerHTML = date;
    timeT.innerHTML = time;
}

function calcTotalPrice() {
    setDate();

    var tax = subtotal * 6 / 100;
    var total = subtotal + tax;

    var subtotalR = totals.insertRow(-1);
    var subtotalT = subtotalR.insertCell(0);
    var subtotalC = subtotalR.insertCell(1);

    var taxR = totals.insertRow(-1);
    var taxT = taxR.insertCell(0);
    var taxC = taxR.insertCell(1);

    var totalR = totals.insertRow(-1);
    var totalT = totalR.insertCell(0);
    var totalC = totalR.insertCell(1);

    subtotalT.id = "left";
    subtotalC.id = "right";

    taxT.id = "left";
    taxC.id = "right";

    totalT.id = "left";
    totalC.id = "right";

    subtotalT.innerHTML = "Subtotal";
    subtotalC.innerHTML = subtotal.toFixed(2);

    taxT.innerHTML = "Tax (6%)";
    taxC.innerHTML = tax.toFixed(2);

    totalT.innerHTML = "Total";
    totalC.innerHTML = total.toFixed(2);
};

dropdown.addEventListener("change", function() {
    selectedFood = dropdown.options[dropdown.selectedIndex].value;
    foodtoAdd = selectedFood;
    var foodPrice = menu[selectedFood];
    foodprice.innerHTML = foodPrice;
});