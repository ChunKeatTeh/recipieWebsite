var ltl = ["black", "lightgrey"]
var ltr = ["yellow", "lightgoldenrodyellow"]
var lbl = ["pink", "plum"]
var lbr = ["lightgreen", "green"]

var tl = document.getElementById("tl");
var tr = document.getElementById("tr");
var bl = document.getElementById("bl");
var br = document.getElementById("br");

var nums = [0, 0, 0, 0]

function ctl() {
    if (nums[0] == 0) { nums[0]++; } else { nums[0]--; };
    tl.style.backgroundColor = ltl[nums[0]];
};

function ctr() {
    if (nums[1] == 0) { nums[1]++; } else { nums[1]--; };
    tr.style.backgroundColor = ltr[nums[1]];
};

function cbl() {
    if (nums[2] == 0) { nums[2]++; } else { nums[2]--; };
    bl.style.backgroundColor = lbl[nums[2]];
};

function cbr() {
    if (nums[3] == 0) { nums[3]++; } else { nums[3]--; };
    br.style.backgroundColor = lbr[nums[3]];
};