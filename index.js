const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let listaDeTareas=[ ]; 
    function agregarTarea (tarea){
        listaDeTareas.push(tarea);
    };
    function actualizarTarea(id, tareaAActualizar, nuevoValor) {
        const indice = listaDeTareas.findIndex(tarea => tarea.id === id);
        if (indice !== -1) {
        listaDeTareas[indice][tareaAActualizar] = nuevoValor;
        console.log("Tarea actualizada.");
        }  
    };
    function eliminarTarea (id){
        const indice = listaDeTareas.findIndex((tarea) => tarea.id === id);
            if (indice !== -1) {
            listaDeTareas.splice(indice, 1);
            console.log("Tarea eliminada exitosamente.");
        }
    };
    function tareasActuales () {
        console.log("Lista de tareas:");
            for (const tarea of listaDeTareas) {
                console.log("Identificador de tarea:", tarea.id);
                console.log("Descripción:", tarea.descripción);
                console.log("Estado:", tarea.estado);
            }
    };
    function preguntarOpcion() {
        const opciones = [
            "Selecciona una opción:", 
            "1. Agregar tarea", 
            "2. Actualizar tarea", 
            "3. Eliminar tarea", 
            "4. Mostrar tareas", 
            "5. Salir"
        ];
    opciones.forEach((opcion, indice) => {
        console.log(`${indice + 1}. ${opcion}`);
    });
        rl.question('Por favor, elige una opción: ', (respuesta) => {
            // esperar respuesta del usuario 
            const eleccion = parseInt(respuesta);
        if (eleccion  >= 1 && eleccion <= opciones.length) {
            if (eleccion === 1) {
        rl.question("Ingrese el ID de la nueva tarea:", (id) => {
            rl.question("Descripcion de la nueva Tarea:", (descripción) => {
                rl.question("Estado de la nueva tarea:", (estado) => {
                    const nuevaTarea =  {
                        id: parseInt(id),
                        descripción,
                        estado  
        };
            agregarTarea(nuevaTarea);
            console.log("Tarea agregada exitosamente.");
            preguntarOpcion(); // Continuar con las preguntas  
            });
        });
    });
        } else if (eleccion == 2) {
            rl.question("Ingrese el ID de la tarea a actualizar", (idAActualizar ) => {
                    const tareaExistente = listaDeTareas.find((tarea) => tarea.id === parseInt(idAActualizar));
                    if (tareaExistente)  {
                    rl.question("Ingrese el campo a actualizar (descricion o estado):", (tareaAActualizar) => {
                        rl.question(`Ingrese el nuevo valor para ${tareaAActualizar}:`, (nuevoValor) => {  
                        actualizarTarea(parseInt(idAActualizar), tareaAActualizar, nuevoValor);
                            preguntarOpcion();
                        });
                    });        
                }             
        else {
                console.log("El ID de la tarea no se ha registrado.");
                preguntarOpcion();
                }
            });
        } else if (eleccion === 3 ) {
            rl.question("Ingrese el ID de la tarea a eliminar", (idAEliminar) => { 
                eliminarTarea(parseInt(idAEliminar));
                console.log("tarea eliminada exitosamente.");
                preguntarOpcion();
            });                
        } else if (eleccion === 4) {
            tareasActuales();
            preguntarOpcion();
        } else if (eleccion === 5) {
            console.log("¡Hasta luego!");
            rl.close();
        }//return;
        } else {
            console.log("Opción inválida. Por favor, elija una opción válida.");
            preguntarOpcion();
            } 
        });    
    }
    preguntarOpcion(); // Iniciar el proceso de preguntas y respuestas