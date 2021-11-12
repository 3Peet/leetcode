var letterCasePermutation = function (s) {
    let result = [];

    const dfs = (i, s, temp) => {

        // base case 
        if (i === s.length) {
            return result.push(temp.join(''));
        }

        // dfs recursive case
        let char = s[i];

        // Found a number
        if (char.charCodeAt(0) < 64) {
            temp.push(char);
            dfs(i + 1, s, temp);
            temp.pop(); // <- Get back
        }

        // Found a character
        else if (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 123) {
            // UPPERCASE
            temp.push(char.toUpperCase());
            dfs(i + 1, s, temp);
            temp.pop();

            // LOWERCASE
            temp.push(char.toLowerCase());
            dfs(i + 1, s, temp);
            temp.pop();
        }
    }
    dfs(0, s, [])
    // console.log(result)
    return result;
    // ascii 65-96 UPPERCASE
    // ascii 97-122 LOWERCASE
};

letterCasePermutation("a1b2");