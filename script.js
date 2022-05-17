//prepare variable for label so we can work with it
let label = document.getElementById("counter-label");
//display text for start
label.innerText = ('This dog is in need of some attention:')
//prepare variable for comment so we can work with it
let comment = document.getElementById("comment");
//display text for start
comment.innerText = ('Let\'s give it some love by clicking on it');
//prepare variable for run so we can work with it
let run = document.getElementById("run");
//start score = 0
let points = 0;
//each click will add 1
let click = 1;

//make sure the score adds 1 to the score every time someone clicks on the pic.
run.addEventListener("click", function getPoints() {
    points = points + click;
    //display the score inside the label
    label.innerText = (`Your points: ${points}`);
    //display a comment
    comment.innerText = ('Keep making this dog happy and earn more!')
});
//add a button that will allow to buy a cookie
document.getElementById("cookie").addEventListener("click", function cookie() {
    //set value for cookie
    let cookie = 15;
    if (points < 15) {
        console.log(points);
        //comment.innerText = ('Your score isn\'t high enough, keep giving it all your love');
    } else {
        //comment.innerText = ('Congratulations you just bought a cookie for the dog!');
        points = points - cookie;
        console.log(points)
        label.innerText = (`Your points: ${points}`);
        console.log(label.innerText);
        click *= 3;
        comment.innerText = ('That\'s right, from here on out you are getting triple the points!');
    }
});








