/*
  Ejercicio
  Crea un programa que imprima de forma organizada el 
  inventario con sus categorias, subcategorias y productos.
*/


let inventario = {
  carnes: {
    premium: [
      {
        nombre: "res",
        precio: 100,
        cantidad: 10
      },
      {
        nombre: "cerdo",
        precio: 80,
        cantidad: 20
      }
    ],
    regular: [
      {
        nombre: "pollo",
        precio: 50,
        cantidad: 30
      },
      {
        nombre: "pescado",
        precio: 70,
        cantidad: 40
      }
    ]
  },
  bebidas: {
    refrescos: [
      {
        nombre: "cocacola",
        precio: 20,
        cantidad: 50
      },
      {
        nombre: "pepsi",
        precio: 15,
        cantidad: 60
      }
    ],
    jugos: [
      {
        nombre: "jugo de naranja",
        precio: 25,
        cantidad: 70
      },
      {
        nombre: "jugo de manzana",
        precio: 30,
        cantidad: 80
      }
    ],
    quesos: [
      {
        nombre: "queso cheddar",
        variantes: [
          {
            nombre: "cheddar maduro",
            precio: 50,
            cantidad: 10
          },
          {
            nombre: "cheddar joven",
            precio: 40,
            cantidad: 20
          }
        ]
      },
      {
        nombre: "queso mozzarella",
        precio: 60,
        cantidad: 30
      }
    ]
  }
}

function recursion(inventario) {
  if (Array.isArray(inventario)) {
    for (let elemento of inventario) {
      recursion(elemento);
    }
  } else if (typeof inventario === "object" && inventario !== null) {
    for (let clave in inventario) {
      console.log(clave);
      recursion(inventario[clave]);
    }
  } else {
    console.log(inventario);
  }
}

recursion(inventario);