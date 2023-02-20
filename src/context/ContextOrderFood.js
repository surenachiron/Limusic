import { createContext } from "react";


const ContextOrderFood = createContext({
    resturant: [],
    image: [],
    AddedOrder: () => { },
    deletorder: () => { },
    Minesorder: () => { },
    AddinOrderFood: () => { },
    ClearStateOrderFood: () => { },
})

export default ContextOrderFood;