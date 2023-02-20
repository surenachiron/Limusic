import React, { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/fontawesome-free-solid'
import '../ShowFood/Csspartsshowfood.css'
import nonepicture from '../../../img/nonepicture.png'

const OrderResponsiv = ({ nameFoodOrder, picture, price, numberorderr, AddinOrderFood, DeletinOrderFood, MinesinOrderFood, lenghtforim }) => {

    let pictureim = ""
    let DeletNoneOrFlex = ""
    let MinesNoneOrFlex = ""
    let classdelet = ""
    if (numberorderr === 1) {
        DeletNoneOrFlex = ""
        MinesNoneOrFlex = "d-none"
    } else {
        DeletNoneOrFlex = "d-none"
        MinesNoneOrFlex = "-"
    }
    if (numberorderr >= 1) {
        classdelet = "d-flex"
    } else {
        classdelet = "d-none"
    }

    if (picture === "") pictureim = nonepicture
    else pictureim = picture


    let { truee } = "";
    if (lenghtforim >= 1) {
        truee =
            <div className="d-flex col-lg-6 col-sm-12 mt-1 mb-2 p-1">
                <div className="mt-3 card-img-right">
                    <img src={pictureim} alt={nameFoodOrder} width='53' height='54' />
                </div>

                <div className={`${classdelet} d-flex flex-column align-items-start justify-content-center mt-2`}>

                    <h6 className="mx-3 my-1 d-flex">{nameFoodOrder}</h6>

                    <div className="d-flex">

                        <div className="d-flex align-items-end justify-content-end">
                            <p className="mx-3 m-1 text-muted" style={{ width: "45px" }}>{price}$ : </p>
                        </div>

                        <div className="d-flex">
                            <button type="button" className={`${DeletNoneOrFlex} btn btn-sm rounded-pill border`} style={{ width: '2rem', height: '2rem' }} onClick={DeletinOrderFood}>
                                <FontAwesomeIcon icon={faTrash} className="fa-sm m-auto" color="red" />
                            </button>

                            <button type="button" className={`${MinesNoneOrFlex} btn btn-sm rounded-pill border`} style={{ width: '2rem', height: '2rem' }} onClick={MinesinOrderFood}>-
                            </button>

                            <button type="button" className="btn btn-sm btn-warning rounded-pill btnproforshownumberorder mx-1" style={{ width: '2rem', height: '2rem' }}>{numberorderr}
                            </button>

                            <button type="button" className="btn btn-sm rounded-pill border" style={{ width: '2rem', height: '2rem' }} onClick={AddinOrderFood}>+
                            </button>
                        </div>
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

export default OrderResponsiv