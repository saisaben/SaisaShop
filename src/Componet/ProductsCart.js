import React from 'react';

export default function ProductsCart(props){
   const {product}= props;
    return(
 
     <div className='raw'>
                  <img src={product.image} className="card-img-top" alt="..." width={'10%'} />
            <div className="card-body">
                <h5 className="card-title"> {product.name}</h5>
                <p className="card-text">
                Priese:{product.prise} €</p>
                <a href={"/Products/"+ product.id} className="btn btn-primary">Detail</a>
           </div>
     </div>
     

    

);



}