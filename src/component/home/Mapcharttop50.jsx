import React from "react";
import { useSelector } from "react-redux";
import Charttop50 from "./Charttop50";
import ananymousartist from '../../assets/images/ananymousformusicorartist.png'

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from 'swiper';
import 'swiper/css';
import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination"
import "swiper/css/grid";
import "../home/swiperslide.css"

export const Mapcharttop50 = () => {

    const chartsspecificsong = useSelector(state => state.chartsspecificsong[0])
    const widthplayermusic = useSelector(state => state.widthplayermusic)

    let lengthslide, rownumber = ''
    if (widthplayermusic <= 640) {
        lengthslide = 2
        rownumber = 1
    }
    else if (widthplayermusic <= 768) {
        lengthslide = 3
        rownumber = 2
    }
    else if (widthplayermusic <= 1024 || widthplayermusic >= 1024) {
        lengthslide = 5
        rownumber = 2
    }

    return (
        <>
            <div id="charttopmusic" className="rounded-3xl flex flex-col w-full mb-5 justify-center shadow border-grayprodark border-1 px-5 bg-testbacksecond">
                <h2 className="text font-bold p-2 my-3">Charts: Top 20</h2>
                <div className="flex w-full kosnanaekhamenei2">
                    <Swiper
                        slidesPerView={lengthslide}
                        spaceBetween={30}
                        centeredSlides={false}
                        pagination={{
                            clickable: true,
                        }}
                        grabCursor={true}
                        modules={[Pagination, Grid]}
                        grid={{ rows: rownumber, fill: "row" }} className="mySwiper"
                    >
                        {chartsspecificsong !== undefined ? chartsspecificsong.map((o, index) => (
                            <SwiperSlide className="text-blackpro mb-5" key={index}>
                                <Charttop50
                                    covermusic={o.imagesong !== undefined ? o.imagesong : ananymousartist}
                                    titlemusic={o.namesong}
                                    linkpagetitlemusic={o.linkpagesong}
                                    artistmusic={o.nameartist}
                                    linkpageartistmusic={o.linkpageartist !== undefined ? o.linkpageartist : ""}
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