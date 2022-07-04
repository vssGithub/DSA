// breadth first - iterative

let breadthFirstSearch_it = (graph, source) => {
  let queue = [source];
  
  while (queue.length > 0) {
    console.log(`The queue has ${queue}`);
    
    let current = queue.shift();
    console.log(`Removed ${current}`);
    console.log(`Entry for '${current}' in adjacency list is ${graph[current].length == 0 ? 'blank' : graph[current]}`);
    
    for (let neighbour of graph[current]) {
      queue.push(neighbour);
      console.log(`Push ${neighbour} into queue`);
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

breadthFirstSearch_it(graph, 'a');