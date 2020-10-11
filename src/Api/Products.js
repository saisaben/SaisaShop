import Products from "./Products.json";

export function getall(){

    return Promise.resolve(Products);
}

export function getById(id){

    const product= Products.find(item => item.id === id);
    return Promise.resolve(product);
}

export default {getall,getById}