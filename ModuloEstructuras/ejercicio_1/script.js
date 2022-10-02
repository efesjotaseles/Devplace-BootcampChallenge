
function removerElementosE(list, elementoE){
    for(let i=0; i<list.length; i++){
        if(list[i] === elementoE){
            list.splice(i,1);
            i--;
        }
    }
}

let aux = [1,2,3,4,5,2,8];

console.log(aux);

removerElementosE(aux,2);
console.log(aux);