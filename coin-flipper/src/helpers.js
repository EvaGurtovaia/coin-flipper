function choice(arr) {
    let ranIndx = Math.floor(Math.random() * arr.length);
    return arr[ranIndx];
}

export { choice };
