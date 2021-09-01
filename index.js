// console.log("hello");

// var nane =prompt("what is your name");

// alert("hello this is " + name);

var output = document.querySelector("#output");
var principle = document.querySelector("#principle");
var rate = document.querySelector("#rate");
var time = document.querySelector("#time");
var n = document.querySelector("#n");
var soutput = document.querySelector("#soutput");

var calculate = document.querySelector(".calculate");

// console.log(principle);
// console.log(output);
// console.log(rate);
// console.log(time);
// console.log(calculate);
// console.log(n);
console.log(soutput);

calculate.addEventListener('click', function calculateSI() {
    var SI = (principle.value * rate.value * time.value) / 100;

    //    console.log(principle.value);
    console.log(SI);
    output.innerHTML = "your simple intrest is :" + SI;


}
);

calculate.addEventListener('click', function calculateCI() {
    //     // p * (Math.pow((1 + (r / n)), (n * t)));
    var CI = principle.value * (Math.pow((1 + (rate.value / n.value)), (n.value * time.value)));
    console.log(CI);
    soutput.innerHTML = "your compound intrest is :" + CI;
}
);

