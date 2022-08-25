function balancedExpression(string) {
    let stack = [];
    let leftBrackets = ['(', '<', '[', '{'];
    let rightBrackets = [')', '>', ']', '}'];


    for (let ch of string) {
        if (isLeftBracket(ch))
            stack.push(ch)

        if (isRightBracket(ch)) {
            if (stack.length === 0) return false;

            let top = stack.splice(0, 1)[0];
            if (!bracketsMatch(top, ch)) return false;
        }
    }

    return stack.length === 0;

    function bracketsMatch(left, right) {
        return leftBrackets.indexOf(left) === rightBrackets.indexOf(right);
    }

    function isRightBracket(ch) {
        return rightBrackets.includes(ch);
    }

    function isLeftBracket(ch) {
        return leftBrackets.includes(ch);
    }
}

console.log(balancedExpression('[[1]]'));
