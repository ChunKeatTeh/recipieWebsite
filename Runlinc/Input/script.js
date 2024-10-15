var shaker = document.getElementById("Shake");

if (analogIn( Shaker ) > 20) {
    shaker.innerHTML = analogIn( Shaker );
}