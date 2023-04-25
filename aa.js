const servidor= require('express');

const app= servidor();

const puerto=3002;

app.listen(puerto, ()=> {
    console.log(`El servidor esta escuchando el puerto ${puerto}`);
})

const data=[
    {id:1 ,nombre:'Juan' ,edad: 25},
    {id:2 ,nombre:'Maria' ,edad: 30},
    {id:3 ,nombre:'Pedro' ,edad: 40}
];

//Rutas

app.get('/', (req,res) => {
    res.send(data);
});

app.get('/mayores25', (req,res)=>{
    const mayores25= data.filter(item=> item.edad>25)
    res.send(mayores25);
});

//OBJETO

