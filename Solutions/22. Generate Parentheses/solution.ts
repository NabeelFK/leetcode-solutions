function generateParenthesis(n: number): string[] {
    const par1: string = '(';
    const par2: string = ')';
    
    let result: string[] = [];

    buildPar(n, "", 0, 0, result);

    return result;
};

function buildPar(n: number, par: string, leftUsed: number, rightUsed: number, result: string[]): void {

    // If finished
    if (leftUsed === n && rightUsed === n) {
        result.push(par);
        return;
    }

    // Can another "(" be added?
    if (leftUsed < n) {
        buildPar(n, par + "(", leftUsed + 1, rightUsed, result);
    }

    // Can another ")" be added?
    if (rightUsed < leftUsed) {
        buildPar(n, par + ")", leftUsed, rightUsed + 1, result);
    }
}