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


var find_way = function(x1,y1,x2,y2){
    let stack = []
    stack.push([x1,y1])
    while(stack.length !== 0){
        let current_node = stack[stack.length-1]
        if(current_node[0]==x2&&current_node[1]==y2){
            for(let val of stack){
                console.log(val)
            }
            return true
        }
        let found = false
        for(let dir of dirs){
            let next_node = dir(current_node[0],current_node[1])
                if(maze[next_node[0]][next_node[1]]==0){
                    stack.push(next_node)
                    maze[next_node[0]][next_node[1]]=2
                    found = true
                    break
                }
        }
        if(!found){
            stack.pop()

        }
        

    }
    console.log('没有路')
    return false

}
console.log(find_way(1,0,7,8))