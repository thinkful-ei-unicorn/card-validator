// Example: 79927398713
export default function isValid(number) {
    const check = number
        .toString()
        .split('')
        .map(digit => parseInt(digit, 10))
        .reverse()
        .map((digit, index) => {
            if (index % 2 === 0) {
                return digit;
            }
            const doubled = digit * 2;
            return doubled <= 9 ? doubled : doubled - 9;
        })
        .reduce((sum, value) => sum + value, 0);
    return check % 10 === 0;
}