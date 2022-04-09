import * as actionTypes from '../constants/cartConstants';

// state should always have the initial state of the expected object
// in this case the intical cart will be {cartItem: []}
export const cartReducer = (state = {cartItems: []}, action) => {
    switch(action.type){
        
        case actionTypes.ADD_TO_CART:

            const item = action.payload;

            const existItem = state.cartItems.find( (x) => x.product === item.product);
        
            if(existItem){
                // Update product quantity if already exists
                return{
                    ...state,
                    cartItems: state.cartItems.map( (x) => x.product === existItem ? item : x)
                };
            } else {
                // Add product for the first time
                return {
                    ...state,
                    cartItems : [...state.cartItems, item],
                };
            };

        case actionTypes.REMOVE_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter((x) => x.product !== action.payload)
            }
        
        default:
            return state;
    
    }
}