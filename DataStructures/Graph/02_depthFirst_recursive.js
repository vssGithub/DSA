// depth first - recursive

let depthFirstSearch_re = (graph, source) => {
  console.log(source);
  
  for (let neighbour of graph[source]) {
    depthFirstSearch_re(graph, neighbour);
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

depthFirstSearch_re(graph, 'a');