import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Mapingandahowingmusicalbum from "./Mapingandahowingmusicalbum";

const Showmusicsalbum = () => {

    const detailsalbums = useSelector(state => state.detailsalbums.data[0])
    const artistdetails = useSelector(state => state.artistdetails)

    const covermusic = artistdetails.data.map(o => o.attributes)[0].artwork.url
    const widthforcovermusic = artistdetails.data.map(o => o.attributes)[0].artwork.width
    const heightforcovermusic = artistdetails.data.map(o => o.attributes)[0].artwork.height
    const samplecovermusic = covermusic.slice(0, covermusic.length - 13)
    const aslcovermusic = samplecovermusic + widthforcovermusic + "x" + heightforcovermusic + "bb.jpg"
    const backupdetailsalbumsforplaylist = useSelector(state => state.backupdetailsalbumsforplaylist)

    return (
        <>
            <div className="grid grid-cols-12 sm:h-60/100 border-t-1 border-grayprolight pt-10">
                <div className="md:col-span-2 zero:col-span-12 sm:flex md:block zero:hidden items-start">
                    <div className="w-fit text-center">
                        <img src={aslcovermusic} alt={`cover artist ${artistdetails.data.map(o => o.attributes)[0].name}`} className="rounded-full w-36 h-36 border-1 border-grayprolight" />
                        <NavLink to={`/artist/${artistdetails.data.map(o => o.id)}`}>
                            <h3 className="text-base mt-3">{artistdetails.data.map(o => o.attributes)[0].name}</h3>
                        </NavLink>
                    </div>
                    <div className="md:hidden zero:block ml-5">
                        <p className="font-medium mt-3">Released by:</p>
                        <p className="font-normal text-grayprolight">{detailsalbums.attributes.recordLabel}</p>
                        <p className="font-medium mt-3">Album release date:</p>
                        <p className="font-normal text-grayprolight">{detailsalbums.attributes.releaseDate}</p>
                    </div>
                </div>
                <div className="lg:col-span-8 md:col-span-10 zero:col-span-12 flex flex-col md:mt-5 zero:mt-0 ml-2 zero:mr-2 md:mr-0">
                    <div className="md:block zero:hidden sm:ml-2 md:mr-0">
                        <p className="font-medium mt-3">Released by:</p>
                        <p className="font-normal text-grayprolight">{detailsalbums.attributes.recordLabel}</p>
                        <p className="font-medium mt-3">Album release date:</p>
                        <p className="font-normal text-grayprolight">{detailsalbums.attributes.releaseDate}</p>
                    </div>
                    <div className="block sm:mt-10 zero:mt-0 sm:mb-20 zero:mb-8">
                        {backupdetailsalbumsforplaylist[0].map(o => (
                            <>
                                <Mapingandahowingmusicalbum
                                    namemusic={o.namesong}
                                    artistsong={o.nameartist}
                                    covermusic={o.imagesong}
                                    numberinalbum={o.numberinalbum}
                                ></Mapingandahowingmusicalbum>
                            </>
                        ))}
                    </div>
                </div>
                <div className="zero:col-span-12 zero:block sm:hidden sm:mb-0 zero:mb-20 mx-2">
                    <div className="w-fit text-center flex items-center">
                        <img src={aslcovermusic} alt={`cover artist ${artistdetails.data.map(o => o.attributes)[0].name}`} className="rounded-full w-20 h-20 border-1 border-grayprolight" />
                        <NavLink to={`/artist/${artistdetails.data.map(o => o.id)}`}>
                            <h3 className="text-base mt-3 ml-5">{artistdetails.data.map(o => o.attributes)[0].name}</h3>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Showmusicsalbum