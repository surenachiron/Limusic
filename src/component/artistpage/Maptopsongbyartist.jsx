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

    const artistdetails = useSelector(state => state.artistdetails)
    const topsongartist = useSelector(state => state.topsongsartist)

    return (
        <>
            <div className="flex mb-7 mt-4 kosnanaekhamenei2 rounded-xl">
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
                    {topsongartist.data.map(o => (
                        <SwiperSlide className="justify-start" key={o.index}>
                            <Topsongbyartist
                                namemusic={o.attributes.name}
                                artistsong={o.attributes.artistName}
                                linkpagemusic={o.id}
                                linkpageartist={artistdetails.data.map(o => o.id)[0]}
                                covermusic={o.attributes.artwork.url}
                                widthforcovermusic={o.attributes.artwork.width}
                                heightforcovermusic={o.attributes.artwork.height}
                            ></Topsongbyartist>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default Maptopsongbyartist