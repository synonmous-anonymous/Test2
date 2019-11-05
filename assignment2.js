


function o() {
    var x = 0;
    while (x <= 99){
        x = x + 1;
        if(x % 4 == 0 && x % 10 == 0){
            console.log("fourteen");
        }else if (x % 10 == 0){
            console.log("ten");
        }else if (x % 4 == 0){
            console.log("four");
        }else{
            console.log(x);
        }
    }
}

function giveayear() {
    var year = prompt("Give me a year and I weill give you a Century");
    var Century = year/100 + 1;
    console.log (Century);
    prompt("that year is the" + Math.floor (Century) + "Century");
}

function triangle() {
    var x = prompt("Enter an angle belonging to a triangle(Just the number)");
    var y = prompt("Enter the other angle of that same triangle(Just the number)");
    var z = 180 - (x + y);
    alert( z + " degree is the 3rd angle of the triangle");
}

function test3() {
    alert("A");
    console.log("Hi");
}

