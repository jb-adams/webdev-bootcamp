// NODE Exercise 2
// Average Grade

/* define function "average"
   takes an array of test scores
   returns the average score in the array, rounded to the nearest whole number
*/

function average(scores) {
    var sum = 0;
    
    for (var i=0; i<scores.length; i++) {
        sum += scores[i];
    }

    var avg = Math.round( sum / scores.length );
    return avg;
    
}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));