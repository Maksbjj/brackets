module.exports = function check(str, bracketsConfig) {
    let stack = [];

    let openBrackets = bracketsConfig.map(bracket => bracket[0]);
    let closeBrackets = bracketsConfig.map(bracket => bracket[1]);


    for (let i = 0; i < str.length; i++) {
        let element = str.charAt(i)
        if (openBrackets.includes(element)) {
            stack.push(element)
        } else if (closeBrackets.includes(element)) {
            let index = closeBrackets.indexOf(element);

            if (stack[stack.length - 1] === openBrackets[index]) {
                stack.pop()
            }
        }
    }

    return stack.length === 0;
}
