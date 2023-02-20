import React, { Fragment, useContext } from "react";
import OrderResponsiv from "./OrderResponsiv";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/fontawesome-free-solid'
import ContextOrderFood from "../../../context/ContextOrderFood";


const MapforOrderResponsiv = () => {

    const context = useContext(ContextOrderFood)
    let findresturant = "";


    for (let i = 0; i < context.resturant.length; i++) {
        if (localStorage.getItem('nameresturantforshoworder') === context.resturant[i].name) {
            findresturant = context.resturant[i]
        }
    }

    let Trash = ''
    if (context.lengthFoodOrder >= 1) {
        Trash =
            <div className="d-flex justify-content-end mx-2 mt-2">
                <button onClick={context.ClearStateOrderFood} className="faTrashClearOrder">
                    <FontAwesomeIcon icon={faTrash} className="fa-sm m-auto" color="orange" />
                </button>
            </div>
    }
    return (
        <Fragment>
            {Trash}
            {findresturant.orderfood.map(o => (
                <div className="d-flex align-items-center justify-items-center col-12 col-lg-6 col-sm-12 col-md-6">
                    <OrderResponsiv
                        nameresturant={findresturant.name}
                        nameFoodOrder={o.nameFoodOrder}
                        picture={o.picture}
                        price={o.price}
                        numberorderr={o.numberorderr}

                        lenghtforim={findresturant.orderfood.length}

                        AddinOrderFood={() => context.AddinOrderFood(findresturant.name, o.id)}
                        DeletinOrderFood={() => context.deletorder(findresturant.name, o.id)}
                        MinesinOrderFood={() => context.Minesorder(findresturant.name, o.id)}
                    >
                    </OrderResponsiv>
                </div>
            ))}
        </Fragment >
    )
}

export default MapforOrderResponsiv