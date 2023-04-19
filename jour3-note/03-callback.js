// pour faire en sorte que le code js s'exécute dans l'ordre que je veux 
// changer la manière de faire 
let clients ;

function getClient(callback){ // paramètre qui va être une fonction 
    fetch("https://jsonplaceholder.typicode.com/users/1") 
        .then(reponse => reponse.json())
        .then(data => {
            clients = data
            console.log("fin fetch")
            callback()  // exécute mon paramètre 
        })
}


getClient(() => {
    console.log("recupérer les clients" ,clients);
})


// const a = () => { } // PHP => OUI call_user_func // call_user_func_array
                       // Python 