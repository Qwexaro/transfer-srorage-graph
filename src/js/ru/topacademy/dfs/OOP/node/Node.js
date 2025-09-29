export class Node {
    constructor(value) {
        this.value = value;
        this.edges = []
    }

    addEdge(edge) {
        this.edges.push(edge);
    }
}