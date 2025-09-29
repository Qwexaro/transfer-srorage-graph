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

        const startZone = this.findZone(startId);
        if (!startZone) return order;

        visited.add(startZone.id);
        queue.push(startZone);

        while (queue.length > 0) {
            const currentZone = queue.shift();
            order.push(currentZone);

            currentZone.adj.forEach(adjId => {
                if (!visited.has(adjId)) {
                    visited.add(adjId);
                    const adjZone = this.findZone(adjId);
                    if (adjZone) queue.push(adjZone);
                }
            });
        }

        return order;
    }
}