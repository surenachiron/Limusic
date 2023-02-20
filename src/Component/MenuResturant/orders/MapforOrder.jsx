import React, { Fragment, useContext } from "react";
import Orders from "./Orders";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/fontawesome-free-solid'
import { useLocation } from "react-router";
import ContextOrderFood from "../../../context/ContextOrderFood";


const MapforOrder = ({ lenghorder }) => {

    const context = useContext(ContextOrderFood)
    const location = useLocation();

    let foodsresturant;

    for (let i = 0; i < context.resturant.length; i++) {
        if (("/" + context.resturant[i].name) === (location.pathname)) {
            foodsresturant = context.resturant[i]
        }
    }

    let Trash = ''
    if (lenghorder.length >= 1) {
        Trash =
            <div className="d-flex justify-content-end mt-2 me-4">
                <button onClick={context.ClearStateOrderFood} className="faTrashClearOrder">
                    <FontAwesomeIcon icon={faTrash} className="fa-sm m-auto" color="orange" />
                </button>
            </div>
    }

    return (
        <Fragment>
            {Trash}
            {foodsresturant.orderfood.map(o => (
                <Orders
                    nameFoodOrder={o.nameFoodOrder}
                    price={o.price}
                    numberorderr={o.numberorderr}
                    lengthFoodOrder={lenghorder.length}

                    AddinOrderFood={() => context.AddinOrderFood(foodsresturant.name, o.id)}
                    DeletinOrderFood={() => context.deletorder(foodsresturant.name, o.id)}
                    MinesinOrderFood={() => context.Minesorder(foodsresturant.name, o.id)}
                >
                </Orders>
            ))}
        </Fragment >
    )
}

export default MapforOrder