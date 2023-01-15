//1.create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
    //1a. programmatically subtract the value of the first element in the array from the value in the last element of the array
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages[ages.length-1] - ages[0]); 

    //1b.add a new age to your array and repeat the step above
ages.push(15);
console.log(ages[ages.length-1] - ages[0]);

    //1c.use a loop to iterate through the array and calculate the average age
var i, sum = 0;
for (i = 0; i < ages.length; i++){
    sum = sum + ages[i];
}
console.log(sum / ages.length);

//2. create an array called names that contains the following values:'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
    //2a. use a loop to iterate through the array and calculate the average number of letters per name
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
sum = 0;
for (i = 0; i < names.length; i++) {
sum = sum + names[i].length;
}
console.log(sum /names.length);

    //2b. use a loop to iterate through the array again and cocatenate all the names together, separated by spaces
var con = names[0];
for (i = 1; i < names.length; i++){
    con = con.concat(" ", names[i]);
}
console.log(con);

//3. How do you access the last element of any array
    //array[array.length-1]

//4. How do you access the first element of any array
    //array[0]

//5. create a new array called nameLengths. write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array
//for example: 
//namesArray = ["Kelly", "Sam", "Kate"] //given this array
//nameLength = [5, 3, 4] // create this new array
    let nameLengths = [5, 3, 4];
    for (var i = 0; i < names.lengths; i++){
        nameLengths.push( names[i].length);
    }
    console.log(nameLengths);

//6. write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array
sum = 0;
for (var i = 0; i < nameLengths.length; i++) {
    sum = sum + nameLengths[i];
}
console.log(sum);

//7. write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times
function repeat(word, n){
    var repeatedword = '';
    for (i = 0; i < n; i++) {
        repeatedword = repeatedword + word;
    }
    return(repeatedword);
}
console.log(repeat('Hello', 3));

//8. write a function that takes two parameters, firstName and LastName and returns a full name
//the full name should be the first and the last name separated by a space
function fullName (firstName, lastName) {
    return (firstName + " "+ lastName);
}
console.log(fullName("Hanna", "Abraha"));

//9.write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100
function totalNumberGreaterThanHundred (array){
sum = 0;
for (i = 0; i < array.length; i++){
    sum = sum + array[i];
}
if (sum > 100){
    return true;
}
else{
    return false;
}
}
console.log (totalNumberGreaterThanHundred(ages));

//10. write a function that takes an array of numbers and returns the average of all the elements in the array
function average (array){
    sum = 0;
    for (i =0; i < array.length; i++) {
        sum = sum + array [i];
    }
    return(sum / array.length);
}
console.log(average(ages));
//11.write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array
array1 = [2, 4, 6, 8, 10]  
array2 = [1, 3, 5, 7, 9]
function compareAverages (array1, array2) {
    sum = 0;
    for (i = 0; i < array1.length; i++){
        sum = sum + array1[i];
    }
    var avg1 = (sum / array1.length);
    sum = 0;
    for (i = 0; i < array2.length; i++){
        sum = sum + array2[i];
    }
    var avg2 = (sum / array2.length);
    if (array1 > array2){
        return true;
    }
    else {
        return false;
    }
}
console.log(compareAverages(nameLengths, ages));

//12. write a function called willBuyDrink that takes a boolean isHotOutside and a number moneyInPocket and returns true if it is hot outside and if moneyInPocket is greater than 10.50
function willBuyDrink (isHotOutside, moneyInPocket) {
    if ((isHotOutside) && (moneyInPocket > 10.50))
    return true;
    else{
        return false;
    }
}
console.log(willBuyDrink(true, 11));

//13. create a function of your own that solves a problem
// in comments, write what the function does and why you created it
function willBuyTruck (raise, moneyInBank) {
    if ((raise) && (moneyInBank > 5000))
    return true;
    else{
        return false;
    }
}
console.log(willBuyTruck(true, 7000));


