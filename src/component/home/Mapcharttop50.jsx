import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper';
import { usegetspecificchartsong } from "../../services/usecahrtshomepage";
import Charttop50 from "./Charttop50";
import ananymousartist from '../../assets/images/ananymousformusicorartist.png'

import 'swiper/css';
import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination"
import "./swiperslide.css"
import "../trackpage/swiperslidegrid.css"

export const Mapcharttop50 = () => {

    const dispatch = useDispatch()

    // useEffect(() => {
    //     usegetspecificchartsong(dispatch)
    // }, [])

    const chartsspecificsong = useSelector(state => state.chartsspecificsong)

    const [widthplayermusicc, swidthplayermusicc] = useState(window.innerWidth);
    const upadatewidthplayermusic = () => {
        swidthplayermusicc(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", upadatewidthplayermusic);
        return () => window.removeEventListener("resize", upadatewidthplayermusic);
    }, [window]);
    useEffect(() => {
        window.addEventListener("resize", upadatewidthplayermusic);
        return () => window.removeEventListener("resize", upadatewidthplayermusic);
    }, [<Mapcharttop50 />]);
    let lengthslide = ''
    if (widthplayermusicc <= 640) lengthslide = 2
    else if (widthplayermusicc <= 768) lengthslide = 3
    else if (widthplayermusicc <= 1024 || widthplayermusicc >= 1024) lengthslide = 5

    return (
        <>
            <div id="charttopmusic" className="rounded-3xl flex flex-col w-full mb-5 justify-center shadow border-grayprodark border-1 px-5 bg-testbacksecond">
                <h2 className="text font-bold p-2 my-3">Charts: Top 50</h2>
                <div className="flex w-full kosnanaekhamenei2">
                    <Swiper
                        slidesPerView={lengthslide}
                        spaceBetween={30}
                        centeredSlides={false}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {chartsspecificsong.length !== 0 && chartsspecificsong !== undefined ? chartsspecificsong.tracks.slice(0, 10).map(o => (
                            <SwiperSlide className="text-blackpro mb-5">
                                <Charttop50
                                    covermusic={o.images !== undefined ? o.images.coverart : ananymousartist}
                                    titlemusic={o.title}
                                    linkpagetitlemusic={o.key}
                                    artistmusic={o.subtitle}
                                    linkpageartistmusic={o.artists !== undefined ? o.artists.map(o => o.adamid) : ""}
                                >
                                </Charttop50>
                            </SwiperSlide>
                        )) : <h2 className="text-grayprolight font-bold p-2 my-3">sory we cant coldnt with server</h2>}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Mapcharttop50