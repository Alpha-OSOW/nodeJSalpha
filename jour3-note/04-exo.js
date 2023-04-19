// créer le fichier 04-exo.js (dans jour3-note)
// créer une variable a = 0
// setTimeout( ) => exécuté au bout de 1 seconde augmenter le valeur de a + 1
// setTimeout( ) => exécuté au bout de 2 seconde augmenter le valeur de a + 5
// afficher le console.log() qui a pour valeur 6 => Attendre les 3 secondes (cumulé des 2 setTimeout)=> affiché 6


let a = 0 ;

function traitement1(cb){
    setTimeout(function(){
        a++ ;
        console.log("fin traitement1")
        cb()
    } , 1000)
}

function traitement2(cb){
    setTimeout(function(){
        a += 5 ;
        console.log("fin traitement2")
        cb()
    } , 2000)
}

traitement1(() => {
    traitement2(() => {
        console.log(a)
    })
})



