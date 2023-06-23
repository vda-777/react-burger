export const isEmpty = (item) => {
    return !Object.keys(item || {}).length;
}