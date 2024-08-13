// 10-update_uniq_items.js

// Exporting the updateUniqueItems function
export default function updateUniqueItems(map) {
    // Check if the argument is not a map
    if (!(map instanceof Map)) {
        throw new Error('Cannot process');
    }

    // Iterate through the map entries
    for (const [key, value] of map) {
        // Update quantity to 100 if the current quantity is 1
        if (value === 1) {
            map.set(key, 100);
        }
    }

    // Return the updated map
    return map;
}
