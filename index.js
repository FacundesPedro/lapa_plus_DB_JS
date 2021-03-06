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

const search_carro_by_car_id = async(id)=>{
    const results = await connection('carros')
        .where('carros.id',id)
        .select(["carros.modelo","fabricas.name as fabNOME"])
        .join('fabricas','carros.fabrica_ID','=','fabricas.id')

        console.log(results)
}
const search_carro_by_fabricaID = async(id) =>{
    const results = await connection('fabricas')
        .where('carros.fabrica_ID',id)
        .select(["carros.modelo","fabricas.name as fabNOME"])
        .join('carros','fabricas.id','=','carros.fabrica_ID')
        
        console.log(results)
    }   

const test = async(id)=>{
    const results = await connection('carros')
        .select('modelo')
        .where('id','>',id)

        console.log(results)
}
listarCarros()
//search_carro_by_car_id(2)
//search_carro_by_fabricaID(2)
test(1)