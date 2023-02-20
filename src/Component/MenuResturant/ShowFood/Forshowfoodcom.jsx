import React, { useContext, useEffect, useState } from "react";
import ShowFoodcom from "./ShowFoodcom";
import { useNavigate, useLocation } from "react-router";
import ContextOrderFood from "../../../context/ContextOrderFood";
import { Modal } from "react-bootstrap";
import Modallogin from "../orders/Modalloginregister/Modallogin";
import Modallregister from "../orders/Modalloginregister/Modalregister";


const Forshowfoodcom = () => {

    const context = useContext(ContextOrderFood)
    const location = useLocation();
    const navigate = useNavigate();

    let foodsresturant;
    let contentmain = "";

    for (let i = 0; i < context.resturant.length; i++) {
        if (("/" + context.resturant[i].name) === (location.pathname)) {
            foodsresturant = context.resturant[i]
        }
    }

    const [widthscreen, setWidthCcreen] = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidthCcreen(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const [showlogin, setShowlogin] = useState(false);
    const handleModallogin = () => setShowlogin(!showlogin);
    const [showregister, setShowregister] = useState(false);
    const handleModalregister = () => setShowregister(!showregister);

    const closeloginopenregister = () => {
        handleModallogin();
        handleModalregister();
    }

    let loginmodal =
        <Modal
            size="md"
            show={showlogin}
            onHide={handleModallogin}
            centered
        >
            <Modal.Header closeButton className="mx-3" />
            <Modal.Body>
                <Modallogin nameresturant={foodsresturant.name} handelopen={() => closeloginopenregister()} />
            </Modal.Body>
        </Modal>;

    let registermodal =
        <Modal
            size="md"
            show={showregister}
            onHide={handleModalregister}
            centered
        >
            <Modal.Header closeButton />
            <Modal.Body>
                <Modallregister nameresturant={foodsresturant.name} handelopen={() => closeloginopenregister()} />
            </Modal.Body>
        </Modal>;

    const setnameresturan = () => {
        if (document.cookie !== null && document.cookie !== undefined && document.cookie !== '') {
            localStorage.removeItem('nameresturantforshoworder');
            localStorage.setItem('nameresturantforshoworder', foodsresturant.name)
            navigate('/shoppingcart')
            setShowlogin(false)
            setShowregister(false)
        } else {
            handleModallogin()
        }
    }

    let paymentorder = "";
    if (widthscreen <= 991 && foodsresturant.orderfood.length >= 1) paymentorder =
        <div>
            <button onClick={setnameresturan} className="btn btn-warning fw-bold w-100">payment</button>
        </div>
    else paymentorder = "";


    if (foodsresturant.foods !== undefined && foodsresturant.foods !== "") {
        contentmain =
            foodsresturant.foods.map(o => (
                <ShowFoodcom
                    picture={o.picture}
                    nameFood={o.namefood}
                    descriptionFood={o.descriptionfood}
                    price={o.price}
                    numberorderr={o.numberorder}
                    nameresturant={foodsresturant.name}

                    AddedOrder={() => context.AddedOrder(foodsresturant.name, o.id)}
                    deletorder={() => context.deletorder(foodsresturant.name, o.id)}
                    Minesorder={() => context.Minesorder(foodsresturant.name, o.id)}
                >
                </ShowFoodcom>
            ))
    } else {
        contentmain =
            <ShowFoodcom
                notfoos={`${location.pathname.slice(1)} restaurant does not have food to order or display`}
                nameresturant={foodsresturant.name}
            >
            </ShowFoodcom>
    }

    return (
        <div className="row row-cols-1 row-cols-md-2 g-4 w-100 m-auto h-100">
            {contentmain}
            <div className="w-100 d-flex align-items-center justify-content-center">
                <div style={{ width: "98%" }} className="position-fixed bottom-0 container mb-2">
                    {paymentorder}
                </div>
                {loginmodal}
                {registermodal}
            </div>
        </div>
    )
}

export default Forshowfoodcom