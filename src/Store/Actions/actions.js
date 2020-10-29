import {ADD_TO_CART,CLEAR_CART,REMOVE_FROM_CART} from './types'

export function addToCart (ProductInfo, quantity){
  return{
      type: ADD_TO_CART,
      ProductInfo,
      quantity

  }

}


export function removeFromCart (index){
  return{
    type: REMOVE_FROM_CART,
    index,
  }
}



export function clearCart (){
  return{
    type: CLEAR_CART,
   
  }
}