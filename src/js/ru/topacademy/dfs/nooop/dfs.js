
export function dfs(graph, node, visited={}) {
    if(!visited[node]) {
        visited[node] = true;
        console.log(node);

        const neighbors = graph[node];
        if(neighbors) {
            neighbors.forEach(neighbor => {
                dfs(graph, neighbor, visited);
            });
        }
    }
}