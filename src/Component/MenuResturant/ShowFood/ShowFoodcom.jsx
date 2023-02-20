import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/fontawesome-free-solid'
import './Csspartsshowfood.css'
import Helmet from "react-helmet"
import nonepicture from '../../../img/nonepicture.png'


const ShowFoodcom = ({ picture, nameFood, descriptionFood, price, numberorderr, nameresturant, AddedOrder, deletorder, Minesorder, notfoos }) => {

    let contentmain = ""
    let pictureim = ""
    let DeletNoneOrFlex = ""
    let classimportantforshow = ""
    let MinesNoneOrFlex = ""
    let classadd = ""
    let classdelet = ""
    if (numberorderr === 1) {
        DeletNoneOrFlex = ""
        MinesNoneOrFlex = "d-none"
    } else {
        DeletNoneOrFlex = "d-none"
        MinesNoneOrFlex = ""
    }
    if (numberorderr >= 1) {
        classadd = "d-none"
        classdelet = "d-flex mb-3"
    } else {
        classadd = "d-flex mb-3"
        classdelet = "d-none"
    }

    if (picture === "") pictureim = nonepicture
    else pictureim = picture

    if (notfoos === undefined || notfoos === "") {
        classimportantforshow = "container"
        contentmain =
            <div className="card h-100">

                <div className="d-flex">
                    <div className="mt-3 card-img-right" style={{ marginRight: "5px", padding: "0px 9px" }}>
                        <img src={pictureim} alt={descriptionFood} width='112' height='112' />
                    </div>
                    <div className="card-body d-flex flex-column w-100" style={{ padding: "14px", overflowX: "auto" }}>
                        <h6 className="card-title w-100 titleshowfood">{nameFood}
                        </h6>
                        <p className="text-muted card-text mt-1 text-start">{descriptionFood}</p>
                    </div>
                </div>

                <div className="card-footer d-flex justify-content-between align-items-end h-100" style={{ border: "none", backgroundColor: "white" }}>

                    <div className="d-flex align-items-end justify-content-end">
                        <p className="text-muted shadow p-2 rounded">${price}</p>
                    </div>

                    <div className="d-flex align-items-end justify-content-end">

                        <div className={`${classadd}`}>
                            <button className="btnproforadd" onClick={AddedOrder}>Add
                            </button>
                        </div>

                        <div className={`${classdelet}`}>
                            <button type="button" className={`${DeletNoneOrFlex} btn btn-sm rounded-pill border`} style={{ width: '2rem', height: '2rem' }} onClick={deletorder}>
                                <FontAwesomeIcon icon={faTrash} className="fa-sm m-auto" color="red" />
                            </button>

                            <button type="button" className={`${MinesNoneOrFlex} btn btn-sm rounded-pill border`} style={{ width: '2rem', height: '2rem' }} onClick={Minesorder}>-
                            </button>


                            <button type="button" className="btn btn-sm btn-warning rounded-pill btnproforshownumberorder mx-1" style={{ width: '2.1rem', height: '2rem' }}>{numberorderr}
                            </button>

                            <button type="button" className="btn btn-sm rounded-pill border" style={{ width: '2rem', height: '2rem' }} onClick={AddedOrder}>+
                            </button>
                        </div>
                    </div>

                </div>

            </div>
    } else {
        classimportantforshow = "w-100"
        contentmain = <div className="h-100 d-flex align-items-center justify-content-center text-danger"><h3>{notfoos}</h3></div>
    }

    return (
        <div className={`${classimportantforshow} mx-0`}>
            <div className="h-100">
                <Helmet>
                    <title>chef-food - {nameresturant}</title>
                </Helmet>

                {contentmain}

            </div>
        </div >
    )
}

export default ShowFoodcom;