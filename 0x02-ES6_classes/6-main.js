// 6-main.js
import SkyHighBuilding from './6-sky_high.js';

const building = new SkyHighBuilding(140, 60);
console.log(building.sqft); // Should output 140
console.log(building.floors); // Should output 60
console.log(building.evacuationWarningMessage()); // Should output "Evacuate slowly the 60 floors"
