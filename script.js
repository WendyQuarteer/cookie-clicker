let label = document.getElementById("counter-label");
//display text for start
label.innerText = ('click this dog to give it some love.')
//start score = 0
let score = 0;
console.log(score);
//each click will add 1
let click = 1;
console.log(click);

//make sure the score adds 1 to the score every time someone clicks on the pic.
document.getElementById("run").addEventListener("click", function getScore() {
    let newScore = score + click++;
    console.log(newScore);
//display the score inside the label
    label.innerText = (`You have shown this dog ${newScore} times love.  Give it some more!`);
});
//add a button that will multiply each click with 3
document.getElementById("feed").addEventListener("click", () => {
    click += 2;
    let newScore = score + click++;
    console.log(newScore);
    label.innerText = (`You have shown this dog ${newScore} times love.  Give it some more!`);
});
