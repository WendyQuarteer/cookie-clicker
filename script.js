//prepare variable for label so we can work with it
let label = document.getElementById("counter-label");
//display text for start
label.innerText = ('This dog is in need of some attention:')
//prepare variable for comment so we can work with it
let comment = document.getElementById("comment");
//display text for start
comment.innerText = ('Let\'s give it some love by clicking on it');
//prepare variable for power so we can work with it
let power = document.getElementById("power");
//prepare variable for run so we can work with it
let run = document.getElementById("run");
//start score = 0
let points = 0;
//each click will add 1
let clickPower = 1;
//prepare variable for autoClick function
let autoClickerAmount = 0;

//for starters make sure the score adds 1 to the score every time someone clicks on the pic.
run.addEventListener("click", function getPoints() {
    points = points + clickPower;
    //display the score inside the label
    label.innerText = (`Your points: ${points}`);
    //display a comment
    comment.innerText = ('Keep making this dog happy and earn more!')
});

//add functions that will allow to buy and each time it will make the click-power go up:
document.getElementById("cookie").addEventListener("click", function cookie() {
    buyMultiplier(25, 3, 'You just bought a cookie for the dog, from here on out you are getting triple the points!');
    bostonPower();
}, {once: true});
document.getElementById("food").addEventListener("click", function food() {
    buyMultiplier(85, 5, 'You just bought food for the dog, from here on out you are getting five times the points!');
    bostonPower();
}, {once: true});
document.getElementById("drink").addEventListener("click", function drink() {
    buyMultiplier(350, 8, 'You just bought water for the dog, from here on out you are getting eight times the points!');
    bostonPower();
}, {once: true});
document.getElementById("walk").addEventListener("click", function walk() {
    buyMultiplier(700, 12, 'You just went for a walk with the dog, from here on out you are getting twelve times the points!');
    bostonPower();
}, {once: true});
document.getElementById("bone").addEventListener("click", function bone() {
    buyMultiplier(1500, 20, 'You just bought a bone for the dog, from here on out you are getting twenty times the points!');
    bostonPower();
}, {once: true});

//auto-clicker
document.getElementById("auto-click").addEventListener("click", function () {
    if (points < 1000) {
        comment.innerText = ('Your score isn\'t high enough, keep giving it all your love');
    } else {
        autoClickerAmount ++;
        power.innerText = ('Every 2 seconds you will get an automatic click!');
    }
});
setInterval(() => {
  points += autoClickerAmount;
    label.innerText = (`Your points: ${points}`);
}, 5000);

//multiplier function
function buyMultiplier(price, multiplier, commentText) {
    if (points < price) {
        comment.innerText = ('Your score isn\'t high enough, keep giving it all your love');
    } else {
        points = points - price;
        label.innerText = (`Your points: ${points}`);
        clickPower = multiplier;
        comment.innerText = commentText;
    }
}
//function to display the power
function bostonPower() {
    power.innerText = (`You now get ${clickPower} x the points!`);
}







