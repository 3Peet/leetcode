var reverseBits = function(n) {
    let lst = n.toString(2).split('').reverse();

    let i = 0;
    let j = 31;
    let output = 0;
    
    while (i < lst.length) {
        let product = 2 ** j;
        output += Number(lst[i]) * product;
        
        i++;
        j--;
    }
    console.log(output)
    return output;
};
reverseBits(00000010100101000001111010011100)