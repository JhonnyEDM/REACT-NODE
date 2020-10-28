let empleados = [{
        id: 1,
        nombre: 'Jhonny',
    },
    {
        id: 2,
        nombre: 'Josmel'
    },
    {
        id: 3,
        nombre: 'Ortiz'
    },
    {
        id: 4,
        nombre: 'Vasquez'
    }
]

let salarios = [{
        id: 1,
        cantidad: 1000
    },
    {
        id: 2,
        cantidad: 5000
    },
    {
        id: 3,
        cantidad: 10000
    }
]

let getEmpleadoById = async(id) => {
    let empleado = empleados.find(empleado => empleado.id == id);
    if (!empleado) {
        throw new Error(`No se encontro el usuario con el id: ${id}`)
    } else {
        return empleado;
    }
}

let getSalarioById = async(empleado) => {
    let salario = salarios.find(salario => salario.id == empleado.id);
    if (!salario) {
        throw new Error(`El empleado trabaja de gratis: ${empleado.id}`)
    } else {
        return {
            cantidad: salario.cantidad,
            nombre: empleado.nombre
        }
    }
}

let getInformacionEmpleado = async(Id) => {
    let empleado = await getEmpleadoById(Id);
    let Salario = await getSalarioById(empleado);
    return `${Salario.nombre} tienen el salario de ${Salario.cantidad}`;
}


getInformacionEmpleado(10)
    .then(resp => console.log(resp))
    .catch(error => console.log(error))