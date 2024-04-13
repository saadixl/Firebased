export function setCache(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function getCache(key) {
    const cache = localStorage.getItem(key);
    return cache ? JSON.parse(cache) : null;
}

export function deleteAllCache() {
    localStorage.clear();
}