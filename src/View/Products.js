import React from 'react';
import { getall } from '../Api/Products';
import ProductsCart from '../Componet/ProductsCart';

export default class Products extends React.Component{
    state={
    products:[],

    }

componentDidMount(){
    getall()
    .then(data =>{
        this.setState({
            products : data
        })
        
    });
}

  render() {
      
      return(
  <div>
     <h1> Products</h1>
     <div className='row'>
         {this.state.products.map( product=>
           <div className={'col-4'} key={product.id}>   
            <ProductsCart product={product}/>
             </div>
          )}  
     </div>
 </div>
);


    }
}