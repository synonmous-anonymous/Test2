

function counting() {
    var x = 1;
    while (x <= 100)
    {
        if(x % 4 == 0 && x % 10 == 0){
            console.log("fourteen");
        }
        else if (x % 10 == 0){
            console.log("ten");
        }
        else if (x % 4 == 0){
            console.log("four");
        }
        else{
            console.log(x);
        }
        x = x + 1;
    }
}

function giveayear() {
    var year = prompt("Give me a year and I will give you a Century");
    var Century = year/100 + 1;
    console.log (Century);
    alert("that year " + year + " is in the " + Math.floor (Century) + " Century");
}

function triangle() {
    var x = prompt("Enter an angle belonging to a triangle(Just the number)");
    var y = prompt("Enter the other angle of that same triangle(Just the number)");
    var z = 180 - (parseInt(x) + parseInt(y));
    alert( z + " degree is the 3rd angle of the triangle");
}

function test() {
    alert("Hi");
    console.log("Hi");
}

