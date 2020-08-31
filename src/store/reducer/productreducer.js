const INIT_PRODUCTS = [
    {id:1, title: 'Apples', description: 'some red apples', price: 30},
    {id:2, title: 'Oranges', description: 'Peale\'em all', price: 25},
    {id:3, title: 'Bananas', description: 'Some potassium for you', price: 20},
    {id:4, title: 'Potatos', description: 'p for potato', price: 20},
    {id:5, title: 'Onions', description: 'Damm, you gotta brush', price: 35},
    {id:6, title: 'Ginger', description: 'Its good for your liver', price: 10}
];

// reducer
export default (states = INIT_PRODUCTS,action)=>{

    // console.log(action);
    // switch(action.type){
    //     case actionTypes.CHANGEUSERNAME:
    //         return({
    //             // ...states : ye sari state ko same rakhega or usay hi change krega jissay change krna hota hy , spread operator
    //             ...states,
    //             userName: action.payload
    //         })
    //     case actionTypes.CHANGEUSERAGE:
    //         return({
    //             // ...states : ye sari state ko same rakhega or usay hi change krega jissay change krna hota hy , spread operator
    //             ...states,
    //             userAge: action.payload
    //         })
    //     default:
    //         return states;
    // }
    return states;
}