import { Corridor } from "../corridor/Corridor.ts";
import { WarehouseZone } from "../warehouse-zone/warehouse-zone.ts";

export class WarehouseGraph {
    zones: WarehouseZone[];
    corridors: Corridor[];

    constructor() {
        this.zones = [];
        this.corridors = [];
    }

    addZone(zone: WarehouseZone): void { this.zones.push(zone) }
    
    addCorridor(corridor: Corridor) { this.corridors.push(corridor) }
    
    findZone(id: number) { return this.zones.find(zone => zone.id == id)}
    
    getConnectedZone(id: number): Corridor[] { 
        let currentEdges: Corridor[] = []
        this.corridors.forEach(corridor => {
            if(corridor.from == id) {
                currentEdges.push(corridor)
            }
        })
        
        return currentEdges;
    }

    breadthFirstTraversal(startId: number): WarehouseZone[] {
        const visited = new Set();
        const queue = [];
        const order: WarehouseZone[] = [];

        const startZone = this.findZone(startId);
        if (!startZone) return order;

        visited.add(startZone.id);
        queue.push(startZone);

        while (queue.length > 0) {
            const currentZone = queue.shift();
            
            if(!currentZone) break;
            
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