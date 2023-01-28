import { faArrowRight, faEllipsisH, faHeart, faPlay, faShareAlt, faStar } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import accountprson from '../../../assets/images/main.png'

const Sidebarright = () => {

    return (
        <div className="flex flex-col items-end w-full">
            <div id="accountperson" className="flex items-center">
                <img src={accountprson} className="w-5 h-5 rounded-sm" />
                <p className="text-grayprolight ml-3">surena karimi</p>
            </div>
            <div className="mt-10 w-full">
                <div id="postedsfollower" className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                        <img src={accountprson} className="w-5 h-5 rounded-lg" />
                        <p className="text-grayprolight mr-6 ml-2">Posted by dun&23...</p>
                    </div>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </div>
                <div id="pinedmusic" className="mt-9 flex items-center">
                    <FontAwesomeIcon icon={faStar} className="text-violet-600"></FontAwesomeIcon>
                    <div className="mx-4 flex items-center w-10 h-10">
                        <img src={accountprson} className="w-10 h-10 rounded-lg absolute" />
                        <img src={accountprson} className="w-7 h-7 ml-6 rounded-lg" />
                    </div>
                    <p className="pl-4">Merchandise</p>
                    <div className="w-full ml-2 text-end">
                        <FontAwesomeIcon icon={faEllipsisH} className="text-grayprolight cursor-pointer" ></FontAwesomeIcon>
                    </div>
                </div>
                <div id="lastsongpalyed" className="mt-10 rounded-3xl bg-blackopacitylittle">
                    <div className="flex flex-col p-6">
                        <div className="flex">
                            <img src={accountprson} className="w-14 h-10 rounded-lg mr-2" />
                            <div>
                                <h3 className="text-base">Temples</h3>
                                <h5 className="text-sm text-graypro">Lone</h5>
                            </div>
                            <div className="w-full ml-2 text-end">
                                <FontAwesomeIcon icon={faEllipsisH} className="text-grayprolight cursor-pointer" ></FontAwesomeIcon>
                            </div>
                        </div>
                        <div id="chatmusic" className="w-full h-36">
                        </div>
                        <div id="sidedishes" className="flex justify-between items-end">
                            <div className="flex">
                                <FontAwesomeIcon icon={faHeart} className="p-2 mr-2 bg-blacklight rounded-lg cursor-pointer"></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faShareAlt} className="p-2 bg-blacklight rounded-lg cursor-pointer"></FontAwesomeIcon>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faPlay} className="text-blackopacitylittle cursor-pointer bg-orangepro p-3 rounded-full text-xs"></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="Overviewplaylistandartistandlike" className="mt-10">
                    <div className="flex">
                        <h5 className="">Playlists</h5>
                        <h5 className="text-grayprolight mx-5">Albums</h5>
                        <h5 className="text-grayprolight">Artists</h5>
                    </div>
                    <div className="mt-5">
                        <div className="flex justify-between cursor-pointer flex justify-between mt-4 cursor-pointer rounded-3xl border-graypro transition-all hover:border-b-1 hover:px-1">
                            <div className="flex">
                                <img src={accountprson} className="w-7 h-7 rounded-lg" />
                                <h5 className="ml-4">Artists</h5>
                            </div>
                            <p id="dateplaying">2D</p>
                        </div>
                        <div className="flex justify-between mt-4 cursor-pointer rounded-3xl border-graypro transition-all hover:border-b-1 hover:px-1">
                            <div className="flex">
                                <img src={accountprson} className="w-7 h-7 rounded-lg" />
                                <h5 className="ml-4">Artists</h5>
                            </div>
                            <p id="dateplaying">2D</p>
                        </div>
                        <div className="flex justify-between mt-4 cursor-pointer rounded-3xl border-graypro transition-all hover:border-b-1 hover:px-1">
                            <div className="flex">
                                <img src={accountprson} className="w-7 h-7 rounded-lg" />
                                <h5 className="ml-4">Artists</h5>
                            </div>
                            <p id="dateplaying">2D</p>
                        </div>
                        <div className="flex justify-between mt-4 cursor-pointer rounded-3xl border-graypro transition-all hover:border-b-1 hover:px-1">
                            <div className="flex">
                                <img src={accountprson} className="w-7 h-7 rounded-lg" />
                                <h5 className="ml-4">Artists</h5>
                            </div>
                            <p id="dateplaying">2D</p>
                        </div>
                        <div className="flex justify-between mt-4 cursor-pointer rounded-3xl border-graypro transition-all hover:border-b-1 hover:px-1">
                            <div className="flex">
                                <img src={accountprson} className="w-7 h-7 rounded-lg" />
                                <h5 className="ml-4">Artists</h5>
                            </div>
                            <p id="dateplaying">2D</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebarright