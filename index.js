function diceroll(min, max) {
    return randint(1, 6);
}

function randint(min, max) {
    let range = max - min;
    let rand = min + Math.random() * range;
    return Math.round(rand);
}

