//ARREGLO DE PRODUCTOS
const items = [

    {
        title: "chevrolet camaro",
        price: 24500,
        id: "ch-01",
    },

    {
        title: "ford fiesta",
        price: 27200,
        id: "f-01",
    },

    {
        title: "gmc cierra",
        price: 38500,
        id: "g-01",
    },

    {
        title: "tesla model-z",
        price: 31700,
        id: "t-01",
    },

]


// console.log(nombre, apellido, edad)

//CARRITO DE ITEMS ELEGIDOS
carrito = []

//FUNCION PARA VALIDAR USUARIOS
const validarUsuario = () => {
    nombre = prompt("Cual es tu nombre?"),
    apellido = prompt("Cual es tu apellido?"),
    edad = parseInt(prompt("Cual es tu edad"))
    if (!nombre) return "🔴Debes Ingresar tu nombre"
    if (!apellido) return "🔴Debes Ingresar tu apellido"
    if (!edad) return "🔴Debes Ingresar tu edad"
    if (edad < 18) return "🔴Debes ser mayor de edad"
    alert(`🟢Bienvenido a nuestra tienda ${nombre} ${apellido}`)
    return mostrarItems()

}

//FUNCION PARA MOSTRAR ITEMS
const mostrarItems = () => {
    console.log(" ID 👇 | NOMBRE 👇 | PRECIO 👇")
    for (let item of items) {
        console.log(`${item.id} | ${item.title} | ${item.price}`)
    }
}
//FUNCION PARA ELEGIR ITEMS
const elegirItem = id => {
    if (!id) return "Ingrese id valido"

    const itemEncontrado = items.find(item => item.id === id)
    if (!itemEncontrado) return "El item no existe"

    carrito.push(itemEncontrado)
    console.log("El item ha sido agregado a su carrito. Su item es:")
    return verCarrito()
}
//FUNCION PARA VER CARRITO
const verCarrito = () => carrito