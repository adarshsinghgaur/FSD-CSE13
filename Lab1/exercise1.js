const towords = (digit) => {
    switch (digit) {
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7:
            return "seven";
        case 8:
            return "eight";
        case 9:
            return "nine";
        case 0:
            return "zero";
        default:
            return "";
    }
};
const towords2 = (digit) => {
    const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    return words[digit];
};

/* console.log(towords(5));
console.log(towords(3));
console.log(towords(7));
console.log(towords(10)); */

const rollNum ="2503201000061";
const digits = String(rollNum).split("");
console.log(digits);
let inWords = "";
digits.forEach((d) => {
    inWords += " " +  towords(Number(d)) ;
});
console.log(inWords);
