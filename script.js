const meatButton = document.getElementById("ingredient-titleM");
const vegetablesButton = document.getElementById("ingredient-titleV");
const dairyeggsButton = document.getElementById("ingredient-titleDE");
const grainsstarchesButton = document.getElementById("ingredient-titleGS");
const seasoningsspicesButton = document.getElementById("ingredient-titleSS");
const otherButton = document.getElementById("ingredient-titleO");

const updateRecipiesButton = document.getElementById("updateRecipies");

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

let availableIngredients = { 
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
    sweetchilisauce: document.getElementById("sweetchilisauce").checked,

    honey: document.getElementById("honey").checked,
    molasses: document.getElementById("molasses").checked,
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
    ricevinegar: document.getElementById("ricevinegar").checked,
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
        try{
            for (var i = 0; i < this.ingredients.length; i++) {
                if (this.ingredients[i] == false) {
                    console.log(recipies.indexOf(this));
                    console.log("no show");
                    console.log(this.ingredients);
                    this.element.classList.remove("showIngredient");
                    break;
                }
            }

            if (this.ingredients.every(this.checkShow)) {
                console.log(recipies.indexOf(this));
                console.log("show");
                console.log(this.ingredients);
                this.element.classList.add("showIngredient");
            }
        } catch (e) {
            console.log(recipies.indexOf(this));
            console.log(e);
        }
    }
}

let SweetAndSpicyChicken = new Recipie(document.getElementById("sweetandspicychicken"), [availableIngredients.crispychickenstrips, availableIngredients.brownsugar, availableIngredients.honeybbqsauce, availableIngredients.hotsauce]);
let ButtermilkChickenTenders = new Recipie(document.getElementById("buttermilkchickentenders"), [availableIngredients.chickenbreast, availableIngredients.flour, availableIngredients.eggs, availableIngredients.buttermilk, availableIngredients.seasonedsalt, availableIngredients.paprika, availableIngredients.parsleyflakes, availableIngredients.oil]);
let SouthernFriedChicken = new Recipie(document.getElementById("southernfriedchicken"), [availableIngredients.chicken, availableIngredients.koshersalt, availableIngredients.garlicpowder, availableIngredients.onionpowder, availableIngredients.buttermilk, availableIngredients.hotsauce, availableIngredients.flour, availableIngredients.cornstarch, availableIngredients.paprika, availableIngredients.blackpepper, availableIngredients.oil, availableIngredients.flakedsalt]);
let HoneyBuffaloWings = new Recipie(document.getElementById("honeybuffalowings"), [availableIngredients.brownsugar, availableIngredients.koshersalt, availableIngredients.blackpepper, availableIngredients.garlicpowder, availableIngredients.onionpowder, availableIngredients.smokedpaprika, availableIngredients.chilipowder, availableIngredients.groundcumin, availableIngredients.driedparsley, availableIngredients.hotsauce, availableIngredients.honey, availableIngredients.butter, availableIngredients.molasses, availableIngredients.honey, availableIngredients.chickenwings]);
let BuffaloChickenTenders = new Recipie(document.getElementById("buffalochickentenders"), [availableIngredients.chickenbreast, availableIngredients.buttermilk, availableIngredients.hotsauce, availableIngredients.eggs, availableIngredients.flour, availableIngredients.salt, availableIngredients.pepper, availableIngredients.paprika, availableIngredients.garlicpowder, availableIngredients.bakingpowder, availableIngredients.oil, availableIngredients.franksredhotpeppersauce, availableIngredients.butter, availableIngredients.whitevinegar, availableIngredients.worcestershiresauce]);

let FriedScallops = new Recipie(document.getElementById("friedscallops"), [availableIngredients.oil, availableIngredients.scallops, availableIngredients.flour, availableIngredients.cornstarch, availableIngredients.salt, availableIngredients.garlicpowder, availableIngredients.paprika, availableIngredients.pepper, availableIngredients.eggs, availableIngredients.breadcrumbs]);
let FriedCalamari = new Recipie(document.getElementById("friedcalamari"), [availableIngredients.calamari, availableIngredients.lemonjuice, availableIngredients.flour, availableIngredients.cayenne, availableIngredients.paprika, availableIngredients.salt, availableIngredients.buttermilk, availableIngredients.tallow, availableIngredients.marinarasauce, availableIngredients.lemonwedges, availableIngredients.aioli]);
let CrispyShrimpTempura = new Recipie(document.getElementById("crispyshrimptempura"), [availableIngredients.shrimp, availableIngredients.oil, availableIngredients.cornstarch, availableIngredients.eggs, availableIngredients.salt, availableIngredients.whitesugar, availableIngredients.bakingpowder]);
let CrispyGarlicParmesanSalmon = new Recipie(document.getElementById("crispygarlicparmesansalmon"), [availableIngredients.salmon, availableIngredients.breadcrumbs, availableIngredients.parmesancheese, availableIngredients.parsley, availableIngredients.garlic, availableIngredients.butter, availableIngredients.salt, availableIngredients.pepper, availableIngredients.lemonwedges]);
let BangBangShrimp = new Recipie(document.getElementById("bangbangshrimp"), [availableIngredients.oil, availableIngredients.buttermilk, availableIngredients.flour, availableIngredients.cornstarch, availableIngredients.eggs, availableIngredients.breadcrumbs, availableIngredients.onionpowder, availableIngredients.garlicpowder, availableIngredients.driedbasil, availableIngredients.driedoregano, availableIngredients.shrimp, availableIngredients.mayonaise, availableIngredients.sweetchilisauce, availableIngredients.honey, ricevinegar, availableIngredients.hotsauce, availableIngredients.koshersalt, availableIngredients.blackpepper]);

