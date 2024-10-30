function seqFibonacci(n) {
    let fib = [0, 1];

    
    while (true) {
        let somaFib = fib[fib.length - 1] + fib[fib.length - 2]; 
        if (somaFib > n) break; 
        fib.push(somaFib); 
    }

    return fib; 
}


function listSeqFibonacci(num) {
    const fib = seqFibonacci(num); 
    for (let i = 0; i < fib.length; i++) { 
        if (fib[i] === num) {
            return true; 
        }
    }
    return false;
}


const NumEscolhido = 55;


if (listSeqFibonacci(NumEscolhido)) {
    console.log(`${NumEscolhido} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${NumEscolhido} não pertence à sequência de Fibonacci.`);
}