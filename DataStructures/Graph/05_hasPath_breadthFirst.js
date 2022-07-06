/*
  Write a function, hasPath, that takes an object representing an acyclic directed graph and two nodes (source, dest).
  The function should return a boolean, indicating whether a path exists between source and destination.
*/ 

let hasPath = (graph, source, dest) => {
  let queue = [source];

  while (queue.length > 0) {
    let current = queue.shift();

    if (current === dest) {
      return true;
    }

    for (let neighbour of graph[current]) {
      queue.push(neighbour);
    }
  }

  return false;
}

let graph = {
  f: ['g','i'],
  g: ['h'],
  h: [],
  i: ['g','k'],
  j: ['i'],
  k: []
}

let path = hasPath(graph, 'f', 'k');
console.log(path);