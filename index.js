//const express = require('express')
//const app = express()
const connection = require('./connection');



class carro {
    constructor(modelo,fabricaID){
        this.modelo = modelo
        this.fabrica_ID = fabricaID
    }
}
class fabrica{
    constructor(nome){
        this.name = nome
    }
}

const carro1 = new carro('Virtus',1);
const carro2 = new carro('A4',2);
const carro22 = new carro('chevrolet',2)
const carro3 = new carro('uno_com_escada',3);
const fabrica1 = new fabrica('fabrica1');
const fabrica2 = new fabrica('fabrica2');
const fabrica3 = new fabrica('fabrica4');


//listando 
const listarCarros = async function(string = '*'){
    
    const results = await connection('carros').select(string)
    console.log(results)
    
};
const cadastrarFabrica = async(fabrica)=>{
    const results = await connection('fabricas')
        .insert(fabrica)
        console.log(results)
}
const cadastrarCarro = async (carro) =>{
    await connection('carros')
        .insert(carro) 
        console.log(`Carro ${carro} cadastrado amigo`)  
}  

const search_carro_by_id = async(int)=>{
    const results = await connection('carros')
        .where('carros.id',int)
        .select(["carros.modelo","fabricas.name as fabNOME"])
        .join('fabricas','carros.fabrica_ID','=','fabricas.id')
           
    
    

        console.log(results)
}

listarCarros()
//search_carro_by_id(2)
