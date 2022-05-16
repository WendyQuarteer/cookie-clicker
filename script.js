//start score = 0
let score = 0;
console.log(score);
//each click will add 1
let click = 1;
console.log(click);
//make sure the score adds 1 to the score every time someone clicks on the pic.
document.getElementById("run").addEventListener("click", () => {
    let newScore = score + click++;
    console.log(newScore);
//display the score inside the label
    let label = document.getElementById("counter-label").innerHTML = (`You have shown this dog ${newScore} times love.  Give it some more!`);
    console.log(label);
});