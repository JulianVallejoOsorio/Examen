
const empleados = [];
function menu() {
    let opcion;
    do {
        opcion = prompt(
            "MENÚ DE PRIMA DE SERVICIOS\n" +
            "1. Agregar empleado\n" +
            "2. Mostrar resultados de primas\n" +
            "3. Salir\n" +
            "Seleccione una opción:"
        );

        switch (opcion) {
            case "1":
                agregarEmpleado();
                break;
            case "2":
                mostrarResultados();
                break;
            case "3":
                alert("Saliendo del programa.");
                break;
            default:
                alert("Opción no válida. Intente de nuevo.");
        }
    } while (opcion !== "3");
}


function agregarEmpleado() {
    const nombre = prompt("Ingrese el nombre del empleado:");
    const salario = parseFloat(prompt("Ingrese el salario mensual:"));
    const mesesTrabajados = parseInt(prompt("Ingrese los meses trabajados:"));
    const ausencias = parseInt(prompt("Ingrese la cantidad de ausencias injustificadas:"));

    empleados.push({ nombre, salario, mesesTrabajados, ausencias });
    alert("Empleado agregado exitosamente.");
}

function mostrarResultados() {
    if (empleados.length === 0) {
        alert("No hay empleados registrados.");
        return;
    }

    let mensaje = "Resultados de la prima de servicios:\n";

    empleados.forEach(empleado => {
        const prima = calcularPrima(empleado).toFixed(2);
        mensaje += `${empleado.nombre}: $${prima}\n`;
    });

    alert(mensaje);
}


function calcularPrima(empleado) {
    const { salario, mesesTrabajados, ausencias } = empleado;
    const diasTrabajados = mesesTrabajados * 30;
    let prima = (salario * diasTrabajados) / 360;

    if (ausencias > 5) {
        prima -= prima * 0.10;
    }

    return prima;
}

menu()