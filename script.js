prompt("what is your name");
prompt("what is your cruch name");

var lovescore = Math.random();
lovescore = lovescore * 100;
lovescore = Math.floor( lovescore ) + 1;

if (lovescore > 70 ) {
    alert("your love score is " + lovescore + "%" + " you are really love each other!!!");
    
} else {
    if (lovescore > 50 && lovescore < 70 ) {
        alert( "your love score is " + lovescore + "%" + " you should reconsider your relationship");
    } else {
        alert("your love score is " + lovescore + "%" + " you must end your relationship ");
    }
    
}