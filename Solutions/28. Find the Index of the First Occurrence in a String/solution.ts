function strStr(haystack: string, needle: string): number {

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let match: boolean = true;

        for (let j = 0; j  < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                match = false;
                break;
            }
        }

        if (match) {
            return i;
        }
    }

    return -1;
};

