import { Edge } from "../edge/Edge.js";
import { Node } from "../node/Node.js";

export class Graph {
    constructor() {
        this.nodes = new Map();
    }

    addNode(value) {
        if(!this.nodes.has(value)) {
            this.nodes.set(value, new Node(value))
        }
    }

    addEdge(fromValue, toValue) {
        this.addNode(fromValue);
        this.addNode(toValue);

        const fromNode = this.nodes.get(fromValue);
        const toNode = this.nodes.get(toValue);
        const edge = new Edge(toNode);
        fromNode.addEdge(edge);
    }

    dfs(startValue) {
        const startNode = this.nodes.get(startValue);
        if(!startNode) return;
        const visited = new Set();
        
        this._dfsHelper(startNode, visited);
    }

    _dfsHelper(node, visited) {
        if(visited.has(node)) return;
        visited.add(node);

        console.log(node);

        for(const edge of node.edges) {
            this._dfsHelper(edge.toNode, visited);
        }
    }
}