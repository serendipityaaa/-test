let maze = [  
    [1, 1, 1, 1, 1, 1, 1, 1, 1],  
    [0, 0, 1, 0, 0, 0, 1, 1, 1],  
    [1, 0, 1, 1, 1, 0, 1, 1, 1],  
    [1, 0, 0, 1, 0, 0, 1, 1, 1],  
    [1, 1, 0, 1, 1, 0, 0, 0, 1],  
    [1, 0, 0, 0, 0, 0, 1, 0, 1],  
    [1, 0, 1, 1, 1, 0, 0, 0, 1],  
    [1, 1, 0, 0, 0, 0, 1, 0, 0],  
    [1, 1, 1, 1, 1, 1, 1, 1, 1]  
];
let dirs = [  
    function(x, y) { return [x + 1, y]; },  
    function(x, y) { return [x - 1, y]; },  
    function(x, y) { return [x, y - 1]; },  
    function(x, y) { return [x, y + 1]; }  
];

var real_path = function(path){
    let cur_node = path[path.length-1]
    let realPath = []
    while(cur_node[2] !==-1){
        realPath.push([cur_node[0],cur_node[1]])
        cur_node = path[cur_node[2]]
    }
    realPath.push([cur_node[0],cur_node[1]])
    console.log(realPath.reverse())

}

var maze_search = function(x1,y1,x2,y2){
    let queue = []
    queue.push([x1,y1,-1])
    let path = []
    
    while(queue.length>0){
        let cur_node = queue.shift()
        path.push(cur_node)
        if(cur_node[0]==x2&&cur_node[1]==y2){
            real_path(path)
            return true
        }
        for(let dir of dirs){
            let next_node = dir(cur_node[0],cur_node[1])
            if(maze[next_node[0]][next_node[1]]==0){
                queue.push([next_node[0],next_node[1],path.length-1])
                maze[next_node[0]][next_node[1]]=2
            }
        }
    }
    console.log('没有找到路')
    return false

}

console.log(maze_search(1,0,7,8))

// let maze = [  
//     [1, 1, 1, 1, 1, 1, 1, 1, 1],  
//     [0, 0, 1, 0, 0, 0, 1, 1, 1],  
//     [1, 0, 1, 1, 1, 0, 1, 1, 1],  
//     [1, 0, 0, 1, 0, 0, 1, 1, 1],  
//     [1, 1, 0, 1, 1, 0, 0, 0, 1],  
//     [1, 0, 0, 0, 0, 0, 1, 0, 1],  
//     [1, 0, 1, 1, 1, 0, 0, 0, 1],  
//     [1, 1, 0, 0, 0, 0, 1, 0, 0],  
//     [1, 1, 1, 1, 1, 1, 1, 1, 1]  
// ];
// let dirs = [  
//     function(x, y) { return [x + 1, y]; },  
//     function(x, y) { return [x - 1, y]; },  
//     function(x, y) { return [x, y - 1]; },  
//     function(x, y) { return [x, y + 1]; }  
// ];

// var real_path = function(path){
//     let cur_node = path[path.length-1]
//     let realPath = []
//     while(cur_node[2] !== -1){
//         realPath.push([cur_node[0], cur_node[1]])
//         cur_node = path[cur_node[2]]
//     }
//     realPath.push([cur_node[0], cur_node[1]])
//     console.log(realPath.reverse())
// }

// var isInsideMaze = function(x, y) {
//     return x >= 0 && x < maze.length && y >= 0 && y < maze[0].length;
// }

// var maze_search = function(x1, y1, x2, y2){
//     let queue = []
//     queue.push([x1, y1, -1])
//     let path = []
    
//     while(queue.length > 0){
//         let cur_node = queue.shift()
//         path.push(cur_node)
//         if(cur_node[0] == x2 && cur_node[1] == y2){
//             real_path(path)
//             return true
//         }
//         for(let dir of dirs){
//             let next_node = dir(cur_node[0], cur_node[1])
//             if(maze[next_node[0]][next_node[1]] == 0){
//                 queue.push([next_node[0], next_node[1], path.length - 1])
//                 maze[next_node[0]][next_node[1]] = 2
//             }
//         }
//     }
//     console.log('没有找到路')
//     return false
// }

// console.log(maze_search(1, 0, 3, 2))
