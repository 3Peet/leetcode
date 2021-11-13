// buttomUP DP

var minimumTotal = function(triangle) {
    // triangle.forEach(element => {
    //     console.log(element)
    // });
    for(let i=triangle.length-2; i>=0;i--){
        for(let j=0; j<triangle[i].length; j++){

            console.log(i + '-' +j)
           triangle[i][j] += 
           (triangle[i+1][j] > triangle[i+1][j+1]) 
           ? triangle[i+1][j+1]
           : triangle[i+1][j];
        //    triangle.forEach(element => {
        //        console.log(element)
        //    });
        }
    }
    return triangle[0][0]
};

minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]])