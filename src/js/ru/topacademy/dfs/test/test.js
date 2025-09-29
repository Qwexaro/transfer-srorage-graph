import { dfs } from "../nooop/dfs.js"


const graph = {
    'A': ['B', 'C'],
    'B': ['D', 'C'],
    'C': ['D', 'B'],
    'C': ['D', 'B'],
    'D': ['A', 'B'],
}

dfs(graph, 'A');