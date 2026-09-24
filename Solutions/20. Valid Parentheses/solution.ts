function isValid(s: string): boolean {

    type Par = Record<string, string>;
    const openPar: Par = {"(": ")", "[": "]", "{": "}"};

    let stack: string[] = [];

    for (const char of s) {
        if (Object.keys(openPar).includes(char)) {
            stack.push(char);
        } else {
            let top = stack[stack.length - 1];
            if (openPar[top] !== char) {
                return false;
            }

            stack.pop();
        }
    }

    if (stack.length === 0) {
        return true;
    }

    return false;
};