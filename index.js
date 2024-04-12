// arrow function
// functions are block of code gets executed when  called
//two type of function
//user defined function
//libary function



// User defined functions
function sayHello()
{
    console.log("Hello");
}
sayHello();
sayHello();


function sayHello(name)
{
    console.log("Hello",name);
}
sayHello("Krish");
sayHello("Satish");

// the multiple value pass as argument
function add(a , b)
{
    //console.log("sum = ",a+b)

    return a+b;
}

var sum = add(4,5);
console.log(sum);



/*

    named functions  (normal function whi)

    anonymus functions (nameless function)(no name for this function , entire function can assigned to variable)

    arrow functions 

    IIFE 

*/