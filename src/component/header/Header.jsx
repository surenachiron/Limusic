import React from "react";
import { faBars, faBell, faCog, faSearch } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import accountprson from '../../assets/images/ananymousformusicorartist.png'
import looglg from '../../assets/images/looglg.jpg'
import logosm from '../../assets/images/logosm.jpg'
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { changeheadermobileshow } from "../../redux/actions/truefalse";

const Header = () => {

    const headermenushow = useSelector(state => state.headermobileshow)
    const dispatch = useDispatch()

    const dorshowhisemenumobile = () => {
        dispatch(changeheadermobileshow())
    }

    let menumobile = '';
    if (headermenushow === true) {
        menumobile =
            <div className="transition-all w-1/2 z-50 h-1/2 rounded-2xl bg-graypro absolute mt-2">
                <ul className="p-5 bg-graypro">
                    <li>home</li>
                    <li>musics</li>
                    <li>artists</li>
                    <li>albums</li>
                </ul>
            </div>
    } else menumobile = ""
    useEffect(() => {
        if (headermenushow === true) {
            menumobile =
                <div className="transition-all w-1/2 z-50 h-1/2 rounded-2xl bg-graypro absolute mt-2">
                    <ul className="p-5 bg-graypro">
                        <li>home</li>
                        <li>musics</li>
                        <li>artists</li>
                        <li>albums</li>
                    </ul>
                </div>
        } else menumobile = ""
    }, [headermenushow])

    return (
        <div className="flex items-center justify-between grid grid-cols-12 pt-5 bg-tranparent px-5">
            <div className="lg:flex lg:items-center lg:col-span-3 zero:hidden">
                <h3 className="text">Music</h3>
                <h3 className="text mx-6">Podcast</h3>
                <h3 className="text">Live</h3>
            </div>
            <div className="lg:hidden md:flex md:items-center zero:col-span-3 transition-all">
                <FontAwesomeIcon icon={faBars} className="cursor-pointer mr-3" onClick={dorshowhisemenumobile} ></FontAwesomeIcon>
                <div className="transition-all">
                    {menumobile}
                </div>
                <NavLink to='/'>
                    <img src={looglg} alt="logo" className="w-28 cursor-pointer md:inline zero:hidden" />
                </NavLink>
            </div>
            <div className="lg:col-span-1 lg:flex zero:hidden"></div>
            <div className="lg:col-span-4 md:col-span-6 md:w-full bg-white md:rounded-2xl md:flex items-center md:px-4 zero:hidden">
                <input type="search" name="searchinapp" id="searchinputheader" className="p-2 rounded-3xl text-black border-0 w-full text-center" placeholder="Type your seach here" />
                <FontAwesomeIcon icon={faSearch} className="text-blacklight cursor-pointer"></FontAwesomeIcon>
            </div>
            <div className="md:hidden zero:col-span-6 zero:flex justify-center">
                <NavLink to='/'>
                    <img src={logosm} alt="logo" className="w-10 mr-3 cursor-pointer" />
                </NavLink>
            </div>
            <div className="lg:col-span-1 lg:flex zero:hidden"></div>
            <div className="flex items-center justify-end col-span-3">
                <div className="sm:block zero:hidden flex">
                    <FontAwesomeIcon icon={faBell} className="cursor-pointer"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faCog} className="zero:mx-4 lg:mx-2 xl:mx-4 cursor-pointer"></FontAwesomeIcon>
                </div>
                <div id="username" className="flex items-center cursor-pointer">
                    <img src={accountprson} className="w-7 h-7 rounded-full" />
                    <p className="text-white ml-3 lg:block zero:hidden">surena karimi</p>
                </div>
            </div>
        </div>
    )
}

export default Header