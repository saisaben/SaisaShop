import { ADD_TO_CART,CLEAR_CART,REMOVE_FROM_CART } from "../Actions/types";



export default function cartReducer(state,action){
    console.log(state,action)
 switch(action.type){
     case ADD_TO_CART:{
         return[
             ...state,
             {
                product: action.ProductInfo,
                quantity: action.quantity
             }
            ]
         
     }

     case REMOVE_FROM_CART: {
        const item_index = action.index;
        const new_state = [...state];
        new_state.splice(item_index, 1);
        return new_state;
    }
  

            
    case CLEAR_CART: {
        const new_state = {...state};
        new_state = [];
        return new_state;
    }
            
            


    default: {
        if(state === undefined)
            return [];
        
        return state;
    }
}
}