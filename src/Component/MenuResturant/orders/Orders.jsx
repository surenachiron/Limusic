import React, { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/fontawesome-free-solid'
import '../ShowFood/Csspartsshowfood.css'

const Orders = ({ nameFoodOrder, price, numberorderr, AddinOrderFood, DeletinOrderFood, MinesinOrderFood, lengthFoodOrder }) => {

    let DeletNoneOrFlex = ""
    let MinesNoneOrFlex = ""
    let classdelet = ""
    if (numberorderr === 1) {
        DeletNoneOrFlex = ""
        MinesNoneOrFlex = "d-none"
    } else {
        DeletNoneOrFlex = "d-none"
        MinesNoneOrFlex = ""
    }
    if (lengthFoodOrder >= 1) {
        classdelet = "d-flex"
    } else {
        classdelet = "d-none"
    }

    
    let truee = "";
    if (lengthFoodOrder >= 1) {
        truee =
            <div className="col-12 col-lg-12 col-md-6 col-sm-6 mb-2">
                <h6 className="m-1 ms-4">{nameFoodOrder}</h6>

                <div className={`${classdelet} d-flex align-items-center justify-content-center mt-2`}>
                    <div className="d-flex align-items-end justify-content-end">
                        <p className="mx-3 m-1 text-muted">${price} :</p>
                    </div>
                    <div className="d-flex">
                        <button type="button" className={`${DeletNoneOrFlex} btn btn-sm rounded-pill border`} style={{ width: '2rem', height: '2rem' }} onClick={DeletinOrderFood}>
                            <FontAwesomeIcon icon={faTrash} className="fa-sm m-auto" color="red" />
                        </button>

                        <button type="button" className={`${MinesNoneOrFlex} btn btn-sm rounded-pill border`} style={{ width: '2rem', height: '2rem' }} onClick={MinesinOrderFood}>-
                        </button>

                        <button type="button" className="btn btn-sm btn-warning rounded-pill btnproforshownumberorder mx-1" style={{ width: '2.1rem', height: '2rem' }}>{numberorderr}
                        </button>

                        <button type="button" className="btn btn-sm rounded-pill border" style={{ width: '2rem', height: '2rem' }} onClick={AddinOrderFood}>+
                        </button>
                    </div>
                </div>
            </div>
    }

    return (
        <Fragment>
            {truee}
        </Fragment>
    )

}

export default Orders