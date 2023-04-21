import React from "react";
import looglg from '../../assets/images/looglg.jpg'
import logosm from '../../assets/images/logosm.jpg'
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Searchinput from "../searching/Searchinput";
import { changeheadermobileshow } from "../../redux/actions/homepage";
import { faBars } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Header = () => {

    const headermenushow = useSelector(state => state.headermobileshow)
    const dispatch = useDispatch()

    const dorshowhisemenumobile = () => {
        dispatch(changeheadermobileshow())
    }

    let menumobile = '';
    if (headermenushow === true) {
        menumobile =
            <div className="relative z-50 overflow-hidden">
                <div className="bg-gray-800 fixed inset-0 opacity-25" onClick={dorshowhisemenumobile}></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 overflow-y-auto bg-blackopacitylittle px-10 justify-between z-50">
                    <div>
                        <div className="flex justify-between items-center py-3">
                            <NavLink to='/'>
                                <img src={logosm} alt="logo" className="w-10 mr-3 cursor-pointer" />
                            </NavLink>
                            <FontAwesomeIcon icon={faClose} className="cursor-pointer text-xl font-bold" onClick={dorshowhisemenumobile}></FontAwesomeIcon>
                        </div>
                        <ul className="py-8">
                            <NavLink to='/home'>
                                <li className="py-4 px-2 hover:border-l-1 transition-all">Home</li>
                            </NavLink>
                            <NavLink to='/charts'>
                                <li className="py-4 px-2 hover:border-l-1 transition-all">Charts</li>
                            </NavLink>
                            <NavLink to='/favourites'>
                                <li className="py-4 px-2 hover:border-l-1 transition-all">Favourite</li>
                            </NavLink>
                        </ul>
                    </div>
                    <div className="mt-10">
                        <a href='https://github.com/Suren-chiron' target="_blank" className="flex">
                            <FontAwesomeIcon icon={faGithub} className="text-lg rounded-full cursor-pointer mr-1" />
                            <h5 className="text-xs text-grayprolight text-normal">
                                moahmmad kairimi
                            </h5>
                        </a>
                    </div>
                </nav>
            </div>
    } else menumobile = ""

    return (
        <div className="flex items-center justify-between grid grid-cols-12 pt-5 bg-tranparent px-5">
            <div className="lg:hidden md:flex zero:hidden justify-start md:col-span-3 transition-all">
                <NavLink to='/'>
                    <img src={looglg} alt="logo" className="w-28 cursor-pointer md:inline zero:hidden" />
                </NavLink>
            </div>

            <div className="lg:col-span-3 lg:flex zero:hidden"></div>

            <div className="lg:col-span-6 md:col-span-6 md:w-full bg-white rounded-2xl md:flex items-center justify-center zero:hidden">
                <Searchinput />
            </div>

            <div className="col-span-3 lg:flex md:hidden zero:flex"></div>
            <div className="md:hidden zero:col-span-6 zero:flex justify-center">
                <NavLink to='/'>
                    <img src={logosm} alt="logo" className="w-10 cursor-pointer" />
                </NavLink>
            </div>
            <div className="col-span-3 md:hidden zero:flex justify-end">
                <a href='https://github.com/Suren-chiron' target="_blank" className="flex">
                    <FontAwesomeIcon icon={faGithub} className="text-lg rounded-full cursor-pointer mr-1" />
                </a>
            </div>

            <div className="lg:hidden md:flex zero:hidden items-center justify-end text-end zero:col-span-3 transition-all">
                <div className="transition-all text-start">
                    {menumobile}
                </div>
                <FontAwesomeIcon icon={faBars} className="cursor-pointer mr-3" onClick={dorshowhisemenumobile} ></FontAwesomeIcon>
            </div>
        </div>
    )
}

export default Header