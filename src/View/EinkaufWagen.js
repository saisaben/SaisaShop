import React from 'react';
import CartItem from '../Componet/CartItem';
import  {connect} from 'react-redux';
import  {clearCart} from '../Store/Actions/actions';




class Card extends React.Component{
 
  Zahlung = () =>{
    // send the requst to the server
    // clear cart
    this.props.clearCart();
    alert ('Zahlung erfoglich');
  }

  render() {
      
      return(
  <div>
     <h1> EinkaufsWagen</h1>
     <div className='row'>
         {this.props.cartItems.map((item, index) =>
           <div className={'col-3'} key={index}>   
            <CartItem item={item} index={index}/>
             </div>
          )}  
     </div>
    
     <h2>Gesamt:{this.props.total} </h2>
     <br/>

     <button className='btn btn-primary btn-block' key='' onClick={this.Zahlung} >Zhalung</button>
 </div>
   );

  }
}




const mapStateToProps =(state) => {
  return{
     
      cartItems: state.card,
      total: state.card.reduce((total, item) => total + item.quantity * item.product.prise, 0 ),


  };
}


const mapDispatchToProps =(dispatch) => {
  return{
     
    clearCart: () => dispatch(clearCart ()),
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Card);