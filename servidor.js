const http = require('http');
const tasks = require('./index'); // Importa el archivo de gestión de tareas
const host ='localhost'
const port = 3000;


const server = http.createServer((req, res) => {
if (req.method === 'GET' && req.url === '/index') {

    res.setHeader('Content-Type', 'application/json');


    const listaDeTareas = tasks.tareasActuales();


    res.end(JSON.stringify(listaDeTareas));
} else {

    res.statusCode = 404;
    res.end('Not Found');
}
});


server.listen(port, host, ()=> {
    console.log("servidor funcionamdo en", host, port)
})
