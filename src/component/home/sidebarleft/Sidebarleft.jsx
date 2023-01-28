import { faHome, faMusic, faPlay } from "@fortawesome/fontawesome-free-solid";
import { faHeartMusicCameraBolt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";

const Sidebarleft = () => {

    return (
        <div className="sticky top-0 pt-4">
            <h1 className="text-2xl text-bluepro font-bold">LiMusic</h1>
            <div className="mt-10">
                <h2 className="text-1xl text-white">Browser Music</h2>
                <div className="mt-7" id="menu">
                    <ul>
                        <li className="flex items-center content-center border-graypro rounded-lg pr-5 font-bold-none text-grayprolight transition-all hover:border-b-1 hover:pl-1 hover:pb-1 hover:text-white">
                            <FontAwesomeIcon icon={faHome} className="mr-2" style={{ width: "19px", height: "15px" }}></FontAwesomeIcon>
                            <p className="text-sm">Home</p>
                        </li>
                        <li className="flex items-center content-center border-graypro rounded-lg pr-5 font-bold-none text-grayprolight transition-all hover:border-b-1  hover:pl-1 hover:pb-1 mt-6 hover:text-white">
                            <FontAwesomeIcon icon={faHeartMusicCameraBolt} className="mr-2" style={{ width: "19px", height: "15px" }}></FontAwesomeIcon>
                            <p className="text-sm">Albums</p>
                        </li>
                        <li className="flex items-center content-cente border-graypro rounded-lg pr-5 font-bold-none text-grayprolight transition-all hover:border-b-1  hover:pl-1 hover:pb-1 mt-6 hover:text-white">
                            <FontAwesomeIcon icon={faPlay} className="mr-2" style={{ width: "19px", height: "15px" }}></FontAwesomeIcon>
                            <p className="text-sm">Tracks</p>
                        </li>
                        <li className="flex items-center content-center border-graypro rounded-lg pr-5 font-bold-none text-grayprolight transition-all hover:border-b-1  hover:pl-1 hover:pb-1 mt-6 hover:text-white">
                            <FontAwesomeIcon icon={faMusic} className="mr-2" style={{ width: "19px", height: "15px" }}></FontAwesomeIcon>
                            <p className="text-sm">Genres</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-10">
                <h2 className="text-1xl text-white">Browser Music</h2>
                <div className="mt-7" id="menu">
                    <ul>
                        <li className="flex items-center content-center border-graypro rounded-lg pr-5 font-bold-none text-grayprolight transition-all hover:border-b-1  hover:pl-1 hover:pb-1 hover:text-white">
                            <FontAwesomeIcon icon={faHome} className="mr-2" style={{ width: "19px", height: "15px" }}></FontAwesomeIcon>
                            <p className="text-sm">Home</p>
                        </li>
                        <li className="flex items-center content-center border-graypro rounded-lg pr-5 font-bold-none text-grayprolight transition-all hover:border-b-1  hover:pl-1 hover:pb-1 mt-6 hover:text-white">
                            <FontAwesomeIcon icon={faHeartMusicCameraBolt} className="mr-2" style={{ width: "19px", height: "15px" }}></FontAwesomeIcon>
                            <p className="text-sm">Albums</p>
                        </li>
                        <li className="flex items-center content-center border-graypro rounded-lg pr-5 font-bold-none text-grayprolight transition-all hover:border-b-1  hover:pl-1 hover:pb-1 mt-6 hover:text-white">
                            <FontAwesomeIcon icon={faPlay} className="mr-2" style={{ width: "19px", height: "15px" }}></FontAwesomeIcon>
                            <p className="text-sm">Tracks</p>
                        </li>
                        <li className="flex items-center content-center border-graypro rounded-lg pr-5 font-bold-none text-grayprolight transition-all hover:border-b-1  hover:pl-1 hover:pb-1 mt-6 hover:text-white">
                            <FontAwesomeIcon icon={faMusic} className="mr-2" style={{ width: "19px", height: "15px" }}></FontAwesomeIcon>
                            <p className="text-sm">Genres</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebarleft