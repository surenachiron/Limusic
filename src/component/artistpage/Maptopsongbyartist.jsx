import React from "react";
import Topsongbyartist from "./Topsongbyartist";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from 'swiper';
import 'swiper/css';
import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination"
import "swiper/css/grid";
import "../trackpage/swiperslidegrid.css"
import { useSelector } from "react-redux";

const Maptopsongbyartist = () => {

    const topsongartist = useSelector(state => state.topsongsartist)

    return (
        <>
            <div className="flex mb-7 mt-3 kosnanaekhamenei2 rounded-xl">
                <Swiper
                    modules={[Pagination, Grid]}
                    slidesPerView={2}
                    grid={{ rows: 3, fill: "row" }}
                    centeredSlides={false}
                    spaceBetween={30}
                    grabCursor={true}
                    pagination={{ clickable: true }}
                    className="myswiper"
                >
                    {topsongartist[0].map((o, index) => (
                        <SwiperSlide className="justify-start" key={index}>
                            <Topsongbyartist
                                namemusic={o.namesong}
                                artistsong={o.nameartist}
                                linkpagemusic={o.linkpagesong}
                                linkpageartist={o.linkpageartist}
                                covermusic={o.imagesong}
                            ></Topsongbyartist>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default Maptopsongbyartist