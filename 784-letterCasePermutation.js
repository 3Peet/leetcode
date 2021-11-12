var letterCasePermutation = function (s) {
    let result = [];

    const dfs = (i, s, temp) => {

        // base case 
        if (i === s.length) {
            {
                result.push(temp.join(''));
                console.log('BASE CASE PUSH TO RESULT : ' + temp);
                return;
            } 
                
        }

        // dfs recursive case
        let char = s[i];

        // Found a number
        if (char.charCodeAt(0) < 64) {
            temp.push(char);
            console.log('Number case    ' + temp)
            dfs(i + 1, s, temp);
            console.log("🎉 @NubmerCase");
            temp.pop(); // <- Get back
        }

        // Found a character
        else if (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 123) {
            // UPPERCASE
            temp.push(char.toUpperCase());
            console.log('UPPERCASE      ' + temp)
            dfs(i + 1, s, temp);
            temp.pop();
            console.log("🎉 @UPPERCASE");

            // LOWERCASE
            temp.push(char.toLowerCase());
            console.log('LOWERCASE      ' + temp)
            dfs(i + 1, s, temp);
            console.log("🎉 @LOWERCASE");
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