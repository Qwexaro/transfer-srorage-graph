import { Corridor } from "../backend/corridor/Corridor.js";
import { WarehouseGraph } from "../backend/warehouse-graph/WarehouseGraph.js";
import { WarehouseZone } from "../backend/warehouse-zone/WarehouseZone.js";

const storage = new WarehouseGraph();

storage.addZone(new WarehouseZone(1, "zone1", 25));
storage.addZone(new WarehouseZone(2, "zone2", 45));
storage.addZone(new WarehouseZone(3, "zone3", 75));
storage.addZone(new WarehouseZone(4, "zone4", 15));
storage.addZone(new WarehouseZone(5, "zone5", 45));
storage.addZone(new WarehouseZone(6, "zone6", 65));
storage.addZone(new WarehouseZone(7, "zone7", 76));

console.log(storage.zones);

storage.addCorridor(new Corridor(1, 3, 123, "stairs"));
storage.addCorridor(new Corridor(3, 2, 114, "lift"));
storage.addCorridor(new Corridor(2, 4, 34, "left povorot"));
storage.addCorridor(new Corridor(4, 6, 34, "right povorot"));
storage.addCorridor(new Corridor(6, 5, 141, "pryyamoi"));
storage.addCorridor(new Corridor(5, 7, 214, "kosoi"));
storage.addCorridor(new Corridor(7, 1, 314, "speed"));

console.log(storage.corridors);

console.log(storage.findZone(5));

console.log(storage.getConnectedZone(5));

console.log(storage.breadthFirstTraversal(1));