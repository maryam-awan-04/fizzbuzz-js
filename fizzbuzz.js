

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    var i;

    for (i = 3; i <= 100; i++) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            console.log("fizzbuzz")
        }
        else if (i % 3 == 0) {
            console.log("fizz");
        }
        else if (i % 5 == 0) {
            console.log("buzz")
        }
        else {
            console.log(i);
        }
    }

    
}

// Now we run the main function...
fizzbuzz();
