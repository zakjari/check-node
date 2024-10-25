const fs = require('fs');

fs.writeFileSync('welcome.txt', 'Hello Node'), 
function (err) {
    if (err) throw err;
    
}
    console.log('Fichier welcome.txt créé avec succès !');