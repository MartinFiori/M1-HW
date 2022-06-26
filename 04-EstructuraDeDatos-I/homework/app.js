function BinarioADecimal(num) {
    if (num.length == 0) return num[0];
    // return num[num.length - 1]
    return BinarioADecimal(num + (num[num.length - 1] * (2 ** num.length - 1 - 1)))
}


// BinarioADecimal('10'); // 2
// BinarioADecimal('111'); // 7









var twoSum = function (nums, target) {
    const obj = {};
    for (let [index, num] of nums.entries()) {
        if (obj[num] !== undefined) return [obj[num], index]
        obj[target - num] = index
    }
    return obj
};


// console.log(twoSum([2, 7, 11, 15], 9))
// console.log(twoSum([3, 3], 6))



function reemplazarCadena(cadenaVieja, cadenaNueva, cadenaCompleta) {
    // Reemplaza cadenaVieja por cadenaNueva en cadenaCompleta
    const splittedSentence = cadenaCompleta.split(' ').map(el => {
        if (el === cadenaVieja) return cadenaNueva
        return el
    })

    return splittedSentence.join(' ')
}

console.log(reemplazarCadena("Mundo", "Web", "Bravo Nuevo Mundo"))