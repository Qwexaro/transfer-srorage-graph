export class WarehouseZone {
    id: number;
    name: string;
    capacity: number;
    adj: []
    constructor(id: number, name: string, capacity: number) {
        this.id = id;
        this.name = name;
        this.capacity = capacity;
        this.adj = [];
    }
}