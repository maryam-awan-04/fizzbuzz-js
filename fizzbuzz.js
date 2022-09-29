

// Here, we create our main function.
function fizzbuzz() {
    
    for (let i = 1; i <= 200; i++) {

        let word = ['fizz', 'buzz', 'bang', 'bong', 'fezz']
        let output = ''

        // divisisble by 11
        if (i % 11 === 0) {output = word[3]}

        // divisible by 13
        else if (i % 13 === 0){
            if ((i % 3 === 0) && (i % 5 === 0)) {output = [word[4],word[0],word[1]].join('')}
            else if (i % 3 === 0) {output = [word[4],word[0]].join('')}
            else if (i % 5 === 0) {output = [word[4],word[1]].join('')}
            else if (i % 7 === 0) {output = [word[4],word[2]].join('')}
            else if (i % 11 === 0) {output = [word[4],word[3]].join('')}
            else {output = word[4]}
        }

        // divisible by 7
        else if (i % 7 === 0){
            // divisible by 3, 5 and 7
            if ((i % 3 === 0) && (i % 5 === 0)) {output = [word[0],word[1],word[2]].join('')}
            else if (i % 3 === 0) {output = [word[0],word[2]].join('')}
            else if (i % 5 === 0) {output = [word[1],word[2]].join('')}
            else {output = word[2]}
        }

        // divisible by 3 and by 5
        else if ((i % 3 === 0) && (i % 5 === 0)) {output = [word[0],word[1]].join('')}

        // divisible by 3
        else if (i % 3 === 0) {output = word[0]}

        // divisible by 5
        else if (i % 5 === 0) {output = word[1]}
        
        // prints word
        if (output === '') {console.log(i)}
        else {console.log(output)}

    }
    
}

// Now we run the main function...
fizzbuzz();
