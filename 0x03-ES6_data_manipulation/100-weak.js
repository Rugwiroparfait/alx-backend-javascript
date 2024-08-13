// 11. Weak link data structure 

// Exporting a constant instance of WeakMap
export const weakMap = new WeakMap();

// Exporting the queryAPI function
export function queryAPI(endpoint) {
    if (!weakMap.has(endpoint)) {
        // If the endpoint is not already in the WeakMap, set it with an initial value of 1
        weakMap.set(endpoint, 1);
    } else {
        // If the endpoint is already in the WeakMap, increment its count
        const count = weakMap.get(endpoint);
        if (count >= 5) {
            // If the count is 5 or more, throw an error
            throw new Error('Endpoint load is high');
        }
        weakMap.set(endpoint, count + 1);
    }
}
