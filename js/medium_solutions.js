// Write a function redundant that takes in a string str and returns a function that returns str.

const redundant = (str) => {
    return () => {
        return this.getAttribute(str);
    }
}

console.log("Should return testing");
console.log(redundant("testing"));