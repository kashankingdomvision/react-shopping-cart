
export const ADD_TO_CART = 'ADD_TO_CART';

export function addToCart({id, title, description, price, units=1}) {
    return {
        type: ADD_TO_CART,
        payload: {id, title, description, price, units}
    }
}

// export function changeState(allChangeState) {

//     // console.log(allChangeState);
//     return dispatch => {
//         dispatch({ type: actionTypes.CHANGEUSERNAME, payload: allChangeState.userName })
//         dispatch({ type: actionTypes.CHANGEUSERAGE, payload: allChangeState.userAge })
//     }
// }