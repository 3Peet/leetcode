var reverseWords = function(s) {
    s = (s.split(' '));
    for(let i = 0; i<s.length;i++){
        s[i] = reverseArr(s[i])
    }
    console.log(s.join(' '))
    return s
};

function reverseArr(arr){
    arr = arr.split('');
    let temp;
    for(let i=0;i<arr.length/2;i++){
        temp = arr[i];
        arr[i] = arr[arr.length - i -1];
        arr[arr.length - i - 1] = temp;
    }
    return arr.join('');
}

reverseWords("Let's take LeetCode contest")