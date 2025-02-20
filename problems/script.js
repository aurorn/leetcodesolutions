
// Problem 1 - Hello World Function
const helloworld = function() {
    return function() {
        return 'Hello World!';
    }
};

// Problem 2 - Counter Function
const createCounter = function(n) {
    let counter = n;
    return function() {
        return counter++;
    }
}

// Problem 3 - Expect Function 
const expect = function(val) {
    return {
        toBe(val) {
            if (val === val) {
                return true;
            } else (val !== val)
                return "Not Equal";
            
        },
        notToBe(val) {
            if (val !== val) {
                return true;
            }
        },

    }
}