let FriedOnionRings = new Recipie(document.getElementById("friedonionrings"), [availableIngredients.onions, availableIngredients.buttermilk, availableIngredients.flour, availableIngredients.bakingpowder, availableIngredients.salt, availableIngredients.pepper, availableIngredients.mexicanoregano, availableIngredients.oil]);
let EggSalad = new Recipie(document.getElementById("eggsalad"), [availableIngredients.eggs, availableIngredients.whitevinegar, availableIngredients.mayonaise, availableIngredients.salt, availableIngredients.whitepepper]);
let ParmesanCauliflowerBites = new Recipie(document.getElementById("parmesancauliflowerbites"), [availableIngredients.cauliflowerflorets, availableIngredients.butter, availableIngredients.parmesancheese, availableIngredients.paprika, availableIngredients.blackpepper]);
let OnionPetals = new Recipie(document.getElementById("onionpetals"), [availableIngredients.mayonaise, availableIngredients.sourcream, availableIngredients.ketchup, availableIngredients.horseradish, availableIngredients.garlic, availableIngredients.koshersalt, availableIngredients.blackpepper, availableIngredients.smokedpaprika, availableIngredients.cayenne, availableIngredients.sweetonion, availableIngredients.flour, availableIngredients.seasonedsalt, availableIngredients.blackpepper, availableIngredients.garlicpowder, availableIngredients.onionpowder, availableIngredients.smokedpaprika, availableIngredients.buttermilk, availableIngredients.eggs, availableIngredients.oil]);
let CrispyBakedPotatoWedges = new Recipie(document.getElementById("crispybakedpotatowedges"), [availableIngredients.potatoes, availableIngredients.oliveoil, availableIngredients.garlicpowder, availableIngredients.onionpowder, availableIngredients.salt, availableIngredients.blackpepper, availableIngredients.parsley]);

let recipies = [ButtermilkChickenTenders, SweetAndSpicyChicken, SouthernFriedChicken, HoneyBuffaloWings, BuffaloChickenTenders, FriedScallops, FriedCalamari, CrispyShrimpTempura, CrispyGarlicParmesanSalmon, BangBangShrimp, FriedOnionRings, EggSalad, ParmesanCauliflowerBites, OnionPetals, CrispyBakedPotatoWedges]

