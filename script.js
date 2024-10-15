const meatButton = document.getElementById("ingredient-titleM");
const vegetablesButton = document.getElementById("ingredient-titleV");
const dairyeggsButton = document.getElementById("ingredient-titleDE");
const grainsstarchesButton = document.getElementById("ingredient-titleGS");
const seasoningsspicesButton = document.getElementById("ingredient-titleSS");
const otherButton = document.getElementById("ingredient-titleO");

const meatIngredients = document.getElementById("ingredientsM");
const vegetableIngredients = document.getElementById("ingredientsV");
const dairyeggsIngredients = document.getElementById("ingredientsDE");
const grainsstarchesIngredients = document.getElementById("ingredientsGS");
const seasoningsspicesIngredients = document.getElementById("ingredientsSS");
const otherIngredients = document.getElementById("ingredientsO");

meatButton.addEventListener("click", () => {
    meatIngredients.classList.toggle("showB");
});

vegetablesButton.addEventListener("click", () => {
    vegetableIngredients.classList.toggle("showB");
});

dairyeggsButton.addEventListener("click", () => {
    dairyeggsIngredients.classList.toggle("showB");
});

grainsstarchesButton.addEventListener("click", () => {
    grainsstarchesIngredients.classList.toggle("showB");
});

seasoningsspicesButton.addEventListener("click", () => {
    seasoningsspicesIngredients.classList.toggle("showB");
});

otherButton.addEventListener("click", () => {
    otherIngredients.classList.toggle("showB");
});

let availableIngredients = { ...dictionary, 
    chickenbreast: document.getElementById("chickenbreast").checked,
    crispychickenstrips: document.getElementById("crispychickenstrips").checked,
    chicken: document.getElementById("chicken").checked,
    chickenwings: document.getElementById("chickenwings").checked,
    scallops: document.getElementById("scallops").checked,
    calamari: document.getElementById("calamari").checked,
    shrimp: document.getElementById("shrimp").checked,
    salmon: document.getElementById("salmon").checked,

    onions: document.getElementById("onions").checked,
    potatoes: document.getElementById("potatoes").checked,
    sweetonion: document.getElementById("sweetonion").checked,
    cauliflowerflorets: document.getElementById("cauliflowerflorets").checked,

    eggs: document.getElementById("eggs").checked,
    buttermilk: document.getElementById("buttermilk").checked,
    parmesancheese: document.getElementById("parmesancheese").checked,
    mayonaise: document.getElementById("mayonaise").checked,
    sourcream: document.getElementById("sourcream").checked,

    flour: document.getElementById("flour").checked,
    cornstarch: document.getElementById("cornstarch").checked,
    breadcrumbs: document.getElementById("breadcrumbs").checked,

    salt: document.getElementById("salt").checked,
    seasonedsalt: document.getElementById("seasonedsalt").checked,
    pepper: document.getElementById("pepper").checked,
    blackpepper: document.getElementById("blackpepper").checked,
    whitepepper: document.getElementById("whitepepper").checked,
    paprika: document.getElementById("paprika").checked,
    garlicpowder: document.getElementById("garlicpowder").checked,
    onionpowder: document.getElementById("onionpowder").checked,
    chilipowder: document.getElementById("chilipowder").checked,
    cayenne: document.getElementById("cayenne").checked,
    driedoregano: document.getElementById("driedoregano").checked,
    mexicanoregano: document.getElementById("mexicanoregano").checked,
    driedbasil: document.getElementById("driedbasil").checked,
    parsleyflakes: document.getElementById("parsleyflakes").checked,
    driedparsley: document.getElementById("driedparsley").checked,
    parsley: document.getElementById("parsley").checked,
    smokedpaprika: document.getElementById("smokedpaprika").checked,
    groundcumin: document.getElementById("groundcumin").checked,
    hotsauce: document.getElementById("hotsauce").checked,
    franksredhotpeppersauce: document.getElementById("franksredhotpeppersauce").checked,
    koshersalt: document.getElementById("koshersalt").checked,
    flakedsalt: document.getElementById("flakedsalt").checked,
    brownsugar: document.getElementById("brownsugar").checked,
    whitesugar: document.getElementById("whitesugar").checked,
    bakingpowder: document.getElementById("bakingpowder").checked,
    honeybbqsauce: document.getElementById("honeybbqsauce").checked,

    honey: document.getElementById("honey").checked,
    molasses: document.getElementById("molasses").checked,
    cookingoil: document.getElementById("cookingoil").checked,
    butter: document.getElementById("butter").checked,
    marinarasauce: document.getElementById("marinarasauce").checked,
    aioli: document.getElementById("aioli").checked,
    ketchup: document.getElementById("ketchup").checked,
    horseradish: document.getElementById("horseradish").checked,
    garlic: document.getElementById("garlic").checked,
    oliveoil: document.getElementById("oliveoil").checked,
    tallow: document.getElementById("tallow").checked,
    lemonjuice: document.getElementById("lemonjuice").checked,
    oil: document.getElementById("oil").checked,
    whitevinegar: document.getElementById("whitevinegar").checked,
    worcestershiresauce: document.getElementById("worcestershiresauce").checked,
    lemonwedges: document.getElementById("lemonwedges").checked
};

class Recipie {
    constructor(element, ingredients) {
        this.element = element;
        this.ingredients = ingredients;
    }

    checkShow(ingredient) { return ingredient; }

    showRecipie() {
        for (var i = 0; i < this.ingredients.length; i++) {
            if (availableIngredients.this.ingredients[i] == false) {
                this.element.classList.remove("showIngredient");
                alert("no show");
                break;
            }
        }

        if (this.ingredients.every(this.checkShow)) {
            this.element.classList.add("showIngredient");
            alert("show");
        }

        alert("go through");
    }
}

function test() {
    alert("test");
    ButtermilkChickenTenders.showRecipie();
}

const ButtermilkChickenTenders = new Recipie(document.getElementById("buttermilkchickentenders"), [chickenbreast, flour, eggs, buttermilk, seasonedsalt, paprika, parsleyflakes, oil]);