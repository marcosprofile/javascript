for(let i = 5; i < 20; i = i + 1) {
    if(i % 10 == 0) {
        console.log("Saiu do Loop")
        break;
    }
    console.log(`O valor de i é: ${i}`)
}