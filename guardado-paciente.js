const formularioPaciente = document.getElementById('registro-pacientes-formulario')
formularioPaciente.addEventListener('submit', (event) =>{
event.preventDefault();
const datosPaciente = {
nombrePaciente: document.getElementById('paciente').value,
apellidoPaciente: document.getElementById('apellido_paciente').value,
cedulaPaciente: document.getElementById('cedula_paciente').value,
edadPaciente: document.getElementById('edad_paciente').value,
telefonoPaciente: document.getElementById('telefono_paciente').value,
especialidadRequerida: document.getElementById('especialidad').value,
}

guardarEnCookie(datosPaciente)
    const confirmacion = confirm('¿Desea ver los datos o seguir añadiendo pacientes?');
    if (confirmacion) {
        window.location.href = 'pacientes.html';
    } else {
        console.log('Continuando en el formulario');
        formularioPaciente.reset()
    }
});
// Función para guardar un paciente en la cookie
function guardarEnCookie(paciente) {
    // Obtener los datos de la cookie actual de paciente
    let datosPac = getCookie("pacientes");
    // Si la cookie está vacía, inicializarla como un arreglo vacío
    if (datosPac === "") {
        datosPac = "[]";
    }
    // Convertir la cookie en un arreglo de objetos
    const pacientes = JSON.parse(datosPac);
    // Agregar el nuevo paciente al arreglo
    pacientes.push(paciente);
    // Convertir el arreglo de los pacientes de nuevo a un JSON
    const nuevoJSON = JSON.stringify(pacientes);
    // Guardar el JSON en la cookie
    setCookie("pacientes", nuevoJSON);
}

// Función para obtener los datos de la cookie
function getCookie(nombre) {
    //separa las cookies y las guarda en un arreglo
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        if (cookie[0] === nombre) {
            // devolver la infromacion de la cookie que se llama igual
            return decodeURIComponent(cookie[1]);
        }
    }
    //devolver vacio si no encuentra cookie
    return "";
}

// Función para guardar datos en la cookie
function setCookie(nombre, valor) {
    document.cookie = `${nombre}=${encodeURIComponent(valor)}`;
}