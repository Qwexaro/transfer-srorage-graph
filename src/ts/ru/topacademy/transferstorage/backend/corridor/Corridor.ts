export class Corridor {
    from: number; 
    to: number;
    length: number;
    type: string;
    
    constructor(from: number, to: number, length: number, type: string) {
        this.from = from;
        this.to = to;
        this.length = length;
        this.type = type;
    }
}