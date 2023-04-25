const data=[
    {id:1 ,nombre:'Juan' ,edad: 25},
    {id:2 ,nombre:'Maria' ,edad: 30},
    {id:3 ,nombre:'Pedro' ,edad: 40}
];


//const d= data.filter(persona=> persona.nombre==='Maria');

//console.log(d);
filtrado= filtrarPorParteNombre("Ma");
console.log(filtrado)   

function filtrarPorParteNombre(parte){
   return data.filter((p)=> p.nombre.include(parte.toLowerCase)); 
}