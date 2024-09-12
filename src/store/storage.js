export function loadState(key) {
    try {
        var jsonState = localStorage.getItem(key);
        if (!jsonState) {
            return undefined;
        }
        return JSON.parse(jsonState);
    }
    catch (e) {
        console.error(e);
        return undefined;
    }
}
export function saveState(state, key) {
    var stringState = JSON.stringify(state);
    localStorage.setItem(key, stringState);
}
