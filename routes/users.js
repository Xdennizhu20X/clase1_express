var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  var nombre= req.query.nombre 
  res.send('Hola '+ nombre + ' como estas' );
  
});

router.post('/id', function(req, res, next) {
  console.log(req.body);
  var nombre= req.body.nombre 
  res.send('Hola '+ nombre + ' como estas' );

});

router.post('/suma', function(req, res, next) {
  console.log(req.body);
  
  var numero1= parseInt(req.body.numero1);
  var numero2= parseInt(req.body.numero2);
  var respuesta = numero1 + numero2;
  res.send(`${numero1} + ${numero2} = ${respuesta}`);
});

router.post('/tamano_nombre', function(req, res, next) {
  console.log(req.body);
  var nombre = req.body.nombre;
  
  const vocales = 'aeiouAEIOU'; 
  let contadorVocales = 0;
  let contadorConsonantes = 0;
  
  for (let i = 0; i < nombre.length; i++) {
    let caracter = nombre[i];
    

    if (vocales.includes(caracter)) {
        contadorVocales++;
    } 
    else if (caracter.toLowerCase() != caracter.toUpperCase()) {
        contadorConsonantes++;
    }
  }
  let resultado = {
    vocales: contadorVocales,
    consonantes: contadorConsonantes
  };

  res.send('Hola ' + nombre + ', ¿cómo estás? Tu nombre tiene: ' + resultado.vocales + ' vocales y ' + resultado.consonantes + ' consonantes.');
});

module.exports = router;
