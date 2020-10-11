import React from 'react';
import  {connect} from 'react-redux';
import  {removeFromCart} from '../Store/Actions/actions';


function CartItem(props){
   const {item,index}= props;
   const {product}= item;
  

    return(
 
     <div className='row'>
                  <img src={product.image} className="card-img-top" alt="..." width={'10%'} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Preiseinheit:{product.prise} €
                <br/>
                Quantity: {item.quantity}
                <br/>
                
                Gesamt: {item.quantity * product.prise} €
                <br/>
                </p>
                    <button className="btn btn-danger" onClick={props.removeFromCart(index)} >
                        <i className='fa fa-trash' >   
                        </i> 
                        Lösche
                    </button>
           </div>
     </div>
     

    

);



}

  export default connect(null, {removeFromCart})(CartItem);