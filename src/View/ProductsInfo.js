import React from 'react';
import { getById } from '../Api/Products';
import  {connect} from 'react-redux';
import { addToCart } from '../Store/Actions/actions';

 class ProductsInfo extends React.Component {

    state={
        loading: true,
        quantity:0, 
        product:{}
    };
  
componentDidMount(){
  const id = this.props.match.params.id;
  
  getById(parseInt(id))
     .then(product =>{
        this.setState({product,loading: false});
        
     })
}
    
   Qhandel = (event) =>{
       const value=event.target.value;

       if(value<0)
       return;
       this.setState({
        quantity: value
       })
   }
   addToCart = (product)=> {
     this.props.addToCart(product,this.state.quantity)
   }

 



    render(){
       if(this.state.loading)
      return 'Loading....';

      const product=this.state.product;
      const quantity=this.state.quantity;

    return(
  <div>
   <h1>{product.name}</h1> 
   <div className='row'>
   <div className='col-6'>
       <img src={product.image} width={'100%'} alt="..."/>
   </div>
   <div className='col-6'>
        <h1>{product.name}</h1>
        <p>Prise: {product.prise} €</p>
        <p>{product.des} </p>
        <br/><br/>

        <input type='number' value={quantity}  onChange={this.Qhandel}/>
        <br/>
    <p> Gesamt : {quantity * product.prise }</p>
        <br/>
        <button className='btn btn-primary' onClick={()=>
            this.addToCart(product) }>
            Zum der Einkaufwagen
        </button>

   </div>
   </div>
    
  </div>
);

}
}

const mapDispatchToProps =(dispatch) => {
    return{
       
        addToCart: (productsInfo,quantity) => dispatch(addToCart (productsInfo, quantity)),
    };
  }
  
export default connect(null,mapDispatchToProps)(ProductsInfo);