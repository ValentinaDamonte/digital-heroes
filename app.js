let express = require("express");
let app = express();

app.listen(3000,()=> console.log("Esto fue exitoso")); 

app.get("/", function (req, res) {
  res.send(" ");
}); 

app.get("/Home", function(req, res){
  res.send("Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Héroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!")
})

let heroes = require ("./heroes.json") 
app.get("/heroes", function(req, res){
  res.send(heroes)
})

app.get("/Creditos", function(req, res){
  res.send("Valentina Damonte, Figure out who you are and do it on purpose ;)")
})
app.get('*', (req, res) => {
  res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});
