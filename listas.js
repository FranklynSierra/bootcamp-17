




let arr=["manzana","trapo","tele","mesa","mouse"]


arr.push("Aceite de Girasol")
console.log(arr)


arr.pop()


console.log(arr)

const peli=[
   { 
      autor:"JKRowling",
      titulo:"harryPotter",
      fecha:2001,
    },
    {
        autor:"StanLee",
        titulo:"AvengersEndGame",
        fecha:2019,
      },
      {
        autor:"BobKane",
        titulo:"theBatman",
        fecha:2022,
      },
    ]


const autor=peli.map((valor,i)=>`${i+1} ${valor.autor}`)
const titulo=peli.map((valor,i)=>`${i+1} ${valor.titulo}`)

const union=autor.concat(titulo)

console.log(union)
const pelisNuevas=peli.filter(valor=>valor.fecha>2010)
  console.log(pelisNuevas)

const propagación={union}

console.log(propagación)



// const lista1=["hjert",2,false,null]
// const lista2=["rjr",8,true,undefined]

// console.log(lista1.concat(lista1))

// const lista3=lista1.concat(lista2)

//metodo de propagación
// console.log(...lista3)

// const lista4=[...lista1,lista2]
// console.log(lista4)


// const array=["hola",1,2,3,true,null,"adios"]
// const array2=array.slice(2,5)

// console.log(array2)


// const array3=array.slice(2,-2)
// const array=["ff",0,5,6,null]



// for(let i=0;i<array.length;i++){
//     console.log(array[i])

// }
// let sum=0
// const arrayNums=[23,2,5,5,4]


// arrayNums.forEach(valor=>{
//     sum+=valor
//     console.log(valor)
// })

// console.log(sum)

// //busqueda valor lista

// const vari=array.find(valor=>{
//     if(valor===90){
//        return true
//     }
// }
//  )
// console.log(vari)
// const objetos=[
//     {nombre:"fran",edad:15},
//     {nombre:"carlos",edad:15},
//     {nombre:"miguel",edad:15},
// ]
// var num=objetos.filter(val=>{
//   if(val.edad>30){true

//   }else{
//     false
//   }})
//   console.log(num)
//   const nueva=objetos.filter(obj=>obj.nombre!=="fran")


  // const obj=pbjetos.find(m=>{
//     if(m.nombre==="fran"){
//         return true
//     }
// })

// const obj=objetos.find(m=>m.nombre==="fran")


// const {edad}=objetos.find(o=>o.nombre==="fran")



// const array=["th","thrh","nytej","hola"]


// const newArra=array.map(valor,indoce=>{
//   return valor
// })

// console.log(newArra)

