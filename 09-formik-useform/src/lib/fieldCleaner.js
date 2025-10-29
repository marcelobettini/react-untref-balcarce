export default function fieldCleaner(valuesObject) {
    const keys = Object.keys(valuesObject);
    const values = Object.values(valuesObject);
    const len = keys.length;
    for (let i = 0; i < len; i++) {
        if (typeof values[i] === 'string') {
            valuesObject[keys[i]] = values[i].trim().replace(/\s+/g, ' ');
        }
    }
}