let num = [2,3,4,5,6,12,14,13,10,20,40,33,22,21,100]
let ordem = []
    for(i = 0; i < num.length; i++){
        if(num[i]%2 == 0){
            ordem.unshift(num[i])
        }else{
            ordem.push(num[i])
        }
    }
    console.log(ordem)