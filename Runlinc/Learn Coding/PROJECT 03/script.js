var body = document.getElementById("body");
var funcs = [];
var funcNum = 0;

function createWords(text) {
    let words  = document.createElement("p");
    body.appendChild(words);
    body.appendChild(document.createElement("br"));

    words.innerHTML = text;
};

function createDecide (text) {
    let decide = document.createElement("p");
    body.appendChild(decide);
    body.appendChild(document.createElement("br"));

    decide.innerHTML = text;
};

function createButtons (text1, text2, goback, butt2 = true, func1, func2) {
    let buttons = document.createElement("div");
    body.appendChild(buttons);

    if (goback) {
        let back = document.createElement("button");
        back.innerHTML = "Back";
        back.onclick = function() { funcs.pop(); funcNum -= 1; funcs[funcNum]();};
        buttons.appendChild(back);
    };

    let button1 = document.createElement("button");
    button1.innerHTML = text1;
    button1.onclick = function() { func1();};
    buttons.appendChild(button1);

    if (butt2) {
        let button2 = document.createElement("button");
        button2.innerHTML = text2;
        button2.onclick = function() { func2();};
        buttons.appendChild(button2);
    };
    
    body.appendChild(document.createElement("br"));
    body.appendChild(document.createElement("br"));
};

function f1 () {
    funcs.push(f1);
    funcNum += 1;

    createWords("The trees reveal the location of the Great Oak, where a powerful guardian awaits.");

    createDecide("1 - You emerge from the Whispering Woods forever changed, with stories to tell and friendships to cherish.");
};

function f2 () {
    funcs.push(f2);
    funcNum += 1;

    createWords("You find the legendary treasure chest, filled with jewels and ancient artifacts.");

    createDecide("1 - You emerge from the Whispering Woods forever changed, with stories to tell and friendships to cherish.");
};

function l1() {
    funcs.push(l1);
    funcNum += 1;

    createWords("The fisherman give you a riddle about the woods. You solve it correctly and he gives you some golden coins and an ancient map.");

    createDecide("1 - You follow the map to a legendary treasure.")

    createButtons("Yes", "", true, false);
}; 

function l2 () {
    funcs.push(l2);
    funcNum += 1;

    createWords("You find a magical amulet along the riverbank.");

    createDecide("1 - You use the magical amulet to understand the whispers of the woods.");

    createButtons("Yes", "", true, false);
};

function l3 () {
    funcs.push(l3);
    funcNum += 1;

    createWords("The fairies give you with a magical amulet.");

    createDecide("1 - You use the magical amulet to understand the whispers of the woods.");

    createButtons("Yes", "", true, false);
};

function l4 () {
    funcs.push(l4);
    funcNum += 1;

    createWords("You find an ancient map the reveals hidden location in the forset where treasures lie.")

    createDecide("1 - You follow the map to a legendary treasure.")    

    createButtons("Yes", "", true, false);
};

function leftPath() {
    funcs.push(leftPath);
    funcNum += 1;

    createWords("You follow the sound of water and discover a sparking river. You also see a fishing boat bobbing gently on the water.");

    createDecide("1 - Approach the boat and ask the fisherman for guidance. <br>2 - Search along the riverbank for hidden treasures.");

    createButtons("1", "2", true, true, l1, l2);
};

function rightPath() {
    funcs.push(rightPath);
    funcNum += 1;

    createWords("You walk towards the glowing lights and encounter a fairy circle surrounded by mushrooms that shimmer with colours.");

    createDecide("1 - Dance with the fairies and join their circle. <br>2 - Look for clues about the ancient secrets they guard.");

    createButtons("1", "2", true, true, l3, l4);
};

function start() {
    funcs = [];

    funcs.push(start);

    createWords("You are Lila, a brave and curious girl, standing at the entrance of the Whispering Woods and ready to embark on a journey. <br>You step into the woods and hear the enchanting whispers of the trees, guiding you deeper into the woods. Suddenly you reach a fork in the path");

    createDecide("Left Path - Follow the sound of rushing water. <br>Right Path - Invstigate to soft glow of light in the distance.");

    createButtons("Left Path", "Right Path", false, true, leftPath, rightPath);
};