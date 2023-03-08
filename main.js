let array = [1, 2, 3, 4, 5, 6];

function removeElement(array, item) {
    let rem = array.indexOf(item);
    if (rem > -1) {
        array.splice(rem, 1);
    }
    return array
}

console.log(`[${removeElement(array, 3).join(", ")}]`);
