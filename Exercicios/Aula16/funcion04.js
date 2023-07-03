function fatorial(n){
    fat = 1
    for(let c = n; c > 1; c--){
        fat *= c // fat passa a ter o resultado da multiplicação 'fat por c', se repete até c ter o valor 1
    }
    return fat
}

console.log(fatorial(5))