const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let listaDeTareas=[ ]; 
    function agregarTarea(id, descripción, estado) {
    listaDeTareas.push({ id, descripción, estado });
};
    function actualizarTarea(id,  nuevoValor) {
        const indice = listaDeTareas.findIndex(tarea => tarea.id === id);
        if (indice !== -1) {
        listaDeTareas[indice].estado = nuevoValor;
        console.log("Tarea actualizada exitosamente");
        }  else {
        console.log("El ID de la tarea no se ha encontrado.");
        }
    };
    function eliminarTarea (id){
        const indice = listaDeTareas.findIndex((tarea) => tarea.id === id);
            if (indice !== -1) {
            listaDeTareas.splice(indice, 1);
            
        }
    };
    function tareasActuales() {
        console.log("Lista de tareas:");
        for (const tarea of listaDeTareas) {
            console.log("Identificador de tarea:", tarea.id);
            console.log("Descripción:", tarea.descripción);
            console.log("Estado:", tarea.estado);
    }
};
async function preguntarOpcion() {
    const opciones = [
        "Selecciona una opción:",
        "1. Agregar tarea",
        "2. Actualizar tarea",
        "3. Eliminar tarea",
        "4. Mostrar tareas",
        "5. Salir"
    ];

    opciones.forEach((opcion, indice) => {
        console.log(`${indice}. ${opcion}`);
    });

    const respuesta = await pregunta("Elige una opción: ");
    const opcion = parseInt(respuesta);

    switch (opcion) {
    case 1:
        const nuevaTarea = parseInt(await pregunta("Ingrese el ID de la nueva tarea: "));
        const nuevaTareaDescripcion = await pregunta("Descripción de la nueva tarea:");
        const nuevaTareaEstado = await pregunta("Estado de la nueva tarea:");
        agregarTarea(nuevaTarea, nuevaTareaDescripcion, nuevaTareaEstado);
        console.log("Tarea agregada exitosamente.");
    break;;

    case 2:
        const idActualizar = parseInt(await pregunta("Ingrese el ID de la tarea a actualizar: "));
        const tareaExistente = listaDeTareas.find(tarea => tarea.id === idActualizar);
    
        if (tareaExistente) {
            const nuevoEstado = await pregunta("Ingrese el nuevo estado de la tarea: ");
            actualizarTarea(idActualizar, nuevoEstado);
        } else {
            console.log("El ID de la tarea no se ha encontrado.");
        }
        break;

    case 3:
        const idEliminar = parseInt(await pregunta("Ingrese el ID de la tarea a eliminar: "));
        eliminarTarea(idEliminar);
        console.log("Tarea Eliminada exitosamente");
        break;
    case 4:
        tareasActuales();
        
        break;
    case 5:
        console.log("¡Hasta luego!");
        rl.close();
        return;
    default:
    console.log("Opción inválida. Por favor, elija una opción válida.");
}

await preguntarOpcion();
};   
    function pregunta(texto) {
        return new Promise((resolve) => {
        rl.question(texto, (respuesta) => {
        resolve(respuesta);
    });
});
}

preguntarOpcion();