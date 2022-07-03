// depth first - iterative

let depthFirstSearch_it = (graph, source) => {
  let stack = [source];
  
  while (stack.length > 0) {
    console.log(stack);
    
    let current = stack.pop();
    console.log(current);
    
    for (let neighbour of graph[current]) {
      stack.push(neighbour);
    }
  }
  
}

let graph = {
  a: ['b','c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
}

depthFirstSearch_it(graph, 'a');