let A = 80000
let B = 200000
let ano = 1


while(A < B){
    A += A*0.03
    B += B*0.015
    console.log("Pouplação de A no ano " + ano + ": " + A)
    console.log("Pouplação de B no ano " + ano + ": " + B)
    ano++
    
    
}