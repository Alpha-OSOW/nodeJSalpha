const {connect, Schema, model} = require("mongoose");
const URI = "mongodb+srv://doranco:WR3SpKMu9rdPldQ8@cluster0.hkcochd.mongodb.net/demo?retryWrites=true&w=majority";
connect(URI , {useNewUrlParser : true})
    .then(() => console.log("connexion à MongoDB Réussie"))
    .catch((ex) => console.log(ex));



const etudiantSchema = new Schema({
    nom : String ,
    age : Number ,
    dt_creation : Date
})

const Etudiant = model ("etudiants" , etudiantSchema)

function insert(){
    const cdaEtudiant ={
        nom : "Aladin",
        age : 28,
        dt_creation : new Date()
    }
    
    const insert = new Etudiant (cdaEtudiant)
    insert.save();
}
insert()

async function supprimer(id) {
    await  Etudiant.findByIdAndRemove(id) // 
    }
supprimer('643fb4ce84238f495b2b5089');

async function read (){
    const resultat = await Etudiant.find()
    console.log(resultat)
}
read()


async function update(id){
     await Etudiant.findByIdAndUpdate(id,{
        $set : {
            nom : "Clara",
            age : 23,
        }
     })
}
update('643fc171b6c9c048fc729679')

