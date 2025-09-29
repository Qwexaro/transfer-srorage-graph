export class WarehouseGraph {
    constructor() {
        this.zones = [];
        this.corridors = [];
    }

    addZone(zone) { this.zones.push(zone) }
    
    addCorridor(corridor) { this.corridors.push(corridor) }
    
    findZone(id) { return this.zones.find(zone => zone.id == id)}
    
    getConnectedZone(id) { 
        let currentEdges = []
        this.corridors.forEach(corridor => {
            if(corridor.from == id) {
                currentEdges.push(this.corridors.find(node => node.to == corridor.to))
            }
        })
        
        return currentEdges;
    }

    breadthFirstTraversal(startId) {
        const visited = new Set();
        const queue = [];
        const order = [];

        visited.add(startId);
        queue.push(startId);

        while(queue.length > 0) {
            const currentNode = queue.shift();
            order.push(currentNode.corridor);

            currentNode.adj.forEach(adj => {
                if(!visited.has(adj)) {
                    visited.add(adj);
                    queue.push(adj);
                }
            });
        }

        return order;
    }
}