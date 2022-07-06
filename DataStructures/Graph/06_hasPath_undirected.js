/*
  Write a function, undirectedPath, that takes an array of edges for an undirected graph & 2 nodes (nodeA & nodeB).
  The function should return a boolean, indicating whether a path exists between nodeA and nodeB.
*/ 

let undirectedPath = (edges, nodeA, nodeB) => {
  let graph = buildGraph(edges);
  //console.log(graph);

  return hasPath(graph, nodeA, nodeB, new Set());
}

// Set was added to keep track of visited nodes; required to prevent infinite loop
let hasPath = (graph, src, dest, visited) => {
  if (src === dest) {
    return true;
  }

  if (visited.has(src)) {
    return false;
  }

  visited.add(src);

  for (let neighbour of graph[src]) {
    if (hasPath(graph, neighbour, dest, visited) === true) {
      return true;
    }
  }

  return false;
}

// helper to convert edge list to adjacency list
let buildGraph = (edges) => {
  let graph = {};

  for (let edge of edges) {
    let [a,b] = edge;

    if (!(a in graph)) {
      graph[a] = [];
    }
    if (!(b in graph)) {
      graph[b] = [];
    }

    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
}

let edges = [
  ['i','j'],
  ['k','i'],
  ['m','k'],
  ['k','l'],
  ['o','n']
]

let pathExists = undirectedPath(edges, 'j', 'm');
console.log(pathExists);