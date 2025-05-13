// Ejercicio 4. Cálculo de la prima de servicios
// Contexto: En una empresa, se necesita calcular la prima de servicios para cada
// empleado. Esta prima se calcula en función del tiempo trabajado y el salario
// mensual, pero también depende de la cantidad de ausencias injustificadas del
// empleado. Si un empleado ha tenido más de 5 ausencias injustificadas, se le debe
// deducir un porcentaje de la prima. Además, si el empleado no ha cumplido 6 meses
// en la empresa, la prima debe calcularse proporcionalmente a los días trabajados.
// Condiciones:
// 1. Se debe calcular la prima con base en el salario mensual y el tiempo
// trabajado.
// 2. Si el empleado ha tenido más de 5 ausencias injustificadas, se le deduce un
// porcentaje de la prima.
// 3. Si el empleado ha trabajado menos de 6 meses, se calcula una prima
// proporcional.
// 4. El algoritmo debe calcular la prima de forma precisa para cada empleado
// según las condiciones dadas.
// Instrucciones para resolver con arreglos:
// • Crea un arreglo de objetos empleados, donde cada objeto tenga: nombre,
// salario, mesesTrabajados, ausencias.
// CESDE
// Programa Técnico laboral como asistente en desarrollo de Software
// Módulo Programación Web 1
// Sede Medellín
// Docente Jaime Zapata Valencia
// Denominación Desempeño
// • Recorre el arreglo para calcular la prima considerando proporcionalidad y
// descuentos.
// • Almacena los resultados en un nuevo arreglo de resultados.
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