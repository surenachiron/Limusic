import React, { Fragment, useContext, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Footersite from "../Component/Footer/Footersite";
import Headersite from "../Component/header/Headersite";
import Layoutorderpaymet from "../Component/MenuResturant/paymentorder/Layoutorderpaymet";
import Loginn from "../Component/auth/Loginn";
import Registerr from "../Component/auth/Registerr";
import CollectingComponentsHomepage from "../Component/home-Page/layout/CollectingComponentsHomepage";
import CollectingComponentsMenuResturant from "../Component/MenuResturant/layout/CollectingComponentsMenuResturant";
import ContextOrderFood from "../context/ContextOrderFood";
import Page404 from "../Component/404/Page404";
import Resultsearchoutpage from "../Component/search/Resultsearchoutpage";

const Paginition = () => {

    const context = useContext(ContextOrderFood)

    const location = useLocation()
    let header = ''
    let footer = ''
    if (location.pathname === "/login" || location.pathname === "/register") {
        header = ''
    } else {
        header = <Headersite />
    }
    if (location.pathname !== "/" && location.pathname !== "/shoppingcart") {
        footer = ""
    } else {
        footer = <Footersite />
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    return (
        <Fragment>
            {header}
            <Routes>
                <Route path="/resultsearch/:textsearch" element={<Resultsearchoutpage />} />
                <Route path="/shoppingcart" element={<Layoutorderpaymet />} />
                <Route path="/login" element={<Loginn />} />
                <Route path="/register" element={<Registerr />} />
                {context.resturant.map(o => (
                    <Route path={o.name} element={<CollectingComponentsMenuResturant />} />
                ))}
                <Route path="/" exact element={<CollectingComponentsHomepage />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
            {footer}
        </Fragment>
    )

}

export default Paginition