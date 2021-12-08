// // [1, 1, 1]    0,0  0,1  0,2
// // [1, 1, 0]    1,0  1,1  1,2
// // [1, 0, 1]    2,0  2,1  2,2

// function checkValues(i, j, value, image) {
//     if (image[i] !== undefined) {
//         if (image[i][j] !== undefined) {
//             if (image[i][j] === value) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// var floodFill = function (image, sr, sc, newColor) {
//     rootNode = image[sr][sc];
//     pos = [sr, sc];
//     image[sr][sc] = newColor;
//     let queue = [];
//     let visited = [];
//     queue.push(pos);
//     visited.push(Number(String(sr)+String(sc)));

//     while (queue.length > 0) {
//         let i = queue[0][0];
//         let j = queue[0][1];
//         console.log(visited)

//         if (checkValues(i + 1, j, rootNode, image)) {
//             if(!visited.includes(Number(String(i+1)+String(j)))){
//                 queue.push([i + 1, j]);
//                 visited.push(Number(String(i+1)+String(j)));
//                 image[i + 1][j] = newColor;
//             }

//         }
//         if (checkValues(i, j + 1, rootNode, image)) {
//             if(!visited.includes(Number(String(i)+String(j+1)))){
//                 queue.push([i, j+1]);
//                 visited.push(Number(String(i)+String(j+1)));
//                 image[i][j + 1] = newColor;
//             }

//         }
//         if (checkValues(i - 1, j, rootNode, image)) {
//             if(!visited.includes(Number(String(i-1)+String(j)))){

//                 queue.push([i - 1, j]);
//                 visited.push(Number(String(i-1)+String(j)));
//                 image[i - 1][j] = newColor;
//             }
//         }
//         if (checkValues(i, j - 1, rootNode, image)) {
//             if(!visited.includes(Number(String(i)+String(j-1)))){

//                 queue.push([i, j-1]);
//                 visited.push(Number(String(i)+String(j-1)));
//                 image[i][j - 1] = newColor;
//             }

//         }
//         queue.shift();

//     }

//     // image.forEach(element => {

//     //     console.log(element)
//     // });
//     return image;


// };

// floodFill([[0,0,0],[0,0,0]],1,1,2)

// // 0  0  0
// // 0  1x 1x

// // 00 01 02
// // 10 11 12

var floodFill = function (image, sr, sc, newColor) {
    let currColor = image[sr][sc];

    // base case
    if (currColor === newColor) return image;

    // BFS
    function BFS(row, col) {
        if (row >= image.length || row < 0 || col >= image[0].length || col < 0 || image[row][col] !== currColor) return;
        image[row][col] = newColor;
        BFS(row + 1, col);
        BFS(row - 1, col);
        BFS(row, col + 1);
        BFS(row, col - 1);
        return image;
    }
    return BFS(sr, sc);
}