import React from "react";
import { useSelector } from "react-redux";
import Topsong from "./Topsong";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from 'swiper';
import 'swiper/css';
import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination"
import "swiper/css/grid";
import "./swiperslidegrid.css"

const Mapintopsong = () => {

    const songalldetails = useSelector(state => state.songselected)
    const topsongalldetails = useSelector(state => state.topsongbyartist.topsongs)

    return (
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
                {topsongalldetails.map((o, index) => (
                    <SwiperSlide className="justify-start" key={index}>
                        <Topsong
                            key={index}
                            namemusic={o.name}
                            artistsong={o.artistName}
                            linkpageartist={songalldetails.artists.map(o => o.adamid)[0] !== undefined ? songalldetails.artists.map(o => o.adamid)[0] : ""}
                            covermusic={o.artwork.url}
                            widthforcovermusic={o.artwork.width}
                            heightforcovermusic={o.artwork.height}
                        ></Topsong>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Mapintopsong