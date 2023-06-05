//cargar los datos de la cookie
const medicosCookie = JSON.parse(getCookie('medicos'));
const pacientesCookie = JSON.parse(getCookie('pacientes') || "[]");
const tablaMedicos = document.getElementById("tabla-medicos");
const cuerpoTabla = tablaMedicos.querySelector("tbody");
//length tamaño del arreglo
for (let i = 0; i < medicosCookie.length; i++) {
    const medico = medicosCookie[i];
    const fila = cuerpoTabla.insertRow();
    const nombreMedico = fila.insertCell();
    nombreMedico.textContent = medico.nombreMedico;
    const apellidoMedico = fila.insertCell();
    apellidoMedico.textContent = medico.apellidoMedico;
    const cedula = fila.insertCell();
    cedula.textContent = medico.cedula;
    const especialidad = fila.insertCell();
    especialidad.textContent = medico.especialidad;
    const consultorio = fila.insertCell();
    consultorio.textContent = medico.consultorio;
    const correoContacto = fila.insertCell();
    correoContacto.textContent = medico.correo;
    //colocar los pacientes que atiende el medico
    //mediante filter encontramos todas los pacientes que tienen esa especialidad
    let pacientesEncontrados = pacientesCookie.filter(paciente => medico.especialidad === paciente.especialidadRequerida);
    //se creo la celda
    const medicoPaciente = fila.insertCell();
    if (pacientesEncontrados.length > 0) {
        medicoPaciente.innerHTML = `<ul id="pacientes"></ul>`
        const pacientes = medicoPaciente.querySelector("#pacientes")
        for (let j = 0; j < pacientesEncontrados.length; j++) {
            const pacienteEncontrado = pacientesEncontrados[j];
            pacientes.innerHTML += `<li>${pacienteEncontrado.nombrePaciente}</li>`;
        }
    } else {
        medicoPaciente.textContent = "Sin pacientes";
    }
}


// Función para obtener los datos de la cookie
function getCookie(nombre) {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        if (cookie[0] === nombre) {
            return decodeURIComponent(cookie[1]);
        }
    }
    return "";
}