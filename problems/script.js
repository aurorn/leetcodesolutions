
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
        toBe: function(expected) {
            if (val === expected) {
                return true;
            }
            throw new Error("Not Equal");
        },
        notToBe: function(expected) {
            if (val !== expected) {
                return true;
            }
            throw new Error("Equal");
        }
    };
}

// Problem 4 - Counter Function II

const createCounter2 = function(init) {
    let currentValue = init;
    return {
        increment: function() {
            return ++currentValue;
        },
        decrement: function() {
            return --currentValue;
        },
        reset: function() {
            currentValue = init;
            return currentValue;
        }
    }
}

// Problem 5 - Apply Transformation over Each Element in Array

const map = function(arr, fn) {
    const transformedArr = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        transformedArr[i] = fn(arr[i], i);
    }
    return transformedArr;
};


// Problem 6 - Filter Elements from Array

const filter = function(arr, fn) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}