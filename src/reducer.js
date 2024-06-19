export const initialState = {
    basket: [
        {
            id:"2",
            title:"Redmi 13C (Stardust Black, 6GB RAM, 128GB Storage) | Powered by 4G MediaTek Helio G85 | 90Hz Display | 50MP AI Triple Camera",
            price:1476,
            rating:2,
            image:"https://m.media-amazon.com/images/I/41ykC0f0VTL.jpg"
        },
   
], 
    use: null,
};

export const getBasketTotal = (basket)=>
    basket?.reduce((amount, item)=>item.price + amount, 0);


const reducer = (state, action)=>{
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            //Logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            };

        case 'REMOVE_FROM_BASKET':
        //Logic for Removing item from basket

        //we cloned the basket
        let newBasket = [...state.basket];

        //we check to see if product exits,
        const index = state.basket.findIndex((basketItem) => basketItem.id===action.id);

        if(index>=0){
            // item exists in baskt=et remove it...
            newBasket.splice(index, 1);
        }else{
            console.warn(
                `Cant remvoe product (id: ${action.id}) as its not exist`
            )
        }

        return {
             ...state, 
             basket: newBasket 
            };

        default:
            return state;
    }
}

export default reducer;
