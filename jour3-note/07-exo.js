// créer le fichier 07-exo.js 

//créer 3 setTimeout
// 1er exécuté au bout de 1 seconde => console.log("ranger sa chambre")
// 1er exécuté au bout de 3 seconde => console.log("faire le repassage")
// 1er exécuté au bout de 1 seconde => console.log("prendre un café")
// ils doivent être emballé dans des Promises 

// dans la console 
// "ranger sa chambre" au bout 1 s
// au bout de 4 s "faire le repassage"
// au bout de 5 s "prendre un café")
console.time()
let tache ="";

function action1(){
    return new Promise (function (resolve , reject ){
        setTimeout(() => {
            console.log("ranger sa chambre : " + new Date())
            resolve()
                }, 1000);
    })
}
function action2(){
    return new Promise (function (resolve , reject ){
        setTimeout(() => {
            console.log("faire le repassage : " + new Date())
            resolve()
                }, 3000);
    })
}
function action3(){
    return new Promise (function (resolve , reject ){
        setTimeout(() => {
            console.log("prendre un café : " + new Date())
            resolve()
                }, 1000);
    })
}


async function getAction (){
    await action1()
    await action2()
    await action3()
}
getAction();

