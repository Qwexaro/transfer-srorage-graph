import { Graph } from "../OOP/graph/Graph.js";

const graph = new Graph();

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('D', 'A');

graph.dfs('A');