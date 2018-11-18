const fs = require('fs');

for (let i = 1; i < 10; i++) {
    console.log(i + ' * 2 = ', 2 * i);
}

fs.writeFile('pruebaFS.txt', 'Hola Borjaa', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});