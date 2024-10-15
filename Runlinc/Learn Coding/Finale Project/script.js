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
    meatIngredients.classList.toggle("show");
});

vegetablesButton.addEventListener("click", () => {
    vegetableIngredients.classList.toggle("show");
});

dairyeggsButton.addEventListener("click", () => {
    dairyeggsIngredients.classList.toggle("show");
});

grainsstarchesButton.addEventListener("click", () => {
    grainsstarchesIngredients.classList.toggle("show");
});

seasoningsspicesButton.addEventListener("click", () => {
    seasoningsspicesIngredients.classList.toggle("show");
});

otherButton.addEventListener("click", () => {
    otherIngredients.classList.toggle("show");
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
    pepper: document.getElementById("pepper").checked,
    paprika: document.getElementById("paprika").checked,
    garlicpowder: document.getElementById("garlicpowder").checked,
    onionpowder: document.getElementById("onionpowder").checked,
    chilipowder: document.getElementById("chilipowder").checked,
    cayenne: document.getElementById("cayenne").checked,
    groundoregano: document.getElementById("groundoregano").checked,
    groundsage: document.getElementById("groundsage").checked,
    driedbasil: document.getElementById("driedbasil").checked,
    driedmarjoram: document.getElementById("driedmarjoram").checked,
    parsleyflakes: document.getElementById("parsleyflakes").checked,
    driedparsley: document.getElementById("driedparsley").checked,
    smokedpaprika: document.getElementById("smokedpaprika").checked,
    groundcumin: document.getElementById("groundcumin").checked,
    onionsalt: document.getElementById("onionsalt").checked,
    seasonedsalt: document.getElementById("seasonedsalt").checked,
    vegetableoil: document.getElementById("vegetableoil").checked,
    canolaoil: document.getElementById("canolaoil").checked,
    cookingoil: document.getElementById("cookingoil").checked,
    tallow: document.getElementById("tallow").checked,
    lemonjuice: document.getElementById("lemonjuice").checked,
    sweetchilisauce: document.getElementById("sweetchilisauce").checked,
    ricevinegar: document.getElementById("ricevinegar").checked,
    hotsauce: document.getElementById("hotsauce").checked,
    franksredhotpeppersauce: document.getElementById("franksredhotpeppersauce").checked,
    whitevinegar: document.getElementById("whitevinegar").checked,
    worcestershiresauce: document.getElementById("worcestershiresauce").checked,
    koshersalt: document.getElementById("koshersalt").checked,
    brownsugar: document.getElementById("brownsugar").checked,
    honey: document.getElementById("honey").checked,
    msg: document.getElementById("msg").checked,
    bakingpowder: document.getElementById("bakingpowder").checked,
    parmesancheese: document.getElementById("parmesancheese").checked,
    lemonwedges: document.getElementById("lemonwedges").checked
};

class Recipie {
    constructor(element, ingredients, instructions) {
        this.element = element;
        this.ingredients = ingredients;
        this.instructions = instructions;
    }

    checkShow(ingredient) { return ingredient; }

    showRecipie() {
        for (var i = 0; i < this.ingredients.length; i++) {
            if (availableIngredients.this.ingredients[i] == false) {
                this.element.classList.remove("showIngredient");
                break;
            }
        }

        if (this.ingredients.every(this.checkShow)) {
            this.element.classList.add("showIngredient");
        }
    }
}