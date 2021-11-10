var orangesRotting = function (grid) {

    let queue = [];
    let compass = [[-1,0],[0,-1],[1,0],[0,1]];
    let visited = [];
    let ans = [];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 2) {
                queue.push([[i, j], 0]);

            }
        }
    }

    
    while (queue.length) {
        let [[row, col], time] = queue.shift();

        if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) continue;

        if(grid[row][col] === 0 ) {
            continue;
        }

        if(visited.includes(Number(String(row) + String(col)))){
            continue;
        }

        visited.push(Number(String(row) + String(col)));

        if (grid[row][col] === 1) {
            grid[row][col] = 2;
        }

        for(let dir of compass ){
            // console.log([row+dir[0], col+dir[1],time+1]);
            queue.push([[row+dir[0], col+dir[1]],time+1]);
        }
        ans = Math.max(ans,time);


    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                return -1

            }
        }
    }
    return ans

};

console.log(orangesRotting([[0,2]]))