function updateRecipies() {
    availableIngredients = { 
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
        sweetchilisauce: document.getElementById("sweetchilisauce").checked,
    
        honey: document.getElementById("honey").checked,
        molasses: document.getElementById("molasses").checked,
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
        ricevinegar: document.getElementById("ricevinegar").checked,
        worcestershiresauce: document.getElementById("worcestershiresauce").checked,
        lemonwedges: document.getElementById("lemonwedges").checked
    };

    SweetAndSpicyChicken = new Recipie(document.getElementById("sweetandspicychicken"), [availableIngredients.crispychickenstrips, availableIngredients.brownsugar, availableIngredients.honeybbqsauce, availableIngredients.hotsauce]);
    ButtermilkChickenTenders = new Recipie(document.getElementById("buttermilkchickentenders"), [availableIngredients.chickenbreast, availableIngredients.flour, availableIngredients.eggs, availableIngredients.buttermilk, availableIngredients.seasonedsalt, availableIngredients.paprika, availableIngredients.parsleyflakes, availableIngredients.oil]);
    SouthernFriedChicken = new Recipie(document.getElementById("southernfriedchicken"), [availableIngredients.chicken, availableIngredients.koshersalt, availableIngredients.garlicpowder, availableIngredients.onionpowder, availableIngredients.buttermilk, availableIngredients.hotsauce, availableIngredients.flour, availableIngredients.cornstarch, availableIngredients.paprika, availableIngredients.blackpepper, availableIngredients.oil, availableIngredients.flakedsalt]);
    HoneyBuffaloWings = new Recipie(document.getElementById("honeybuffalowings"), [availableIngredients.brownsugar, availableIngredients.koshersalt, availableIngredients.blackpepper, availableIngredients.garlicpowder, availableIngredients.onionpowder, availableIngredients.smokedpaprika, availableIngredients.chilipowder, availableIngredients.groundcumin, availableIngredients.driedparsley, availableIngredients.hotsauce, availableIngredients.honey, availableIngredients.butter, availableIngredients.molasses, availableIngredients.honey, availableIngredients.chickenwings]);
    BuffaloChickenTenders = new Recipie(document.getElementById("buffalochickentenders"), [availableIngredients.chickenbreast, availableIngredients.buttermilk, availableIngredients.hotsauce, availableIngredients.eggs, availableIngredients.flour, availableIngredients.salt, availableIngredients.pepper, availableIngredients.paprika, availableIngredients.garlicpowder, availableIngredients.bakingpowder, availableIngredients.oil, availableIngredients.franksredhotpeppersauce, availableIngredients.butter, availableIngredients.whitevinegar, availableIngredients.worcestershiresauce]);

    FriedScallops = new Recipie(document.getElementById("friedscallops"), [availableIngredients.oil, availableIngredients.scallops, availableIngredients.flour, availableIngredients.cornstarch, availableIngredients.salt, availableIngredients.garlicpowder, availableIngredients.paprika, availableIngredients.pepper, availableIngredients.eggs, availableIngredients.breadcrumbs]);
    FriedCalamari = new Recipie(document.getElementById("friedcalamari"), [availableIngredients.calamari, availableIngredients.lemonjuice, availableIngredients.flour, availableIngredients.cayenne, availableIngredients.paprika, availableIngredients.salt, availableIngredients.buttermilk, availableIngredients.tallow, availableIngredients.marinarasauce, availableIngredients.lemonwedges, availableIngredients.aioli]);
    CrispyShrimpTempura = new Recipie(document.getElementById("crispyshrimptempura"), [availableIngredients.shrimp, availableIngredients.oil, availableIngredients.cornstarch, availableIngredients.eggs, availableIngredients.salt, availableIngredients.whitesugar, availableIngredients.bakingpowder]);
    CrispyGarlicParmesanSalmon = new Recipie(document.getElementById("crispygarlicparmesansalmon"), [availableIngredients.salmon, availableIngredients.breadcrumbs, availableIngredients.parmesancheese, availableIngredients.parsley, availableIngredients.garlic, availableIngredients.butter, availableIngredients.salt, availableIngredients.pepper, availableIngredients.lemonwedges]);
    BangBangShrimp = new Recipie(document.getElementById("bangbangshrimp"), [availableIngredients.oil, availableIngredients.buttermilk, availableIngredients.flour, availableIngredients.cornstarch, availableIngredients.eggs, availableIngredients.breadcrumbs, availableIngredients.onionpowder, availableIngredients.garlicpowder, availableIngredients.driedbasil, availableIngredients.driedoregano, availableIngredients.shrimp, availableIngredients.mayonaise, availableIngredients.sweetchilisauce, availableIngredients.honey, ricevinegar, availableIngredients.hotsauce, availableIngredients.koshersalt, availableIngredients.blackpepper]);

    FriedOnionRings = new Recipie(document.getElementById("friedonionrings"), [availableIngredients.onions, availableIngredients.buttermilk, availableIngredients.flour, availableIngredients.bakingpowder, availableIngredients.salt, availableIngredients.pepper, availableIngredients.mexicanoregano, availableIngredients.oil]);
    EggSalad = new Recipie(document.getElementById("eggsalad"), [availableIngredients.eggs, availableIngredients.whitevinegar, availableIngredients.mayonaise, availableIngredients.salt, availableIngredients.whitepepper]);
    ParmesanCauliflowerBites = new Recipie(document.getElementById("parmesancauliflowerbites"), [availableIngredients.cauliflowerflorets, availableIngredients.butter, availableIngredients.parmesancheese, availableIngredients.paprika, availableIngredients.blackpepper]);
    OnionPetals = new Recipie(document.getElementById("onionpetals"), [availableIngredients.mayonaise, availableIngredients.sourcream, availableIngredients.ketchup, availableIngredients.horseradish, availableIngredients.garlic, availableIngredients.koshersalt, availableIngredients.blackpepper, availableIngredients.smokedpaprika, availableIngredients.cayenne, availableIngredients.sweetonion, availableIngredients.flour, availableIngredients.seasonedsalt, availableIngredients.blackpepper, availableIngredients.garlicpowder, availableIngredients.onionpowder, availableIngredients.smokedpaprika, availableIngredients.buttermilk, availableIngredients.eggs, availableIngredients.oil]);
    CrispyBakedPotatoWedges = new Recipie(document.getElementById("crispybakedpotatowedges"), [availableIngredients.potatoes, availableIngredients.oliveoil, availableIngredients.garlicpowder, availableIngredients.onionpowder, availableIngredients.salt, availableIngredients.blackpepper, availableIngredients.parsley]);

    recipies = [ButtermilkChickenTenders, SweetAndSpicyChicken, SouthernFriedChicken, HoneyBuffaloWings, BuffaloChickenTenders, FriedScallops, FriedCalamari, CrispyShrimpTempura, CrispyGarlicParmesanSalmon, BangBangShrimp, FriedOnionRings, EggSalad, ParmesanCauliflowerBites, OnionPetals, CrispyBakedPotatoWedges]

    for (let i = 0; i < recipies.length; i++) {
        recipies[i].showRecipie();
    }
}

updateRecipiesButton.addEventListener("click", updateRecipies);